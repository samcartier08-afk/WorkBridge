import { WorkspaceScenario } from '../types';

export const WORKSPACE_SCENARIOS: WorkspaceScenario[] = [
  {
    id: 'scenario-1-engineering',
    roleId: 'software_engineer',
    title: 'Client Data Ingestion Service with Resilient Error Recovery',
    domain: 'Software Engineering & Cloud Architecture',
    task: {
      prompt: 'Write a TypeScript background worker to fetch customer events from a third-party webhook API and write them to our PostgreSQL database with error retries.',
      intent: 'Automate repetitive boilerplate while ensuring enterprise-grade reliability, idempotency, and edge-case error handling.',
      context: 'The webhook can occasionally send 50,000 events/minute with bursty latency. Third-party provider limits calls to 50 req/sec.'
    },
    aiDraft: {
      output: `// AI Raw Draft (Fast generation, generic happy path)
import axios from 'axios';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function processWebhookEvents(events: any[]) {
  for (const event of events) {
    try {
      await pool.query(
        'INSERT INTO customer_events (id, data, created_at) VALUES ($1, $2, $3)',
        [event.id, JSON.stringify(event.payload), new Date()]
      );
    } catch (err) {
      console.error('Error inserting event, retrying...', err);
      // Wait 1 second and retry once
      await new Promise(res => setTimeout(res, 1000));
      await pool.query(
        'INSERT INTO customer_events (id, data, created_at) VALUES ($1, $2, $3)',
        [event.id, JSON.stringify(event.payload), new Date()]
      );
    }
  }
}`,
      pros: [
        'Syntactically valid TypeScript code created in 3 seconds',
        'Basic database query boilerplate in place',
        'Acknowledged need for a try/catch block'
      ],
      weaknesses: [
        'Dangerous sequential for-loop locks connection pool on large batches (50k events would take hours)',
        'Vulnerable to SQL duplicate key crashes: lacks ON CONFLICT DO NOTHING (idempotency)',
        'Naive 1-second fixed sleep without exponential backoff or jitter creates thundering herd',
        'Uses any[] types with no runtime schema validation (Zod)',
        'Uncaught error on second retry drops data silently without a Dead Letter Queue (DLQ)'
      ]
    },
    humanReview: {
      checklist: [
        {
          id: 'rv-1',
          label: 'Enforce Idempotency & Conflict Handling',
          checked: true,
          tip: 'Network webhooks always deliver at-least-once. Deduplication key is mandatory.'
        },
        {
          id: 'rv-2',
          label: 'Batch Multi-Row Inserts instead of Single-Row Loops',
          checked: true,
          tip: 'Batching 1,000 items per transaction prevents exhausting database connections.'
        },
        {
          id: 'rv-3',
          label: 'Exponential Backoff with Jitter & Dead Letter Queue (DLQ)',
          checked: true,
          tip: 'Prevents overwhelming downstream databases during partial network outages.'
        },
        {
          id: 'rv-4',
          label: 'Strict Runtime Type Validation (Zod)',
          checked: true,
          tip: 'Do not trust webhook payloads blindly; validate fields before inserting.'
        }
      ],
      interventions: [
        'Rewrote sequential loop into transactional batch chunks (UNNEST or bulk insert).',
        'Added ON CONFLICT (id) DO UPDATE SET updated_at = EXCLUDED.updated_at for idempotency.',
        'Routed permanently failing messages to an SQS/Kafka Dead Letter Queue for human triage.',
        'Injected structured OpenTelemetry tracing tags and alert counters.'
      ],
      critiqueNotes: 'The AI draft is classic junior boilerplate: it passes a trivial local test but would take down a production database under real webhook bursts. The human engineer adds the operational safety, batching math, and idempotency guarantees.'
    },
    improvedResult: {
      output: `// Improved Result: Human Architecture + AI Speed
import { Pool, PoolClient } from 'pg';
import { z } from 'zod';
import { sendToDeadLetterQueue } from './dlq';
import { logger } from './observability';

const EventSchema = z.object({
  id: z.string().uuid(),
  payload: z.record(z.unknown()),
  timestamp: z.string().datetime(),
});

type ValidatedEvent = z.infer<typeof EventSchema>;

const BATCH_SIZE = 500;
const MAX_RETRIES = 3;

/**
 * High-throughput resilient ingestion worker with idempotency guarantees,
 * exponential jittered backoff, and DLQ routing.
 */
export async function processWebhookEvents(
  rawEvents: unknown[],
  pool: Pool
): Promise<{ processed: number; failed: number }> {
  // 1. Human Guard: Runtime schema validation
  const validEvents: ValidatedEvent[] = [];
  let validationFailures = 0;

  for (const raw of rawEvents) {
    const parsed = EventSchema.safeParse(raw);
    if (parsed.success) {
      validEvents.push(parsed.data);
    } else {
      validationFailures++;
      await sendToDeadLetterQueue({ raw, reason: parsed.error.message });
    }
  }

  // 2. Human Guard: Process in controlled chunks to respect connection limits
  let successCount = 0;
  for (let i = 0; i < validEvents.length; i += BATCH_SIZE) {
    const chunk = validEvents.slice(i, i + BATCH_SIZE);
    await insertBatchWithRetry(chunk, pool, MAX_RETRIES);
    successCount += chunk.length;
  }

  logger.info({ processed: successCount, rejected: validationFailures }, 'Batch complete');
  return { processed: successCount, failed: validationFailures };
}

async function insertBatchWithRetry(
  events: ValidatedEvent[],
  pool: Pool,
  retriesLeft: number
): Promise<void> {
  const client: PoolClient = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Idempotent multi-row parameterized query
    const ids = events.map(e => e.id);
    const payloads = events.map(e => JSON.stringify(e.payload));
    const timestamps = events.map(e => e.timestamp);

    await client.query(\`
      INSERT INTO customer_events (id, data, created_at)
      SELECT * FROM UNNEST($1::uuid[], $2::jsonb[], $3::timestamptz[])
      ON CONFLICT (id) DO UPDATE 
      SET data = EXCLUDED.data, updated_at = NOW()
    \`, [ids, payloads, timestamps]);

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    if (retriesLeft > 0) {
      // Exponential backoff with random full jitter
      const backoffMs = Math.pow(2, MAX_RETRIES - retriesLeft) * 200 + Math.random() * 100;
      await new Promise(r => setTimeout(r, backoffMs));
      return insertBatchWithRetry(events, pool, retriesLeft - 1);
    }
    // Terminal failure: route batch to dead letter queue
    await sendToDeadLetterQueue({ batch: events, error: String(error) });
  } finally {
    client.release();
  }
}`,
      humanValueAdded: [
        'Idempotency guarantee (ON CONFLICT): safe against duplicate deliveries',
        'Memory-safe batching (UNNEST) cuts 50,000 DB round-trips to just 100 queries',
        'Runtime Zod schema guard stops malformed payloads from polluting the database',
        'Jittered exponential backoff prevents thundering herd failure cascading',
        'Zero-loss Dead Letter Queue (DLQ) ensures no customer transactions are lost'
      ],
      craftMetrics: [
        { label: 'Throughput Speedup', value: '42x faster' },
        { label: 'Database Connection Load', value: '-94% reduction' },
        { label: 'Data Loss Risk', value: '0% (DLQ Protected)' }
      ]
    }
  },
  {
    id: 'scenario-2-marketing',
    roleId: 'content_marketing',
    title: 'Enterprise Client Expansion Proposal & Strategy Memo',
    domain: 'Marketing & Strategic Communications',
    task: {
      prompt: 'Draft an executive pitch email proposing a strategic transition from a pilot to an enterprise annual contract for a fintech client experiencing 200% team growth.',
      intent: 'Translate product utilization into executive value without sounding like an aggressive, canned sales pitch.',
      context: 'The client VP of Ops values data privacy, team workflow autonomy, and clear ROI metrics, and is wary of vendor lock-in.'
    },
    aiDraft: {
      output: `Subject: Supercharge Your Fintech Workflow with Enterprise!

Dear VP of Operations,

I hope this email finds you well! I noticed that your team has been growing by leaps and bounds lately! Congratulations on your incredible 200% growth! 

As you scale to the next level, our game-changing Enterprise Plan is designed to seamlessly unlock unprecedented synergy, supercharge your operational efficiency, and empower your teams to reach their full potential.

Key benefits of our cutting-edge platform:
- Next-gen AI features to automate tedious tasks
- Seamless collaboration across all your stakeholders
- 24/7 world-class customer support
- Robust security you can trust

Would you be open to a quick 15-minute sync this Thursday at 2 PM to explore how we can partner together for your digital transformation journey?

Best regards,
Account Executive`,
      pros: [
        'Polite and grammatically flawless',
        'Generated in 2 seconds without writer\'s block',
        'Follows standard outbound sales template format'
      ],
      weaknesses: [
        'Full of generic AI buzzwords ("supercharge", "synergy", "seamlessly unlock", "game-changing")',
        'Zero mention of their actual fintech compliance requirements or specific data needs',
        'Does not cite any usage data from their active pilot (feels like cold spam)',
        'Tone is overly aggressive and promotional rather than peer-level consultative',
        'Fails to address their primary known hesitation: vendor lock-in and security audits'
      ]
    },
    humanReview: {
      checklist: [
        {
          id: 'rv-m1',
          label: 'Purge Generic SaaS Clichés ("Anti-Slop")',
          checked: true,
          tip: 'Ban words like supercharge, empower, seamless, cutting-edge, synergy.'
        },
        {
          id: 'rv-m2',
          label: 'Cite Concrete Pilot Usage Metrics',
          checked: true,
          tip: 'Use real numbers: e.g. 4,200 hours saved across their 45 active pilot seats.'
        },
        {
          id: 'rv-m3',
          label: 'Address SOC2/Fintech Governance Proactively',
          checked: true,
          tip: 'Fintech VPs care about audit logs and single-tenant data isolation.'
        },
        {
          id: 'rv-m4',
          label: 'Peer-Level Consultative Tone',
          checked: true,
          tip: 'Position as a strategic advisor evaluating capacity, not a hungry rep closing quota.'
        }
      ],
      interventions: [
        'Stripped 100% of the hype adjectives and replaced with quantified pilot telemetry.',
        'Highlighted SOC2 Type II compliance and single-tenant privacy boundaries upfront.',
        'Proposed a co-governance roadmap tailored to their planned Q4 audit cycle.',
        'Gave them an out: invited an honest retrospective rather than forcing a 15-min calendar link.'
      ],
      critiqueNotes: 'The initial draft is an instant red flag to a busy VP: it sounds like automated outbound spam. The human strategist incorporates actual pilot data, respects the reader\'s intelligence, and tackles the unstated compliance fears directly.'
    },
    improvedResult: {
      output: `Subject: Pilot review & enterprise governance for Horizon Financial (45-seat milestone)

Hi Sarah,

Over the last 90 days, Horizon's risk and compliance teams logged 1,840 automated audit verifications across your 45 pilot seats—saving an estimated 320 analyst hours during your recent SEC filing sprint.

With your engineering and compliance headcount expanding toward 120 by Q4, three specific operational questions usually arise for teams in regulated fintech:

1. SOC2 & Data Sovereignty: Ensuring customer transaction telemetry is zero-retention on our model providers, with dedicated EU/US single-tenant tenancy.
2. Centralized RBAC & SCIM: Automating user provisioning through your Okta directory so access revokes instantly when contractors roll off.
3. Cost Predictability: Moving from unpredictable seat additions to a fixed enterprise tier with dedicated solution architect reviews.

I put together a 1-page breakdown comparing your current seat expansion trajectory against the enterprise governance framework: [Link: Horizon-Q4-Governance-Brief.pdf].

If useful, happy to walk your compliance lead through the audit architecture—or we can review the data asynchronously whenever your Q4 planning cycle kicks off.

Best,
Marcus Chen
Director of Customer Architecture`,
      humanValueAdded: [
        'Concrete evidence: 1,840 audit verifications and 320 hours saved',
        'Regulatory domain resonance: zero-retention policy, Okta SCIM, SOC2',
        'Respectful, low-pressure framing that invites trust rather than defensiveness',
        'Tailored asset (1-page governance brief) instead of asking them for a generic meeting',
        'Establishes peer-level consulting authority'
      ],
      craftMetrics: [
        { label: 'Buzzword Ratio', value: '0% (Completely Purged)' },
        { label: 'Executive Readability', value: 'High (Scannable in 30s)' },
        { label: 'Fintech Trust Signal', value: '9.8 / 10' }
      ]
    }
  },
  {
    id: 'scenario-3-design',
    roleId: 'product_designer',
    title: 'Contextual AI Feedback & Human Oversight Interface',
    domain: 'Product Design & Human-AI Interaction',
    task: {
      prompt: 'Design the interaction pattern for a medical diagnostic assistant when an AI suggestion has high uncertainty or conflicting clinical indicators.',
      intent: 'Create an interface that prevents automated doctor complacency (automation bias) while giving clear cognitive affordances.',
      context: 'Doctors have 4 minutes per patient; cognitive load is high, and a missed indicator has severe clinical consequences.'
    },
    aiDraft: {
      output: `[AI Raw UI Draft]:
A bright red flashing popup modal:
"WARNING: AI CONFIDENCE LOW (54%)!
The algorithm has detected potential anomalies in Scan #402. Please review the highlighted red boxes carefully.
[ ACCEPT AI SUGGESTION ]    [ REJECT ]"`,
      pros: [
        'Recognized that low confidence should be marked',
        'Included both accept and reject buttons'
      ],
      weaknesses: [
        'Modal dialog interrupts clinical flow and induces alert fatigue (doctors dismiss modals reflexively)',
        'Binary "Accept/Reject" encourages either blind trust or total abandonment',
        'No clinical explanation of WHY the model is uncertain (unhelpful black box)',
        'Alarmist red styling increases cortisol without improving diagnostic accuracy'
      ]
    },
    humanReview: {
      checklist: [
        {
          id: 'rv-d1',
          label: 'Eliminate Blocking Modals to Prevent Alert Fatigue',
          checked: true,
          tip: 'Embed non-intrusive ambient cues in the primary scan viewing canvas.'
        },
        {
          id: 'rv-d2',
          label: 'Provide Transparent Confidence Decomposition',
          checked: true,
          tip: 'Explain the differential diagnosis and which specific pixels or lab values conflicted.'
        },
        {
          id: 'rv-d3',
          label: 'Active Verification Affordances',
          checked: true,
          tip: 'Require clinician to annotate or confirm key anatomical landmark before acting.'
        }
      ],
      interventions: [
        'Replaced modal with an ambient dual-layer inspection pane.',
        'Added "Differential Hypotheses" breakdown showing competing clinical probabilities.',
        'Provided quick 1-click comparison slider with patient historical baseline scans.',
        'Logged clinician rationale for institutional safety and continuous model evaluation.'
      ],
      critiqueNotes: 'In high-stakes domains, generic UI patterns like modal alerts kill. The human designer understands cognitive ergonomics, alert fatigue, and medico-legal accountability.'
    },
    improvedResult: {
      output: `[Improved Interface Architecture: Ambient Clinical Co-Pilot]:
1. Ambient Canvas Marker:
   - Subtle calm amber bounding outline (not alarmist red) on anatomical region L3-L4.
   - Expandable on hover or keyboard shortcut (Spacebar), zero screen-blocking popups.

2. Transparent Evidence Drawer:
   - "Primary Hypothesis (58%): Early inflammatory spondylitis"
   - "Alternative Differential (34%): Degenerative osteophyte formation"
   - Conflicting Signal: Patient CRP lab level (3.2 mg/L) is lower than typical for acute inflammation.

3. Clinician Verification Knob:
   - Split-screen slider comparing current scan with patient\'s 2024 baseline.
   - Quick-action chips: [Confirm Inflammatory] [Flag as Degenerative] [Request Contrast MRI].
   - 1-sentence quick voice/text note to append clinical context to EHR automatically.`,
      humanValueAdded: [
        'Eliminated alert fatigue: seamless ambient canvas integration',
        'Explainable AI: shows the conflicting lab value rather than a mysterious percentage',
        'Preserves physician agency and prevents automation bias',
        'Designed for high-stress, time-compressed hospital environments'
      ],
      craftMetrics: [
        { label: 'Cognitive Friction', value: '-70% reduction' },
        { label: 'Diagnostic Verification', value: 'Active (Non-Passive)' },
        { label: 'Safety Compliance', value: 'FDA SaMD Aligned' }
      ]
    }
  }
];

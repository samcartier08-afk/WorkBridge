import { AIImpactBreakdown, UserRoleType } from '../types';

export const AI_IMPACT_BY_ROLE: Record<UserRoleType, AIImpactBreakdown> = {
  software_engineer: {
    automated: {
      percentage: 35,
      description: 'Standard boilerplate, routine CRUD endpoints, unit test scaffolding, regex construction, syntax translation.',
      tasks: [
        {
          id: 'se-auto-1',
          taskName: 'Boilerplate Syntax & Repetitive Scaffolding',
          description: 'Writing repetitive React components, standard getters/setters, basic CRUD database migrations.',
          timeSpentBefore: '12 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'LLMs have seen millions of standard syntax patterns and can emit deterministic scaffolding instantaneously.',
          humanElevatorStrategy: 'Direct your time to verifying security boundaries, state lifecycle nuances, and schema resilience.'
        },
        {
          id: 'se-auto-2',
          taskName: 'Basic Unit Test Scaffolding & Mocking',
          description: 'Generating happy-path unit tests, mock fixtures, and type definitions.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '1.5 hrs/week',
          reason: 'Pattern-matching functions to input/output assertions is highly suited to code models.',
          humanElevatorStrategy: 'Focus on designing adversarial tests, concurrency race conditions, and integration chaos testing.'
        },
        {
          id: 'se-auto-3',
          taskName: 'Regex & Routine Scripting',
          description: 'Constructing string parsers, data reformatting scripts, and shell automation.',
          timeSpentBefore: '4 hrs/week',
          timeSpentWithAI: '0.5 hrs/week',
          reason: 'Trivial natural language to regex translation.',
          humanElevatorStrategy: 'Inspect memory bounds and edge cases that automated regex engines notoriously fail on.'
        }
      ]
    },
    augmented: {
      percentage: 45,
      description: 'Complex debugging, architecture exploration, API documentation synthesis, legacy refactoring, performance profiling.',
      tasks: [
        {
          id: 'se-aug-1',
          taskName: 'Diagnostic Root-Cause Analysis & Debugging',
          description: 'Pasting stack traces, profiling logs, and telemetry to isolate elusive memory leaks or boundary flaws.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '3 hrs/week',
          reason: 'AI synthesizes multi-file context and suggests hypotheses, but human intuition knows production environment constraints.',
          humanElevatorStrategy: 'Pair human architectural understanding with AI telemetry search to resolve incidents 3x faster.'
        },
        {
          id: 'se-aug-2',
          taskName: 'API Integration & Library Adoption',
          description: 'Reading third-party SDK documentation, drafting initial client wrappers, and verifying schemas.',
          timeSpentBefore: '6 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'Models rapidly distill 50-page docs into runnable client snippets with type bindings.',
          humanElevatorStrategy: 'Critique rate limits, retry policies, backoff mechanisms, and token security.'
        },
        {
          id: 'se-aug-3',
          taskName: 'Refactoring & Modernization',
          description: 'Migrating legacy patterns (e.g., class components to functional, callback hell to async/await).',
          timeSpentBefore: '7 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'AI safely transforms syntactic AST structures across files under developer supervision.',
          humanElevatorStrategy: 'Ensure domain invariants and subtle side effects are preserved throughout the codebase.'
        }
      ]
    },
    human: {
      percentage: 20,
      description: 'System tradeoffs, security governance, stakeholder alignment, user empathy, ethical edge cases, distributed consensus.',
      tasks: [
        {
          id: 'se-hum-1',
          taskName: 'System Architecture & Irreversible Tradeoffs',
          description: 'Choosing event-driven vs monolithic databases, CAP theorem tradeoffs, multi-region failover design.',
          timeSpentBefore: '6 hrs/week',
          timeSpentWithAI: '8 hrs/week (increased focus)',
          reason: 'AI lacks organizational context, business runways, team capability thresholds, and long-term liability awareness.',
          humanElevatorStrategy: 'Become the trusted technical architect who balances operational cost, team velocity, and reliability.'
        },
        {
          id: 'se-hum-2',
          taskName: 'Cross-functional Empathy & Product Alignment',
          description: 'Translating vague user pains from sales and support into crisp technical requirements and roadmaps.',
          timeSpentBefore: '4 hrs/week',
          timeSpentWithAI: '6 hrs/week',
          reason: 'Building the right product requires human empathy, active listening, and social consensus that AI cannot replicate.',
          humanElevatorStrategy: 'Lead sprint planning, conduct developer experience reviews, and mentor junior teammates.'
        },
        {
          id: 'se-hum-3',
          taskName: 'Ethical Oversight & Critical Code Reviews',
          description: 'Vetting algorithmic bias, data privacy compliance (GDPR/HIPAA), and protecting against malicious prompt injection.',
          timeSpentBefore: '2 hrs/week',
          timeSpentWithAI: '5 hrs/week',
          reason: 'AI output contains subtle hallucinations and confident mistakes; human verification is the last line of defense.',
          humanElevatorStrategy: 'Establish team verification checklists, red-teaming protocols, and safe AI deployment pipelines.'
        }
      ]
    }
  },
  content_marketing: {
    automated: {
      percentage: 40,
      description: 'First drafts of basic social posts, meta descriptions, transcription summaries, proofreading, formatting.',
      tasks: [
        {
          id: 'cm-auto-1',
          taskName: 'Routine Social Snippets & Variations',
          description: 'Re-spinning a single blog post into 10 multi-platform social blurbs and tweets.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '1.5 hrs/week',
          reason: 'LLMs excel at rapid text length adaptation and tone formatting.',
          humanElevatorStrategy: 'Inject authentic human founder voice, contrarian perspectives, and real screenshot artifacts.'
        },
        {
          id: 'cm-auto-2',
          taskName: 'SEO Meta Descriptions & FAQ Generation',
          description: 'Writing generic meta descriptions, title tags, and standard structured schema data.',
          timeSpentBefore: '6 hrs/week',
          timeSpentWithAI: '1 hr/week',
          reason: 'Direct keyword-to-sentence synthesis is fully commoditized.',
          humanElevatorStrategy: 'Focus on original primary research, proprietary surveys, and un-googleable insider interviews.'
        }
      ]
    },
    augmented: {
      percentage: 40,
      description: 'Audience persona research, long-form outlining, competitor content gap audits, email sequence drafting.',
      tasks: [
        {
          id: 'cm-aug-1',
          taskName: 'Competitive Intelligence & Gap Discovery',
          description: 'Feeding industry whitepapers and competitor blogs into AI to spot overlooked customer questions.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '2.5 hrs/week',
          reason: 'Semantic comparison across hundreds of articles in minutes.',
          humanElevatorStrategy: 'Use gaps to commission deeply reported investigative pieces that stand out against generic AI slop.'
        },
        {
          id: 'cm-aug-2',
          taskName: 'Interactive Campaign Brainstorming',
          description: 'Sparring with an AI partner to generate 50 angles for a product launch.',
          timeSpentBefore: '6 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'AI acts as a relentless lateral ideation partner without creative fatigue.',
          humanElevatorStrategy: 'Apply rigorous editorial filter to pick the 1-2 truly resonant, culturally savvy hooks.'
        }
      ]
    },
    human: {
      percentage: 20,
      description: 'Brand soul, authentic storytelling, emotional resonance, ethical taste, high-stakes crisis communications.',
      tasks: [
        {
          id: 'cm-hum-1',
          taskName: 'Brand Stewardship & Editorial Voice',
          description: 'Protecting the company from soulless corporate cliches and establishing an unmistakable perspective.',
          timeSpentBefore: '5 hrs/week',
          timeSpentWithAI: '9 hrs/week',
          reason: 'Audiences immediately recognize AI-generated fluff. Human vulnerability and genuine point-of-view build trust.',
          humanElevatorStrategy: 'Curate customer stories, podcast dialogues, and signature essays that foster true community.'
        },
        {
          id: 'cm-hum-2',
          taskName: 'Strategic Partnerships & Co-Marketing',
          description: 'Building mutual trust with podcast hosts, industry leaders, and media partners for organic distribution.',
          timeSpentBefore: '4 hrs/week',
          timeSpentWithAI: '7 hrs/week',
          reason: 'High-value relationships are founded on human rapport, mutual respect, and reciprocal commitments.',
          humanElevatorStrategy: 'Host intimate customer roundtables, VIP dinners, and executive advisory councils.'
        }
      ]
    }
  },
  product_designer: {
    automated: {
      percentage: 30,
      description: 'Icon search, standard form layouts, responsive breakpoint resizing, generating lorem ipsum, color contrast checks.',
      tasks: [
        {
          id: 'pd-auto-1',
          taskName: 'Production Asset Export & Spec Generation',
          description: 'Exporting SVGs, generating redline specs, formatting design tokens for engineers.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '1 hr/week',
          reason: 'Design tools now directly compile token variables to code.',
          humanElevatorStrategy: 'Spend gained hours conducting field observation sessions with actual users.'
        },
        {
          id: 'pd-auto-2',
          taskName: 'Stock Imagery & Placeholder Content',
          description: 'Filling tables with realistic fake data, user avatars, and localized text strings.',
          timeSpentBefore: '5 hrs/week',
          timeSpentWithAI: '0.5 hrs/week',
          reason: 'Generative tools populate authentic context-aware mock data in one click.',
          humanElevatorStrategy: 'Stress-test designs with edge case states (extreme overflow, right-to-left languages, screen readers).'
        }
      ]
    },
    augmented: {
      percentage: 45,
      description: 'Rapid interactive prototyping, microcopy drafting, design exploration, synthesizing qualitative user interviews.',
      tasks: [
        {
          id: 'pd-aug-1',
          taskName: 'User Interview Synthesis & Affinity Mapping',
          description: 'Transcribing 20 hours of user tests and grouping recurring pain points into thematic clusters.',
          timeSpentBefore: '12 hrs/week',
          timeSpentWithAI: '3 hrs/week',
          reason: 'Natural language clustering extracts quotes and sentiments across vast audio logs instantly.',
          humanElevatorStrategy: 'Look beyond spoken words to detect unstated micro-hesitations, body language, and emotional frustration.'
        },
        {
          id: 'pd-aug-2',
          taskName: 'Generative Wireframing & Flow Exploration',
          description: 'Prompting multiple layout permutations for complex onboarding or checkout flows.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'Broadens the funnel of exploratory ideas before committing to high-fidelity Figma files.',
          humanElevatorStrategy: 'Apply cognitive load principles and brand elegance to select and refine the winning journey.'
        }
      ]
    },
    human: {
      percentage: 25,
      description: 'Physical & emotional ergonomics, ethical behavior design, inclusive accessibility, cross-functional vision.',
      tasks: [
        {
          id: 'pd-hum-1',
          taskName: 'Cognitive Ergonomics & Joy in Craft',
          description: 'Designing delightful micro-interactions, haptic feedback, and frictionless mental models.',
          timeSpentBefore: '6 hrs/week',
          timeSpentWithAI: '10 hrs/week',
          reason: 'Understanding the nuanced cognitive state of a stressed user requires deep human empathy.',
          humanElevatorStrategy: 'Design experiences that feel respectful of human attention rather than addictive or manipulative.'
        }
      ]
    }
  },
  financial_analyst: {
    automated: {
      percentage: 45,
      description: 'Transaction categorization, routine formula updates, standardized variance calculations, SEC filing scraping.',
      tasks: [
        {
          id: 'fa-auto-1',
          taskName: 'Data Ingestion & Bank Statement Reconciliation',
          description: 'Pulling general ledger transactions, matching receipts, and flagging duplicate entries.',
          timeSpentBefore: '14 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'Optical character recognition paired with rule-based models handles structured accounting reconciliation.',
          humanElevatorStrategy: 'Audit system edge cases and design internal financial controls against fraud.'
        }
      ]
    },
    augmented: {
      percentage: 35,
      description: 'Scenario sensitivity modeling, financial narrative drafting, industry benchmark comparative analysis.',
      tasks: [
        {
          id: 'fa-aug-1',
          taskName: 'Multi-Scenario Sensitivity Modeling',
          description: 'Running Monte Carlo simulations and assessing interest rate impacts across portfolio assets.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '3 hrs/week',
          reason: 'AI algorithms rapidly simulate probability curves across thousands of parameter iterations.',
          humanElevatorStrategy: 'Formulate the underlying stress-test hypotheses and challenge model assumptions.'
        }
      ]
    },
    human: {
      percentage: 20,
      description: 'Executive advisory, risk appetite determination, ethical capital allocation, high-stakes negotiation.',
      tasks: [
        {
          id: 'fa-hum-1',
          taskName: 'Strategic C-Suite Advisory & Storytelling',
          description: 'Translating dense financial tables into a compelling, grounded narrative for board meetings.',
          timeSpentBefore: '4 hrs/week',
          timeSpentWithAI: '8 hrs/week',
          reason: 'Boards trust human judgment, integrity, and ethical conviction when allocating millions in capital.',
          humanElevatorStrategy: 'Become the trusted strategic advisor who frames capital allocation around human values.'
        }
      ]
    }
  },
  customer_success: {
    automated: {
      percentage: 50,
      description: 'Tier-1 FAQ replies, ticket routing, password resets, basic billing receipt lookups, spam triage.',
      tasks: [
        {
          id: 'cs-auto-1',
          taskName: 'Tier 1 Knowledge Base Answering',
          description: 'Answering common queries on refund policies, system requirements, and step-by-step navigation.',
          timeSpentBefore: '16 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'RAG search over support docs resolves standard factual tickets without human intervention.',
          humanElevatorStrategy: 'Review deflection logs to uncover product UX flaws and propose engineering fixes.'
        }
      ]
    },
    augmented: {
      percentage: 30,
      description: 'Churn risk prediction, complex technical ticket diagnosis, drafting personalized customer quarterly reviews.',
      tasks: [
        {
          id: 'cs-aug-1',
          taskName: 'Account Health & Churn Signal Analysis',
          description: 'Synthesizing usage drops, feature abandonment, and executive sponsor turnover into alert flags.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '2.5 hrs/week',
          reason: 'Predictive classifiers identify accounts trending toward churn weeks before renewal.',
          humanElevatorStrategy: 'Intervene with personalized executive outreach to solve underlying customer roadblocks.'
        }
      ]
    },
    human: {
      percentage: 20,
      description: 'Executive sponsor relationship building, crisis de-escalation, empathy in downtime, renewal negotiations.',
      tasks: [
        {
          id: 'cs-hum-1',
          taskName: 'High-Stakes Crisis De-escalation & Trust',
          description: 'Getting on urgent video calls during service outages or contract disputes with top accounts.',
          timeSpentBefore: '4 hrs/week',
          timeSpentWithAI: '8 hrs/week',
          reason: 'Angry customers need genuine empathy, accountability, and reassurance from a committed human.',
          humanElevatorStrategy: 'Turn stressful incidents into long-term customer loyalty through radical transparency.'
        }
      ]
    }
  },
  project_manager: {
    automated: {
      percentage: 40,
      description: 'Meeting notes transcription, action item extraction, standup summary emails, Gantt chart date cascading.',
      tasks: [
        {
          id: 'pm-auto-1',
          taskName: 'Meeting Minutes & Action Item Log Extraction',
          description: 'Manually typing summaries and assigning Jira tickets from 1-hour sprint ceremonies.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '1 hr/week',
          reason: 'Speech models instantly create structured action item matrices tagged with owners and deadlines.',
          humanElevatorStrategy: 'Focus meeting energy on debate, alignment, and consensus rather than taking notes.'
        }
      ]
    },
    augmented: {
      percentage: 35,
      description: 'Dependency risk mapping, velocity forecasting, project status report compilation, resource allocation models.',
      tasks: [
        {
          id: 'pm-aug-1',
          taskName: 'Cross-Team Dependency & Bottleneck Prediction',
          description: 'Analyzing ticket blockage patterns across marketing, design, and engineering.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '2.5 hrs/week',
          reason: 'AI surfaces hidden inter-team dependencies before they stall release cycles.',
          humanElevatorStrategy: 'Negotiate priority tradeoffs with team leads to unblock critical path deliverables.'
        }
      ]
    },
    human: {
      percentage: 25,
      description: 'Team psychological safety, conflict resolution, unblocking political barriers, morale inspiration.',
      tasks: [
        {
          id: 'pm-hum-1',
          taskName: 'Interpersonal Conflict Resolution & Psychological Safety',
          description: 'Mediating disagreements between opinionated engineering leads and product managers.',
          timeSpentBefore: '5 hrs/week',
          timeSpentWithAI: '9 hrs/week',
          reason: 'Team cohesion depends on trust, empathy, and emotional intelligence that no tool can automate.',
          humanElevatorStrategy: 'Foster a resilient culture where team members feel safe proposing bold innovations.'
        }
      ]
    }
  },
  hr_people: {
    automated: {
      percentage: 45,
      description: 'Resume parser filtering, policy FAQ replies, benefits paperwork distribution, onboarding scheduling.',
      tasks: [
        {
          id: 'hr-auto-1',
          taskName: 'Standard Policy & Benefits Inquiry Answering',
          description: 'Answering questions on PTO accrual, health insurance coverage details, and expense policy.',
          timeSpentBefore: '12 hrs/week',
          timeSpentWithAI: '1.5 hrs/week',
          reason: 'Internal HR knowledge assistants answer handbook questions 24/7 with zero latency.',
          humanElevatorStrategy: 'Channel hours into designing career growth ladders and mental health support programs.'
        }
      ]
    },
    augmented: {
      percentage: 30,
      description: 'Job description refinement, market compensation benchmarking, engagement survey sentiment clustering.',
      tasks: [
        {
          id: 'hr-aug-1',
          taskName: 'Employee Sentiment & Pulse Survey Analysis',
          description: 'Analyzing thousands of anonymous comments to detect burnout signals across departments.',
          timeSpentBefore: '8 hrs/week',
          timeSpentWithAI: '2 hrs/week',
          reason: 'Semantic topic modeling detects emerging cultural issues across global teams.',
          humanElevatorStrategy: 'Partner with department heads to address burnout with actionable workload adjustments.'
        }
      ]
    },
    human: {
      percentage: 25,
      description: 'Sensitive employee counseling, cultural health, executive coaching, leadership development.',
      tasks: [
        {
          id: 'hr-hum-1',
          taskName: 'Sensitive Career Coaching & Confidential Guidance',
          description: 'Holding private 1-on-1s to support employees through personal challenges and career transitions.',
          timeSpentBefore: '5 hrs/week',
          timeSpentWithAI: '9 hrs/week',
          reason: 'Human vulnerability requires deep confidentiality, unconditional empathy, and lived wisdom.',
          humanElevatorStrategy: 'Build a compassionate workplace where talent thrives during times of technological change.'
        }
      ]
    }
  },
  custom: {
    automated: {
      percentage: 35,
      description: 'Repetitive administration, data transcription, baseline text generation, routine scheduling.',
      tasks: [
        {
          id: 'c-auto-1',
          taskName: 'Routine Documentation & Data Entry',
          description: 'Transcribing unstructured notes into standard spreadsheets or system records.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '1.5 hrs/week',
          reason: 'Standardized formatting and translation are prime targets for AI automation.',
          humanElevatorStrategy: 'Focus on designing higher-order system governance and data accuracy verifications.'
        }
      ]
    },
    augmented: {
      percentage: 45,
      description: 'Information synthesis, first draft generation, exploratory research, scenario testing.',
      tasks: [
        {
          id: 'c-aug-1',
          taskName: 'Research & Information Synthesis',
          description: 'Summarizing long documents, comparing alternatives, and generating draft outlines.',
          timeSpentBefore: '10 hrs/week',
          timeSpentWithAI: '3 hrs/week',
          reason: 'AI compresses reading and synthesis cycles by orders of magnitude.',
          humanElevatorStrategy: 'Inject proprietary domain knowledge and strategic priorities into the synthesis.'
        }
      ]
    },
    human: {
      percentage: 20,
      description: 'Strategic judgment, relationship trust, ethical oversight, creative vision, authentic storytelling.',
      tasks: [
        {
          id: 'c-hum-1',
          taskName: 'Human Judgment & Stakeholder Trust',
          description: 'Making high-stakes decisions with incomplete data and communicating with empathy.',
          timeSpentBefore: '5 hrs/week',
          timeSpentWithAI: '8 hrs/week',
          reason: 'Trust and accountability are fundamentally human social contracts.',
          humanElevatorStrategy: 'Position yourself as the discerning decision-maker who orchestrates AI tools responsibly.'
        }
      ]
    }
  }
};

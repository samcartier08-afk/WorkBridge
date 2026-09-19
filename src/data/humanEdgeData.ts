import { HumanEdgeProfession } from '../types';

export const HUMAN_EDGE_PROFESSIONS: HumanEdgeProfession[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    industry: 'Technology & Engineering',
    categoryBadge: 'Engineering',
    summary: 'Software development is shifting from mechanical code typing to systems architecture, failure mode anticipation, and high-consequence business logic verification.',
    aiCapabilityOverview: 'AI excels at generating syntax, test suites, API scaffolding, and boilerplate logic, but cannot evaluate ambiguous business trade-offs, security liability, or real-world operational chaos.',
    taskDistribution: {
      aiReady: 35,
      aiHuman: 45,
      humanCritical: 20
    },
    aiReadyTasks: [
      {
        title: 'Boilerplate & CRUD Endpoint Scaffolding',
        description: 'Writing standard database models, repository queries, and REST/GraphQL endpoint boilerplate.',
        whyAIExcels: 'Highly structured schemas with predictable syntactic conventions and standardized patterns.',
        timeSaved: '60% time reduction'
      },
      {
        title: 'Unit Test Suite Generation',
        description: 'Generating happy-path unit tests and mock fixtures for isolated functional modules.',
        whyAIExcels: 'Fast permutation of boundary conditions and assertion templates based on input interfaces.',
        timeSaved: '50% time reduction'
      },
      {
        title: 'Legacy Code Syntax Translation',
        description: 'Translating code between modern language versions (e.g., Python 2 to 3, or Javascript to TypeScript).',
        whyAIExcels: 'Rule-based AST transformations and syntactical equivalence mappings.',
        timeSaved: '70% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'System Architecture & Interface Design',
        description: 'Drafting distributed component boundaries, caching topologies, and microservice contracts.',
        aiContribution: 'Generates alternative topology trade-off matrices and comparative architecture diagrams.',
        humanJudgmentNeeded: 'Evaluates team operational maturity, latency SLAs, cloud cost constraints, and failure modes.'
      },
      {
        title: 'Complex Bug Investigation & Root Cause Analysis',
        description: 'Diagnosing intermittent race conditions, memory leaks, and distributed tracing anomalies.',
        aiContribution: 'Scans thousands of log lines to highlight correlated anomalies and suggest diagnostic hypotheses.',
        humanJudgmentNeeded: 'Applies deep runtime mental models, verifies kernel/network quirks, and prevents cascading regression.'
      },
      {
        title: 'Refactoring & Anti-Slop Code Review',
        description: 'Reviewing automated PRs to ensure adherence to domain modeling, maintainability, and security bounds.',
        aiContribution: 'Flags syntax violations, formatting drifts, and known CVE dependencies automatically.',
        humanJudgmentNeeded: 'Vets domain appropriateness, prevents synthetic hallucinations, and maintains architectural cleanliness.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Ethical & Legal System Accountability',
        description: 'Signing off on user data privacy, regulatory compliance (HIPAA/GDPR), and critical safety controls.',
        whyHumanEssential: 'Algorithms cannot accept legal liability or moral responsibility for systemic failures or privacy breaches.',
        humanValue: 'Ultimate accountability, compliance assurance, and legal ownership.'
      },
      {
        title: 'Navigating Ambiguous Stakeholder Requirements',
        description: 'Translating conflicting user requests and executive business goals into realistic technical roadmaps.',
        whyHumanEssential: 'Requires empathetic active listening, political intuition, and negotiating real-world scope trade-offs.',
        humanValue: 'Strategic alignment, stakeholder trust, and pragmatic prioritization.'
      },
      {
        title: 'High-Stress Outage Incident Command',
        description: 'Leading emergency triage during mission-critical production outages with incomplete telemetry.',
        whyHumanEssential: 'Requires intuitive crisis judgment, high-calm communication, and decisive mitigation under uncertainty.',
        humanValue: 'Business continuity, brand protection, and high-stakes decision velocity.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Architectural Skepticism & "Anti-Slop" Vetting',
        category: 'judgment',
        description: 'The ability to critically dissect generated code for hidden edge-case bugs, subtle concurrency flaws, and unnecessary complexity.'
      },
      {
        name: 'Cross-Functional Domain Empathy',
        category: 'empathy',
        description: 'Understanding the real-world operational pain of non-technical stakeholders to build software that solves actual human problems.'
      },
      {
        name: 'Crisis Decision-Making Under Ambiguity',
        category: 'accountability',
        description: 'Steering high-impact technical choices when data is incomplete and production systems are in jeopardy.'
      }
    ],
    workflowScenario: {
      task: 'Build a high-volume payment webhook processing worker with automated retry handling.',
      context: 'Processing over $20M in monthly transactions across Stripe, Adyen, and PayPal with strict idempotency requirements.',
      aiContribution: 'Synthesized boilerplate Redis-backed bullmq queue worker, idempotency key checks, and basic retry loops in 30 seconds.',
      humanContribution: 'Identified that synthetic retry logic would hammer banking APIs during upstream network blips; injected exponential backoff with jitter, dead-letter storage, and alerting hooks.',
      finalResult: 'A production-grade, zero-data-loss payment pipeline that survived vendor maintenance windows without duplicate customer billings.',
      humanValueSummary: 'Prevented critical financial duplicate charge incidents through deep domain understanding of banking protocols.'
    }
  },
  {
    id: 'teacher',
    title: 'Teacher & Educator',
    industry: 'Education & Academics',
    categoryBadge: 'Education',
    summary: 'Teaching is fundamentally a human relationship of mentorship, inspiration, and psychological safety. AI acts as a 24/7 personal tutor and curriculum assistant.',
    aiCapabilityOverview: 'AI effortlessly generates lesson outlines, differentiated reading passages, vocabulary quizzes, and bilingual flashcards, but cannot inspire a discouraged student or read a classroom emotional climate.',
    taskDistribution: {
      aiReady: 30,
      aiHuman: 40,
      humanCritical: 30
    },
    aiReadyTasks: [
      {
        title: 'Differentiated Reading Level Adaptations',
        description: 'Translating a single historical text into 4 different reading comprehension lexile levels.',
        whyAIExcels: 'Rapid text rewrites matching specific grade-level readability scores and vocabulary lists.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Automated Diagnostic Quiz Generation',
        description: 'Generating 20 formative assessment questions with corresponding distractors and explanations.',
        whyAIExcels: 'Instant generation of structured multiple-choice and fill-in-the-blank items from state curricula standards.',
        timeSaved: '65% time reduction'
      },
      {
        title: 'Administrative Communication Drafts',
        description: 'Drafting recurring weekly parent newsletters, field trip permission briefs, and policy reminders.',
        whyAIExcels: 'Structured boilerplate summaries following routine academic communication templates.',
        timeSaved: '55% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Personalized Learning Path Orchestration',
        description: 'Designing tailored weekly intervention plans for students with diverse neurodivergent needs.',
        aiContribution: 'Analyzes student quiz data to isolate specific concept misunderstandings (e.g., fraction division).',
        humanJudgmentNeeded: 'Considers the student’s home environment, frustration tolerance, motivation triggers, and learning pace.'
      },
      {
        title: 'Curriculum & Project-Based Unit Design',
        description: 'Creating multidisciplinary, hands-on science and humanities project modules.',
        aiContribution: 'Brainstorms creative thematic hooks, lab supply lists, and grading rubric matrices.',
        humanJudgmentNeeded: 'Vets real-world classroom physical logistics, safety constraints, and age-appropriate cultural nuances.'
      },
      {
        title: 'Formative Essay & Creative Writing Feedback',
        description: 'Providing formative critique on student drafts regarding thesis clarity and logical structure.',
        aiContribution: 'Generates preliminary feedback highlighting grammatical patterns and structural gaps.',
        humanJudgmentNeeded: 'Preserves the student’s developing authentic voice and balances constructive criticism with encouragement.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Emotional Regulation & Psychological Safety',
        description: 'Creating a safe, empathetic classroom atmosphere where vulnerable students take intellectual risks.',
        whyHumanEssential: 'Empathy requires lived human consciousness, somatic warmth, eye contact, and genuine care.',
        humanValue: 'Fostering lifelong curiosity, resilience against failure, and emotional well-being.'
      },
      {
        title: 'Conflict De-escalation & Restorative Justice',
        description: 'Mediating playground tensions, peer exclusion, and adolescent emotional outbursts.',
        whyHumanEssential: 'Requires reading subtle micro-expressions, body language, peer dynamics, and emotional trauma.',
        humanValue: 'Healthy social-emotional development and physical safety.'
      },
      {
        title: 'Inspiring Intrinsic Purpose & Mentorship',
        description: 'Unlocking a student’s latent belief in their own capabilities and guiding future life trajectories.',
        whyHumanEssential: 'Mentorship is rooted in mutual human vulnerability, personal storytelling, and role-modeling.',
        humanValue: 'Transformational personal growth that models real adult character.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Somatic Classroom Awareness',
        category: 'presence',
        description: 'Instinctively sensing when an explanation is losing the room and pivoting energy, tone, or physical movement.'
      },
      {
        name: 'Trauma-Informed Empathy',
        category: 'empathy',
        description: 'Recognizing when behavioral resistance stems from outside emotional distress rather than cognitive inability.'
      },
      {
        name: 'Socratic Facilitation & Ethical Debate',
        category: 'judgment',
        description: 'Guiding lively student debates on complex societal dilemmas without imposing rigid, synthetic answers.'
      }
    ],
    workflowScenario: {
      task: 'Design an engaging 5th-grade ecology module on wetland preservation for a class with wide reading disparities.',
      context: 'Class includes English-language learners, gifted students, and two students with attention challenges.',
      aiContribution: 'Synthesized 3 tiered reading packets, a wetland food-web diagram prompt, and a 15-question vocabulary quiz.',
      humanContribution: 'Organized a physical wetland soil filtration lab with recycled bottles; paired hesitant students with supportive peers and connected the lesson to a local municipal river restoration debate.',
      finalResult: '100% student engagement during the lab, with struggling readers enthusiastically explaining nitrate runoff to visiting parents.',
      humanValueSummary: 'Transformed static text into a memorable tactile community experience that fostered genuine environmental stewardship.'
    }
  },
  {
    id: 'healthcare-professional',
    title: 'Healthcare Professional (Nurse / Physician)',
    industry: 'Medicine & Clinical Care',
    categoryBadge: 'Healthcare',
    summary: 'Clinical medicine combines immense diagnostic data with somatic observation, holistic intuition, ethical discernment, and compassionate bedside presence.',
    aiCapabilityOverview: 'AI diagnostic algorithms scan medical imaging, predict pharmacological drug interactions, and transcribe patient notes at superhuman speed, but cannot hold a grieving family member’s hand or notice subtle clinical deterioration.',
    taskDistribution: {
      aiReady: 25,
      aiHuman: 45,
      humanCritical: 30
    },
    aiReadyTasks: [
      {
        title: 'Clinical Note Transcription (Ambient Scribing)',
        description: 'Converting physician-patient verbal consultations into structured SOAP electronic health record notes.',
        whyAIExcels: 'Medical speech-to-text with clinical entity recognition parses medical terminology directly into standardized EHR fields.',
        timeSaved: '70% time reduction'
      },
      {
        title: 'Pharmacological Interaction Checks',
        description: 'Cross-referencing newly prescribed medications against patient allergy lists and concurrent prescriptions.',
        whyAIExcels: 'Relational cross-referencing of comprehensive drug databases and known contraindication registries.',
        timeSaved: '80% time reduction'
      },
      {
        title: 'Patient Discharge Instructions Synthesis',
        description: 'Translating complex clinical care regimens into plain-language home recovery checklists.',
        whyAIExcels: 'Text simplification and translation into patient native languages with structured formatting.',
        timeSaved: '60% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Differential Diagnosis Triaging',
        description: 'Evaluating ambiguous multisystem symptoms in complex patients.',
        aiContribution: 'Surfaces rare disease possibilities, relevant recent journal studies, and comparative clinical guidelines.',
        humanJudgmentNeeded: 'Weighs patient lifestyle, occupational exposures, pain subtleties, and physical palpation cues.'
      },
      {
        title: 'Medical Imaging & Radiographic Anomaly Detection',
        description: 'Screening chest X-rays, mammograms, and CT scans for subtle microcalcifications or lesions.',
        aiContribution: 'Highlights suspicious pixel clusters with bounding boxes and calculates probability distributions.',
        humanJudgmentNeeded: 'Correlates radiographic findings with surgical history, clinical signs, and biopsy decisions.'
      },
      {
        title: 'Chronic Disease Protocol Adjustments',
        description: 'Titrating insulin, antihypertensives, or chemotherapy dosages based on longitudinal lab values.',
        aiContribution: 'Simulates metabolic trajectories and suggests guideline-concordant dosage bands.',
        humanJudgmentNeeded: 'Assesses patient adherence obstacles, cognitive capacity, financial access, and quality-of-life goals.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Compassionate Bedside Presence & Trauma Care',
        description: 'Providing reassurance during acute panic, delivering terminal diagnoses, and end-of-life hospice palliative care.',
        whyHumanEssential: 'Emotional connection, holding a patient’s hand, and holding space for grief require genuine human love and empathy.',
        humanValue: 'Human dignity, psychological comfort, and trauma reduction.'
      },
      {
        title: 'Physical Tactile Examination & Somatic Intuition',
        description: 'Detecting acute surgical abdomen guarding, subtle skin turgor changes, respiratory retractions, or calf swelling.',
        whyHumanEssential: 'Requires physical presence, tactile touch, sensory perception, and clinical gestalt.',
        humanValue: 'Rapid identification of life-threatening physical emergencies.'
      },
      {
        title: 'Bioethical Decisions & Surrogate Family Mediation',
        description: 'Navigating DNR disputes, ventilator withdrawal, and organ donation with conflicting family wishes.',
        whyHumanEssential: 'Ethical judgment balances moral values, cultural spiritual beliefs, and legal patient autonomy.',
        humanValue: 'Moral integrity, ethical consensus, and avoidance of unnecessary suffering.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Clinical Gestalt & Physical Intuition',
        category: 'presence',
        description: 'Subconsciously synthesizing breathing rhythms, skin pallor, voice tremor, and gaze into immediate urgency recognition.'
      },
      {
        name: 'Empathetic Truth-Telling',
        category: 'empathy',
        description: 'Delivering difficult prognoses with sensitivity, transparency, and unhurried emotional support.'
      },
      {
        name: 'Bioethical Navigation & Patient Advocacy',
        category: 'judgment',
        description: 'Protecting the patient’s expressed wishes against institutional pressures or conflicting family desires.'
      }
    ],
    workflowScenario: {
      task: 'Manage an 72-year-old patient with congestive heart failure and sudden onset fatigue.',
      context: 'Patient lives alone on a fixed pension, has mild cognitive memory lapses, and missed their last appointment.',
      aiContribution: 'Analyzed continuous wearable vitals and lab panels, flagging fluid retention trends and recommending diuretic dose escalation.',
      humanContribution: 'The nurse visited in person, noticed the refrigerator was empty because the patient couldn’t afford groceries, and discovered the patient stopped pills due to dizziness when standing up.',
      finalResult: 'Adjusted dosing schedule to prevent orthostatic dizziness and enrolled patient in hospital social worker food delivery program.',
      humanValueSummary: 'Prevented an emergency ICU readmission by uncovering the hidden socioeconomic root cause.'
    }
  },
  {
    id: 'designer',
    title: 'Product / UX Designer',
    industry: 'Design & Creative',
    categoryBadge: 'Design',
    summary: 'Design is not merely generating polished mockups; it is empathetic user problem-framing, visual taste, brand resonance, and human ergonomic harmony.',
    aiCapabilityOverview: 'AI generates countless UI wireframes, color palettes, vector icons, and layout variations in seconds, but lacks human sensory taste, emotional restraint, and deep contextual user empathy.',
    taskDistribution: {
      aiReady: 30,
      aiHuman: 50,
      humanCritical: 20
    },
    aiReadyTasks: [
      {
        title: 'Design System Token & Component Expansion',
        description: 'Generating button states (hover, focus, disabled, active) across color palettes and screen sizes.',
        whyAIExcels: 'Parametric token mapping and programmatic CSS/Figma variant generation.',
        timeSaved: '70% time reduction'
      },
      {
        title: 'Placeholder Copy & Dummy Data Population',
        description: 'Populating tables, cards, and profiles with realistic internationalized mock content.',
        whyAIExcels: 'Rapid context-aware synthetic data generation avoiding repetitive "Lorem Ipsum".',
        timeSaved: '80% time reduction'
      },
      {
        title: 'Accessibility Contrast & WCAG Audit',
        description: 'Calculating color contrast ratios and missing ARIA labeling attributes across layouts.',
        whyAIExcels: 'Mathematical color formula calculations and DOM tree accessibility audits.',
        timeSaved: '65% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Exploratory Wireframe & Layout Iteration',
        description: 'Brainstorming divergent visual directions for complex dashboard cards and navigation models.',
        aiContribution: 'Generates 15 divergent layout concepts and interactive widget ideas based on wireframe prompts.',
        humanJudgmentNeeded: 'Applies "Anti-Slop" editorial restraint, eliminates visual clutter, and protects brand uniqueness.'
      },
      {
        title: 'User Research Interview Synthesis',
        description: 'Synthesizing 20 hours of user test recordings and usability observations.',
        aiContribution: 'Transcribes video, clusters recurring user complaints, and drafts affinity mapping themes.',
        humanJudgmentNeeded: 'Distinguishes genuine user mental models from superficial polite feedback.'
      },
      {
        title: 'Micro-copy & Voice-and-Tone Refinement',
        description: 'Crafting empty-state guidance, onboarding prompts, and error recovery micro-copy.',
        aiContribution: 'Suggests 10 tone variations ranging from technical to playful.',
        humanJudgmentNeeded: 'Selects the exact human emotional resonance suitable for user frustration states.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Editorial Taste & Aesthetic Restraint',
        description: 'Curating the visual hierarchy, typographic pairing, and whitespace to evoke subtle calm and luxury.',
        whyHumanEssential: 'AI tends toward generic, average "slop" (cluttered gradients, generic cards, busy widgets); taste is intentional subtraction.',
        humanValue: 'Distinctive emotional signature, brand reverence, and visual elegance.'
      },
      {
        title: 'Field User Ethnography & Contextual Inquiry',
        description: 'Observing hospital nurses, warehouse workers, or field technicians using software in chaotic physical spaces.',
        whyHumanEssential: 'Cannot be simulated by synthetic personas; requires physical presence and somatic observation of human struggle.',
        humanValue: 'Uncovering unarticulated ergonomic barriers and true workflow bottlenecks.'
      },
      {
        title: 'Ethical Design & Dark Pattern Elimination',
        description: 'Refusing manipulative engagement loops, deceptive cancellation flows, or addictive notification traps.',
        whyHumanEssential: 'Requires moral conscience to advocate for user well-being against short-term corporate vanity metrics.',
        humanValue: 'Long-term user trust, ethical dignity, and consumer loyalty.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Subtractive Aesthetic Taste',
        category: 'creativity',
        description: 'Knowing what NOT to include; resisting the temptation of busy decorative AI trends in favor of calm clarity.'
      },
      {
        name: 'Somatic Empathy for Real-World Friction',
        category: 'empathy',
        description: 'Feeling the cognitive fatigue of real users juggling phone calls, noisy rooms, and clumsy touch targets.'
      },
      {
        name: 'Strategic Design Advocacy',
        category: 'judgment',
        description: 'Defending the user experience in executive rooms when engineering or sales push for shortsighted shortcuts.'
      }
    ],
    workflowScenario: {
      task: 'Redesign an enterprise emergency dispatch console for 911 call operators.',
      context: 'Operators work 12-hour shifts under extreme adrenaline and cognitive load, with multi-monitor setups.',
      aiContribution: 'Generated 10 responsive dashboard layouts with dense data tables, dark modes, and modular widget cards.',
      humanContribution: 'The designer shadowed operators on midnight shifts, realized operators rarely use a mouse during calls; eliminated 80% of clutter, designed large hotkey-driven tactile cards, and introduced calming high-contrast amber alerts.',
      finalResult: 'Reduced operator response dispatch latency by 14 seconds per call while cutting cognitive fatigue reports in half.',
      humanValueSummary: 'Replaced a generic synthetic dashboard with an ergonomic life-saving tool grounded in real physical observational study.'
    }
  },
  {
    id: 'accountant',
    title: 'Accountant & Financial Auditor',
    industry: 'Finance & Accounting',
    categoryBadge: 'Finance',
    summary: 'Accounting is moving from tedious mechanical reconciliation to strategic financial advisory, forensic scrutiny, and ethical regulatory stewardship.',
    aiCapabilityOverview: 'AI performs automated OCR invoice categorization, bank reconciliation, and spreadsheet formulas instantly, but cannot interpret ambiguous tax laws, negotiate audits, or judge management fraud risk.',
    taskDistribution: {
      aiReady: 45,
      aiHuman: 40,
      humanCritical: 15
    },
    aiReadyTasks: [
      {
        title: 'Invoice OCR & Receipt Categorization',
        description: 'Extracting line items, vendor tax IDs, and totals from scanned PDF invoices into accounting ledgers.',
        whyAIExcels: 'High-accuracy optical vision models classify structured tabular financial documents instantly.',
        timeSaved: '80% time reduction'
      },
      {
        title: 'Routine Bank Account Reconciliation',
        description: 'Matching cleared bank transaction feeds against open accounts payable and accounts receivable entries.',
        whyAIExcels: 'Algorithmic exact-match rule engines resolve standard transactional pairs automatically.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Standard Monthly Financial Statement Formatting',
        description: 'Compiling balance sheets, income statements, and cash flow summaries into standard board presentations.',
        whyAIExcels: 'Automated extraction of general ledger balances into standardized GAAP/IFRS presentation templates.',
        timeSaved: '60% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Forensic Anomaly & Variance Detection',
        description: 'Spotting unusual spending spikes, duplicate vendor payments, and inventory shrinkage patterns.',
        aiContribution: 'Scans millions of ledger lines to flag statistical outliers and unexpected seasonal variances.',
        humanJudgmentNeeded: 'Investigates business context behind the numbers (e.g., emergency supply chain contract vs. fraud).'
      },
      {
        title: 'Corporate Tax Strategy & Deductions Planning',
        description: 'Structuring research & development credits, depreciation schedules, and cross-border tax incentives.',
        aiContribution: 'Cross-references updated tax code statutes and drafts alternative depreciation schedule scenarios.',
        humanJudgmentNeeded: 'Interprets gray regulatory areas, assesses audit defense posture, and weighs executive risk appetite.'
      },
      {
        title: 'Cash Flow Runway Forecasting & Scenario Modeling',
        description: 'Modeling working capital needs under varied inflation, hiring, and revenue contraction scenarios.',
        aiContribution: 'Runs Monte Carlo simulations and calculates cash burn permutations in minutes.',
        humanJudgmentNeeded: 'Validates realistic business assumptions and advises leadership on timing of capital raises.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Auditing Integrity & Professional Skepticism',
        description: 'Challenging executive management on revenue recognition, off-balance-sheet liabilities, and inventory valuations.',
        whyHumanEssential: 'Fraud perpetrators intentionally disguise synthetic paper trails; auditors need intuitive human skepticism and interview acumen.',
        humanValue: 'Market confidence, shareholder protection, and prevention of corporate collapse.'
      },
      {
        title: 'Regulatory Sign-Off & Fiduciary Legal Liability',
        description: 'Signing personal CPA certification on public company audits and statutory tax filings.',
        whyHumanEssential: 'Legal accountability and fiduciary penalties cannot be transferred to an autonomous machine.',
        humanValue: 'Absolute legal liability and institutional trust.'
      },
      {
        title: 'Empathetic Client Financial Counseling',
        description: 'Guiding distressed small business owners facing bankruptcy, sudden cash shortfalls, or succession planning.',
        whyHumanEssential: 'Requires emotional support, delicate negotiations with creditors, and human relationship trust.',
        humanValue: 'Preserving livelihoods, calming panic, and guiding sound life transitions.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Forensic Professional Skepticism',
        category: 'judgment',
        description: 'Looking beyond tidy reconciled balance sheets to ask probing questions about underlying operational realities.'
      },
      {
        name: 'Fiduciary Ethical Courage',
        category: 'accountability',
        description: 'Willingness to refuse to sign off on aggressive accounting schemes despite executive pressure.'
      },
      {
        name: 'Strategic Advisory Translation',
        category: 'context',
        description: 'Translating dense balance sheet metrics into clear, actionable business strategies for non-financial founders.'
      }
    ],
    workflowScenario: {
      task: 'Conduct an annual financial audit of a fast-growing manufacturing company claiming 40% margin improvements.',
      context: 'Management is incentivized with year-end performance bonuses tied directly to reported gross margins.',
      aiContribution: 'Analyzed 85,000 journal entries and flagged a batch of late Q4 inventory cost adjustments with minimal supporting receipts.',
      humanContribution: 'Auditor physically visited the warehouse, performed an unannounced inventory count, and uncovered that raw material scrap costs were omitted from cost-of-goods-sold.',
      finalResult: 'Corrected financial statements to reflect true 22% margins, preventing an inaccurate filing and restatement disaster.',
      humanValueSummary: 'Protected investors through unannounced physical verification and fearless professional skepticism.'
    }
  },
  {
    id: 'customer-support',
    title: 'Customer Support & Experience Specialist',
    industry: 'Customer Experience & Success',
    categoryBadge: 'Support',
    summary: 'Support is shifting from mechanical answering of simple FAQ tickets to resolving high-stakes customer crises, de-escalating anger, and advocating for product improvements.',
    aiCapabilityOverview: 'AI bots handle password resets, order tracking, and refund eligibility lookups 24/7 in seconds, but fail miserably when an infuriated customer needs genuine empathy, active listening, and creative restitution.',
    taskDistribution: {
      aiReady: 45,
      aiHuman: 35,
      humanCritical: 20
    },
    aiReadyTasks: [
      {
        title: 'Tier-1 FAQ & Knowledge Base Answering',
        description: 'Resolving repetitive queries about shipping policies, reset links, hours of operation, and specs.',
        whyAIExcels: 'Semantic vector retrieval finds documented answers across internal manuals instantly in 50+ languages.',
        timeSaved: '85% time reduction'
      },
      {
        title: 'Automated Ticket Tagging & Sentiment Routing',
        description: 'Reading incoming support emails and tagging category, urgency, and routing to the right department.',
        whyAIExcels: 'NLP classifiers recognize intent, urgency keywords, and user tier instantly.',
        timeSaved: '90% time reduction'
      },
      {
        title: 'Post-Call Summary & CRM Data Entry',
        description: 'Generating concise case notes and action items from customer interaction transcripts.',
        whyAIExcels: 'Instant structured summarization populates Salesforce/Zendesk fields automatically.',
        timeSaved: '70% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Complex Edge-Case Troubleshooting',
        description: 'Investigating billing anomalies or unusual hardware/software failure combinations.',
        aiContribution: 'Retrieves relevant past resolved incident tickets and pinpoints known patch notes.',
        humanJudgmentNeeded: 'Coordinates across product engineering, tests hypotheses, and explains workarounds gently.'
      },
      {
        title: 'Customer Churn Prevention & Retention',
        description: 'Engaging enterprise clients threatening cancellation due to missing features or contract disputes.',
        aiContribution: 'Pulls account usage drop-offs and suggests tailored discount or service tier options.',
        humanJudgmentNeeded: 'Conducts an authentic relationship conversation, addresses underlying frustration, and restores partnership trust.'
      },
      {
        title: 'Support Intelligence & Product Feedback Advocacy',
        description: 'Transforming support ticket trends into prioritized engineering feature requests.',
        aiContribution: 'Aggregates sentiment trends and clusters top 10 bug complaints over the month.',
        humanJudgmentNeeded: 'Translates emotional customer anecdotes into compelling business impact cases for product managers.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'High-Heat Conflict De-escalation',
        description: 'Calming an outraged customer whose wedding dress was lost, medical equipment was delayed, or payroll system crashed.',
        whyHumanEssential: 'Robotic empathy infuriates angry humans; genuine de-escalation requires authentic human voice, contrition, and empowerment.',
        humanValue: 'Preserving customer loyalty, preventing viral PR crises, and humanizing the brand.'
      },
      {
        title: 'Discretionary Empathy & Exception Handling',
        description: 'Overriding rigid policy rules (e.g., granting a refund past 30 days because the customer suffered a family tragedy).',
        whyHumanEssential: 'Machines are programmed for rule adherence; only humans possess moral authority to grant compassionate grace.',
        humanValue: 'Authentic brand humanity and lifelong customer loyalty.'
      },
      {
        title: 'Building VIP Relationship Trust',
        description: 'Managing high-value enterprise accounts where executives expect a trusted human contact.',
        whyHumanEssential: 'B2B relationships are built over shared dinners, handshakes, personal reliability, and mutual respect.',
        humanValue: 'Account expansion, contract retention, and long-term enterprise value.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Radical Active Listening & De-escalation',
        category: 'empathy',
        description: 'Allowing an angry person to vent fully, acknowledging their emotional distress without defensiveness, and rebuilding partnership.'
      },
      {
        name: 'Discretionary Exception Judgment',
        category: 'judgment',
        description: 'Knowing when to break standard operating policy to do the right thing for a human customer in distress.'
      },
      {
        name: 'Cross-Department Product Advocacy',
        category: 'context',
        description: 'Synthesizing the voice of the customer into actionable product roadmaps that solve root causes.'
      }
    ],
    workflowScenario: {
      task: 'Respond to an infuriated hospital administrator whose specialized ICU monitor shipment was delayed by a shipping carrier.',
      context: 'The hospital has scheduled surgeries next morning and is threatening immediate contract termination and legal action.',
      aiContribution: 'Drafted standard carrier apology email with 10% future credit offer and tracked the crate in a freight distribution hub 400 miles away.',
      humanContribution: 'The support specialist immediately called the administrator directly, bypassed standard customer service protocols, authorized an emergency courier to personally drive replacement units from a regional depot overnight, and texted real-time updates every 2 hours.',
      finalResult: 'Monitors arrived at 6:15 AM before surgeries; the hospital administrator renewed their 5-year enterprise contract.',
      humanValueSummary: 'Saved a multi-million-dollar account by replacing automated apologies with decisive human problem-solving.'
    }
  },
  {
    id: 'social-worker',
    title: 'Social Worker & Mental Health Counselor',
    industry: 'Social Services & Mental Health',
    categoryBadge: 'Social Services',
    summary: 'Social work is an intensely human discipline centering on trauma recovery, home safety assessment, family dynamics, and community advocacy.',
    aiCapabilityOverview: 'AI can match community benefit eligibility databases, draft social history intakes, and translate multilingual resources, but cannot evaluate a child’s physical safety, assess nuanced suicide ideation, or build healing rapport.',
    taskDistribution: {
      aiReady: 15,
      aiHuman: 35,
      humanCritical: 50
    },
    aiReadyTasks: [
      {
        title: 'Public Assistance Eligibility Screening',
        description: 'Checking household income and residency against federal and state food assistance, Medicaid, and housing voucher criteria.',
        whyAIExcels: 'Deterministic rule calculation across complex statutory poverty threshold tables.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Community Resource Directory Matching',
        description: 'Finding open shelter beds, food pantries, and sliding-scale clinics matching a client’s ZIP code and transit route.',
        whyAIExcels: 'Real-time database querying with geolocational transit filters.',
        timeSaved: '70% time reduction'
      },
      {
        title: 'Court & Grant Compliance Reporting',
        description: 'Formatting casework summaries and service hours into state-mandated judicial or grant reporting templates.',
        whyAIExcels: 'Structured data compilation populating regulatory casework forms.',
        timeSaved: '60% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Client Intake Case History Synthesis',
        description: 'Reviewing extensive multi-agency records (police, medical, school, child welfare) to build a longitudinal timeline.',
        aiContribution: 'Parses hundreds of pages of historical PDFs into a searchable chronological incident timeline.',
        humanJudgmentNeeded: 'Identifies systemic biases in past reporting and uncovers client protective resilience factors.'
      },
      {
        title: 'Personalized Relapse & Crisis Prevention Planning',
        description: 'Drafting coping strategies and trigger identification worksheets for individuals with substance use disorders.',
        aiContribution: 'Suggests evidence-based CBT exercises, mindfulness prompts, and emergency contact templates.',
        humanJudgmentNeeded: 'Customizes interventions to the client’s trauma triggers, cognitive literacy, and supportive relationships.'
      },
      {
        title: 'Multi-Disciplinary Care Coordination',
        description: 'Liaising between parole officers, psychiatrists, public defenders, and housing case managers.',
        aiContribution: 'Drafts coordinated cross-agency progress memos and tracks scheduled milestones.',
        humanJudgmentNeeded: 'Navigates conflicting institutional agendas and fiercely advocates for client dignity.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Physical In-Home Safety & Child Welfare Assessment',
        description: 'Conducting unannounced home visits to evaluate child neglect, domestic violence danger, or elder abuse.',
        whyHumanEssential: 'Requires physical presence, observing non-verbal family tension, checking food in pantries, and intuitive danger appraisal.',
        humanValue: 'Protecting vulnerable human lives from physical and psychological harm.'
      },
      {
        title: 'Crisis Suicide & Domestic Violence Intervention',
        description: 'Sitting with an acutely suicidal teenager or helping a survivor escape immediate domestic violence.',
        whyHumanEssential: 'Requires somatic human co-regulation, profound empathetic presence, safety planning, and moral support.',
        humanValue: 'Life-saving emotional grounding, dignity, and trauma reduction.'
      },
      {
        title: 'Restoring Human Dignity & Overcoming Shame',
        description: 'Helping marginalized individuals overcome generational trauma, societal stigma, and profound self-blame.',
        whyHumanEssential: 'Healing relational wounds requires a real, non-judgmental human witness who believes in their capacity for renewal.',
        humanValue: 'Generational healing, self-worth restoration, and human flourishing.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Trauma-Attuned Somatic Presence',
        category: 'presence',
        description: 'Co-regulating nervous systems during severe panic through calm breathing, eye contact, and emotional grounding.'
      },
      {
        name: 'Intuitive Risk & Deception Appraisal',
        category: 'judgment',
        description: 'Recognizing when a calm verbal response masks acute domestic coercion or unstated danger.'
      },
      {
        name: 'Relentless Human Advocacy',
        category: 'empathy',
        description: 'Refusing to give up on clients whom society and institutional bureaucracies have written off.'
      }
    ],
    workflowScenario: {
      task: 'Support a single mother of two facing imminent eviction and severe clinical depression.',
      context: 'Mother is overwhelmed by paperwork, lacks childcare, and missed a court hearing due to panic attacks.',
      aiContribution: 'Synthesized emergency rental assistance applications, found local free legal aid clinic hours, and drafted an eviction stay petition template.',
      humanContribution: 'The social worker went to the apartment in person, watched the children while the mother rested, gently walked her through the court petition over tea, and accompanied her to court to hold her hand during testimony.',
      finalResult: 'Judge granted a 90-day eviction stay; secured emergency housing funds and enrolled mother in an empathetic peer support group.',
      humanValueSummary: 'Prevented homelessness through loving personal physical accompaniment and administrative relief.'
    }
  },
  {
    id: 'engineer',
    title: 'Mechanical / Civil / Systems Engineer',
    industry: 'Physical Engineering & Infrastructure',
    categoryBadge: 'Engineering',
    summary: 'Physical engineering anchors on the immutable laws of physics, material science, public safety liability, and on-site construction reality.',
    aiCapabilityOverview: 'AI performs finite element analysis, generative CAD topology optimization, and hydraulic pipe sizing at dizzying speed, but cannot sign professional engineer (PE) liability or inspect on-site weld flaws.',
    taskDistribution: {
      aiReady: 35,
      aiHuman: 45,
      humanCritical: 20
    },
    aiReadyTasks: [
      {
        title: 'Generative CAD Topology Optimization',
        description: 'Iterating lightweight bracket or beam structural geometries to minimize material mass under fixed loads.',
        whyAIExcels: 'Algorithmic mathematical stress-strain gradient descent optimizes material distribution in seconds.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Standard Code Compliance & Load Table Lookups',
        description: 'Cross-referencing building codes (ASCE 7, IBC) for regional wind, snow, and seismic load coefficients.',
        whyAIExcels: 'Fast lookup and programmatic calculation of statutory engineering formula tables.',
        timeSaved: '70% time reduction'
      },
      {
        title: 'BIM Clash Detection & Routing Reports',
        description: 'Identifying spatial collisions between HVAC ducting, plumbing conduits, and structural steel in 3D BIM models.',
        whyAIExcels: 'Geometric volumetric intersection algorithms detect spatial clashes across layers automatically.',
        timeSaved: '80% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Computational Fluid Dynamics & Thermal Modeling',
        description: 'Simulating airflow cooling inside an electric vehicle battery pack or high-rise building plenum.',
        aiContribution: 'Runs multi-physics simulations and suggests heat sink fin layout iterations.',
        humanJudgmentNeeded: 'Vets real-world manufacturing tolerances, dust fouling risks, and sensor drift over 10-year lifespans.'
      },
      {
        title: 'Infrastructure Life-Cycle & Preventive Maintenance Forecasting',
        description: 'Analyzing vibration sensor telemetry from a suspension bridge or municipal water pump station.',
        aiContribution: 'Flags harmonic anomalies and predicts bearing failure windows based on degradation curves.',
        humanJudgmentNeeded: 'Determines whether to execute emergency lane closures based on budget, traffic chaos, and weather windows.'
      },
      {
        title: 'Sustainable Material Substitution Trade-Offs',
        description: 'Evaluating low-carbon concrete mixes or recycled composites for structural components.',
        aiContribution: 'Calculates embodied carbon lifecycle metrics and compares structural strength curves.',
        humanJudgmentNeeded: 'Balances supplier availability, curing time delays in cold weather, and long-term durability proof.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Professional Engineering (PE) Stamped Legal Liability',
        description: 'Signing and physically stamping construction drawings with personal civil and criminal liability for public safety.',
        whyHumanEssential: 'Public safety requires a licensed human being who faces legal prosecution for negligence or failure.',
        humanValue: 'Uncompromising public safety, building code compliance, and structural integrity.'
      },
      {
        title: 'On-Site Construction Field Verification',
        description: 'Climbing scaffolding to inspect rebar tie patterns, concrete pours, foundation soil compaction, and weld penetrations.',
        whyHumanEssential: 'Field conditions differ wildly from digital CAD models; requires physical sensory inspection in muddy, noisy job sites.',
        humanValue: 'Preventing catastrophic structural collapse caused by contractor shortcuts or improper installation.'
      },
      {
        title: 'Multi-Stakeholder Municipal & Environmental Defense',
        description: 'Defending bridge or dam environmental impact assessments before skeptical city councils and homeowner boards.',
        whyHumanEssential: 'Requires empathetic public communication, answering visceral citizen fears, and transparent technical honesty.',
        humanValue: 'Civic consensus, environmental stewardship, and democratic infrastructure development.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Physical Real-World Constructability Instinct',
        category: 'presence',
        description: 'Looking at a sleek digital CAD model and immediately spotting that a human worker cannot fit a wrench into that gap on site.'
      },
      {
        name: 'Ethical Liability Courage',
        category: 'accountability',
        description: 'Halting a multi-million-dollar concrete pour when foundation compaction tests fail, regardless of client schedule anger.'
      },
      {
        name: 'Systems Failure Mode Anticipation',
        category: 'judgment',
        description: 'Anticipating bizarre compound failure cascades (e.g., hurricane flooding coincident with power grid collapse).'
      }
    ],
    workflowScenario: {
      task: 'Design a replacement highway overpass bridge over an active rail corridor in an earthquake zone.',
      context: 'Rail company allows only a single 8-hour track shutdown window; city demands 75-year seismic lifespan.',
      aiContribution: 'Generated 5 optimized pre-stressed concrete girder options and simulated peak ground acceleration seismic displacement.',
      humanContribution: 'The lead structural engineer conducted an on-site rail walk, noticed subsurface geotechnical settlement not in soil reports, altered the foundation to drilled shafts, and designed an off-site modular bridge slide to fit the 8-hour window.',
      finalResult: 'Bridge slid into place in 6.5 hours without disrupting passenger rail; passed seismic inspection with zero defects.',
      humanValueSummary: 'Prevented catastrophic foundation failure and economic gridlock through physical site inspection and ingenious installation planning.'
    }
  },
  {
    id: 'lawyer',
    title: 'Attorney & Legal Advocate',
    industry: 'Law & Judiciary',
    categoryBadge: 'Legal',
    summary: 'The law is not just an archive of statutes; it is the arena of justice, persuasive storytelling, ethical boundary defense, and human life advocacy.',
    aiCapabilityOverview: 'AI conducts legal precedent research, contract clause summarization, and discovery document review with breathtaking speed, but cannot persuade a jury, evaluate witness credibility, or accept ethical fiduciary duty.',
    taskDistribution: {
      aiReady: 35,
      aiHuman: 40,
      humanCritical: 25
    },
    aiReadyTasks: [
      {
        title: 'Automated Discovery & Document Review (e-Discovery)',
        description: 'Scanning 100,000 internal corporate emails to flag documents responsive to subpoena keywords and privilege logs.',
        whyAIExcels: 'Large-scale semantic search and classification categorizes massive document caches in hours.',
        timeSaved: '85% time reduction'
      },
      {
        title: 'Standard NDA & Commercial Contract Comparison',
        description: 'Reviewing routine vendor agreements against corporate standard playbook terms to redline deviations.',
        whyAIExcels: 'Clause-by-clause diffing against established corporate contract rules.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Statutory Citation & Precedent Verification',
        description: 'Checking whether legal citations in a brief are still good law (Shepardizing / KeyCiting precedent).',
        whyAIExcels: 'Direct relational database verification of judicial treatment histories.',
        timeSaved: '80% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Legal Research & Motion Drafting',
        description: 'Drafting preliminary motions for summary judgment or preliminary injunctions citing relevant appellate rulings.',
        aiContribution: 'Synthesizes relevant circuit precedents and compiles persuasive authority summaries.',
        humanJudgmentNeeded: 'Injects judicial philosophy of the presiding judge, frames narrative storytelling, and eliminates synthetic hallucinated citations.'
      },
      {
        title: 'M&A Due Diligence Risk Synthesis',
        description: 'Analyzing hundreds of commercial leases, intellectual property licenses, and employment agreements in a merger.',
        aiContribution: 'Extracts change-of-control clauses, non-competes, and indemnification caps into structured summary tables.',
        humanJudgmentNeeded: 'Evaluates deal-breaking risk probabilities and negotiates holdbacks or price adjustments.'
      },
      {
        title: 'Litigation Strategy & Risk Modeling',
        description: 'Estimating settlement ranges vs. trial probability outcomes based on historical verdict databases.',
        aiContribution: 'Calculates statistical damages distributions across similar jurisdictional trials.',
        humanJudgmentNeeded: 'Assesses jury appetite, key witness emotional likability, and the psychological impact of exposure.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Courtroom Trial Advocacy & Jury Persuasion',
        description: 'Conducting opening statements, cross-examining adverse witnesses, and delivering closing arguments.',
        whyHumanEssential: 'Persuasion is an emotional, psychological human art requiring physical pacing, eye contact, moral conviction, and spontaneous wit.',
        humanValue: 'Vindicating constitutional rights, winning justice, and protecting liberty.'
      },
      {
        title: 'Witness Credibility & Cross-Examination Triage',
        description: 'Reading subtle hesitation, eye gaze, micro-sweating, or vocal pitch in a deposition to expose perjury.',
        whyHumanEssential: 'Detecting deception and exploiting psychological cracks in testimony requires acute real-time human intuition.',
        humanValue: 'Uncovering the hidden truth and debunking fabricated claims.'
      },
      {
        title: 'Fiduciary Duty & Ethical Counsel to Clients',
        description: 'Advising a corporate CEO or criminal defendant on ethical lines, refusing to suborn perjury, and providing courageous counsel.',
        whyHumanEssential: 'Attorneys are officers of the court bound by strict ethical oaths and potential disbarment; AI has no moral agency.',
        humanValue: 'Preserving the rule of law, professional integrity, and public trust in justice.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Persuasive Human Storytelling',
        category: 'creativity',
        description: 'Transforming dry statutory facts into an emotionally compelling human story that moves a judge or jury to action.'
      },
      {
        name: 'In-The-Moment Cross-Examination Agility',
        category: 'judgment',
        description: 'Pivoting line of questioning instantly in response to an unexpected witness slip-up during live testimony.'
      },
      {
        name: 'Courageous Ethical Boundary Keeping',
        category: 'accountability',
        description: 'Telling a powerful client "No, you cannot do that," and upholding the integrity of the judicial system.'
      }
    ],
    workflowScenario: {
      task: 'Defend a small tech startup against a frivolous patent infringement claim by a predatory patent-assertion entity.',
      context: 'Plaintiff is demanding a $3M settlement, threatening costly discovery that would ruin the startup’s pending Series A round.',
      aiContribution: 'Scanned 400 prior art publications and identified three academic papers demonstrating prior art anticipation of the patent claims.',
      humanContribution: 'The litigator contacted the original academic author, obtained a sworn affidavit, conducted a deposition that exposed the plaintiff’s prior knowledge of the art, and filed a blistering Rule 11 motion threatening sanctions.',
      finalResult: 'Plaintiff withdrew the lawsuit with prejudice within 48 hours; startup closed its funding round cleanly.',
      humanValueSummary: 'Saved an innovative business from extortion through aggressive legal strategy and human witness collaboration.'
    }
  },
  {
    id: 'project-manager',
    title: 'Project & Program Manager',
    industry: 'Business & Cross-Functional Operations',
    categoryBadge: 'Management',
    summary: 'Project management is transforming from mechanical ticket-tracking and Gantt-chart painting into organizational diplomacy, morale stewardship, and cross-team alignment.',
    aiCapabilityOverview: 'AI automates meeting minutes, resource allocations, dependency updates, and burn-down charts, but cannot rally a burnt-out engineering team, mediate executive turf wars, or sniff out unspoken project risks.',
    taskDistribution: {
      aiReady: 40,
      aiHuman: 40,
      humanCritical: 20
    },
    aiReadyTasks: [
      {
        title: 'Automated Meeting Minutes & Action Item Extraction',
        description: 'Transcribing team standups and extracting owners, due dates, and status updates directly into Jira/Asana.',
        whyAIExcels: 'Ambient meeting audio transcription isolates commitments and task assignments cleanly.',
        timeSaved: '80% time reduction'
      },
      {
        title: 'Gantt Chart & Critical Path Recalculation',
        description: 'Updating project timelines, milestone dependencies, and resource allocations when task completion dates shift.',
        whyAIExcels: 'Parametric dependency graph algorithms recalculate downstream dates across thousands of tasks instantly.',
        timeSaved: '75% time reduction'
      },
      {
        title: 'Status Report & Executive Dashboard Generation',
        description: 'Synthesizing weekly work logs from 50 contributors into executive slide deck summaries.',
        whyAIExcels: 'Hierarchical aggregation and summarization of status updates into uniform bullet formats.',
        timeSaved: '70% time reduction'
      }
    ],
    aiAssistedTasks: [
      {
        title: 'Proactive Risk Identification & Bottleneck Anticipation',
        description: 'Predicting project delivery slips before they happen by analyzing team pull-request cadence and velocity.',
        aiContribution: 'Flags velocity decelerations, unassigned tickets, and historical sprint creep patterns.',
        humanJudgmentNeeded: 'Determines whether slowdown is caused by illness, technical debt, or scope confusion through conversations with leads.'
      },
      {
        title: 'Scope-Creep Triage & Change Order Assessment',
        description: 'Evaluating the impact of unexpected client feature requests on budget, team sanity, and deadlines.',
        aiContribution: 'Simulates schedule impact scenarios and calculates revised budget estimates.',
        humanJudgmentNeeded: 'Negotiates trade-offs with product stakeholders to cut non-essential features while protecting core value.'
      },
      {
        title: 'Vendor & Resource Capacity Forecasting',
        description: 'Balancing agency contractor staffing against internal team skill gaps over a 6-month product cycle.',
        aiContribution: 'Models headcount capacity needs and projects expenditure run rates.',
        humanJudgmentNeeded: 'Vets contractor cultural fit, communication friction, and onboarding lag times.'
      }
    ],
    humanCriticalTasks: [
      {
        title: 'Navigating Organizational Politics & Turf Battles',
        description: 'Aligning warring department heads (e.g., Sales wanting features now vs. Security wanting lockdown) behind a unified vision.',
        whyHumanEssential: 'Requires political empathy, high emotional intelligence, trust-building, and face-to-face diplomacy.',
        humanValue: 'Unblocking gridlock, executive buy-in, and cross-functional momentum.'
      },
      {
        title: 'Team Morale & Burnout Prevention',
        description: 'Recognizing silent exhaustion in developers during death-marches and intervening before key talent resigns.',
        whyHumanEssential: 'Psychological safety and team morale cannot be perceived by algorithmic task trackers; requires genuine human care.',
        humanValue: 'Talent retention, sustained high performance, and humane workplace culture.'
      },
      {
        title: 'Sniffing Out Unspoken Project Truths',
        description: 'Detecting when an engineer says "Yeah, it\'s 90% done" but their body language and hesitant tone signal deep technical panic.',
        whyHumanEssential: 'Human intuition detects interpersonal hesitation, unspoken fears, and hidden risks that never appear on Jira cards.',
        humanValue: 'Early crisis prevention before catastrophic launch day failure.'
      }
    ],
    humanEdgeSkills: [
      {
        name: 'Diplomatic Cross-Functional Empathy',
        category: 'empathy',
        description: 'Understanding the disparate incentives of sales, design, and engineering, and translating between their conflicting languages.'
      },
      {
        name: 'Intuitive Risk Sniffing',
        category: 'judgment',
        description: 'Listening to the subtext of team conversations to identify hidden architectural landmines before they detonate.'
      },
      {
        name: 'Inspirational Servant Leadership',
        category: 'presence',
        description: 'Protecting the team from executive chaos and maintaining calm focus and purpose during turbulent pivot cycles.'
      }
    ],
    workflowScenario: {
      task: 'Deliver a major fintech mobile banking app overhaul under an immovable regulatory deadline.',
      context: 'Designers and backend engineers are in heated conflict over payload sizes, and the project is tracking 3 weeks late.',
      aiContribution: 'Generated revised critical-path Gantt chart, identified 12 duplicate backlog tasks, and calculated that stripping animated micro-interactions recovers 8 working days.',
      humanContribution: 'The project manager brought the design and tech leads into an offsite room, acknowledged their shared exhaustion, ordered dinner, and facilitated an open compromise: streamlined high-performance animations for launch, deferring complex interactions to v1.1.',
      finalResult: 'App launched on time with zero regulatory fines, high app store ratings, and a united, proud engineering team.',
      humanValueSummary: 'Transformed toxic friction into creative collaboration through empathetic mediation and courageous prioritization.'
    }
  }
];

export const HUMAN_EDGE_CORE_CATEGORIES = [
  {
    id: 'ai-ready',
    title: '1. AI-READY',
    subtitle: 'High Automation Potential',
    badge: 'Delegated Execution',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    description: 'Tasks that are repetitive, predictable, structured, or rule-based. AI handles these at superhuman speed and near-zero marginal cost.',
    examples: [
      'Boilerplate code & CRUD endpoints',
      'Invoice OCR & data transcription',
      'Ambient clinical scribing',
      'Standard document redlining',
      'Schedule dependency recalculation'
    ],
    humanRole: 'Reviewing configuration parameters, setting guardrails, and verifying output fidelity.'
  },
  {
    id: 'ai-human',
    title: '2. AI + HUMAN',
    subtitle: 'Augmented Copilot Leverage',
    badge: 'Collaborative Leverage',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200/80',
    description: 'Tasks where AI generates, analyzes, or assists, but human review, contextual verification, and strategic steering are essential.',
    examples: [
      'System architecture drafting',
      'Personalized curriculum design',
      'Differential diagnostic triaging',
      'Wireframing & layout iteration',
      'Forensic anomaly & fraud investigation'
    ],
    humanRole: 'Applying domain depth, filtering out "AI Slop", validating edge cases, and steering creative choices.'
  },
  {
    id: 'human-critical',
    title: '3. HUMAN-CRITICAL',
    subtitle: 'The Irreplaceable Human Edge',
    badge: 'Indispensable Craft',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200/80',
    description: 'Tasks where human interaction, empathy, ethical judgment, accountability, creativity, physical presence, or deep contextual understanding are central.',
    examples: [
      'High-stress crisis leadership',
      'Compassionate bedside care & bereavement',
      'Jury persuasion & courtroom advocacy',
      'Tactile construction site verification',
      'Resolving cross-department political gridlock'
    ],
    humanRole: 'Owning moral liability, physical presence, genuine emotional co-regulation, and ultimate accountability.'
  }
];

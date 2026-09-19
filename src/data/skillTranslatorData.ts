import { SkillTranslationPreset } from '../types';

export const SKILL_TRANSLATION_PRESETS: SkillTranslationPreset[] = [
  {
    id: 'customer_support_to_ai_ops',
    category: 'Operations & Support',
    pastRoleOrExperience: 'Customer Support Representative / Helpdesk',
    context: 'Handled 50+ user support inquiries daily via ticket and live chat, calmed escalated complaints, navigated internal knowledge bases, and documented product bugs.',
    priorTasks: [
      'Resolving ambiguous user issues under time pressure',
      'De-escalating agitated customers and protecting account retention',
      'Searching complex company documentation for edge-case resolutions',
      'Categorizing support tickets and tagging engineering bug reports'
    ],
    underlyingCompetencies: [
      {
        name: 'High-Stakes Empathy & Crisis De-escalation',
        description: 'Reading subtext, validating human distress, and steering hostile conversations into collaborative solutions.',
        category: 'empathy'
      },
      {
        name: 'Rapid Ambiguity Triage',
        description: 'Extracting core issues from fragmented, contradictory user descriptions.',
        category: 'judgment'
      },
      {
        name: 'Product Edge-Case Pattern Recognition',
        description: 'Identifying when a customer problem signals an underlying systematic software flaw rather than user error.',
        category: 'systems'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI Customer Operations & Agent Supervisor',
      strategicValue: 'Tier-1 chatbots can churn out generic answers, but fail during nuanced conflicts. You configure chatbot escalation rules, audit AI agent response quality, and personally resolve the high-value, sensitive interactions where brand trust is at stake.',
      whyExperienceMatters: 'You already know the exact failure modes and linguistic frustrations customers experience when automated systems fail.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'You are not a manual ticket typist; you are an experienced customer psychology and triage specialist. AI automates standard FAQs, elevating you into the manager of the automated customer experience.',
    bridgeGaps: [
      'Configuring LLM support bot knowledge bases (RAG)',
      'Prompt engineering for consistent brand tone',
      'Escalation routing logic and sentiment trigger setup'
    ],
    extractedSkills: [
      'Customer Empathy & Retention',
      'Escalation Triage',
      'Knowledge Base Architecture',
      'AI Agent Quality Auditing',
      'Conversational Flow Testing'
    ]
  },
  {
    id: 'fresher_academic_to_ai_builder',
    category: 'Freshers & Students',
    pastRoleOrExperience: 'Computer Science / Engineering Fresh Graduate',
    context: 'Completed university coursework in algorithms, data structures, and standard web projects, but worried about entry-level coding jobs being automated by AI assistants.',
    priorTasks: [
      'Writing basic algorithmic functions and syntax in Java/Python/JS',
      'Debugging syntax errors and reading stack traces',
      'Building course capstone CRUD web applications',
      'Collaborating on academic group repos with Git'
    ],
    underlyingCompetencies: [
      {
        name: 'Computational Logic & Systems Thinking',
        description: 'Decomposing complex problems into sequential, deterministic logical blocks.',
        category: 'systems'
      },
      {
        name: 'Verification & Edge-Case Skepticism',
        description: 'Validating boundary conditions, null inputs, and unexpected exceptions.',
        category: 'judgment'
      },
      {
        name: 'Rapid Documentation Synthesis',
        description: 'Skimming API docs and technical specs to implement functional integrations.',
        category: 'communication'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI-Augmented Solutions Engineer / Full-Stack Orchestrator',
      strategicValue: 'Instead of spending days hand-typing routine boilerplate or CSS scaffolding, you command AI coding tools (Claude, Cursor, Copilot) to generate code while you focus on system architecture, API security, and verification.',
      whyExperienceMatters: 'Foundational CS fundamentals allow you to spot hallucinated APIs, architectural bloat, and security flaws that a non-technical prompt user would miss.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'Your value was never typing speed; it is architectural reasoning and verification. In an AI world, freshers with strong fundamentals can deliver mid-level engineering output on day one.',
    bridgeGaps: [
      'AI-assisted development environments (Cursor, Copilot, v0)',
      'LLM API integration (REST, structured JSON output, function calling)',
      'Verification-driven testing and anti-hallucination guardrails'
    ],
    extractedSkills: [
      'Algorithmic Logic',
      'AI Coding Acceleration',
      'Prompt Verification & Code Review',
      'REST & API Integration',
      'System Architecture Fundamentals'
    ]
  },
  {
    id: 'content_writer_to_editorial_director',
    category: 'Content & Marketing',
    pastRoleOrExperience: 'Content Writer / Copywriter',
    context: 'Wrote SEO blog posts, social captions, product copy, and email newsletters, spending hours staring at blank pages drafting introductory paragraphs.',
    priorTasks: [
      'Researching industry topics from secondary sources',
      'Drafting 1,500-word articles matching brand guidelines',
      'Optimizing copy for search engine keyword placement',
      'Proofreading and editing colleague drafts for tone consistency'
    ],
    underlyingCompetencies: [
      {
        name: 'Audience Empathy & Tone Calibration',
        description: 'Knowing instinctively what resonates with human emotion vs. what sounds synthetic and hollow.',
        category: 'empathy'
      },
      {
        name: 'Fact Grounding & Truth Verification',
        description: 'Vetting claims against authoritative primary sources and detecting subtle inaccuracies.',
        category: 'judgment'
      },
      {
        name: 'Narrative Framing & Differentiation',
        description: 'Structuring ideas so they hold attention in an overcrowded information environment.',
        category: 'creativity'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI Content Director & Editorial Systems Strategist',
      strategicValue: 'As the internet becomes flooded with generic AI-generated articles, truly authentic human perspective, original investigative interviews, and rigorous fact-checking become 10x more valuable.',
      whyExperienceMatters: 'AI generates smooth prose without understanding the world; you supply original narrative angle, editorial taste, and factual grounding.'
    },
    transferabilityIndex: 'High',
    latentValueSummary: 'Move from word-producer to taste-maker and editorial director. You use AI to generate briefs, outline drafts, and summarize research in seconds, then apply the human craft that creates genuine trust.',
    bridgeGaps: [
      'Prompt-driven content pipeline orchestration',
      'Fact-checking and anti-hallucination editorial workflows',
      'High-level content strategy and multi-channel syndication'
    ],
    extractedSkills: [
      'Editorial Judgment',
      'Fact-Checking & Source Grounding',
      'AI Writing Prompt Engineering',
      'Brand Tone Architecture',
      'Audience Resonance Strategy'
    ]
  },
  {
    id: 'graphic_designer_to_art_director',
    category: 'Design & Creative',
    pastRoleOrExperience: 'Graphic Designer / Junior UI Designer',
    context: 'Spent long hours manually resizing banners, clipping backgrounds in Photoshop, vectorizing icons, and creating repetitive social media assets.',
    priorTasks: [
      'Manual asset production and background removal in Photoshop/Illustrator',
      'Creating multiple aspect ratio variations for digital ad campaigns',
      'Assembling mood boards and visual color palettes for client presentations',
      'Iterating on layout drafts based on client feedback'
    ],
    underlyingCompetencies: [
      {
        name: 'Visual Hierarchy & Spatial Balance',
        description: 'Knowing where the human eye naturally travels, typography scales, and negative space pacing.',
        category: 'creativity'
      },
      {
        name: 'Client Intent Decoupling',
        description: 'Translating vague client feedback ("make it pop") into concrete visual design adjustments.',
        category: 'judgment'
      },
      {
        name: 'Brand Cohesion Intuition',
        description: 'Maintaining a distinct visual identity across disparate mediums and asset types.',
        category: 'systems'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'Creative AI Art Director & Visual Systems Lead',
      strategicValue: 'Generative image models (Midjourney, Imagen, Figma AI) produce infinite raw assets, but lack aesthetic discipline, brand consistency, and intentional typography hierarchy. You curate, direct, and integrate generative tools into polished commercial designs.',
      whyExperienceMatters: 'Non-designers generate chaotic AI imagery; designers use prompt geometry, color theory, and post-generation compositing to produce coherent brand assets.'
    },
    transferabilityIndex: 'High',
    latentValueSummary: 'You are freed from tedious pixel-pushing. By commanding generative image pipelines, you can produce the creative output of a multi-person design agency with elevated aesthetic taste.',
    bridgeGaps: [
      'Generative image parameter control (aspect ratios, seeds, reference images)',
      'AI-to-vector workflows and typography post-processing',
      'Design token system architecture and component guidelines'
    ],
    extractedSkills: [
      'Visual Hierarchy & Typographic Scale',
      'Generative Image Art Direction',
      'Brand Identity Systems',
      'Post-AI Compositing & Polish',
      'Client Creative Translation'
    ]
  },
  {
    id: 'financial_analyst_to_ai_superintendent',
    category: 'Finance & Analytics',
    pastRoleOrExperience: 'Junior Financial Analyst / Bookkeeper',
    context: 'Spent 20+ hours weekly manually extracting data from PDFs into Excel, reconciling receipts, copy-pasting spreadsheet formulas, and updating variance templates.',
    priorTasks: [
      'Data entry and cross-referencing invoice totals',
      'Writing and debugging complex Excel VLOOKUPs and pivot tables',
      'Generating routine monthly budget vs. actuals variance slides',
      'Chasing department managers for missing receipts'
    ],
    underlyingCompetencies: [
      {
        name: 'Financial Skepticism & Audit Mindset',
        description: 'Instinctively noticing when a discrepancy or ratio doesn\'t look mathematically plausible.',
        category: 'judgment'
      },
      {
        name: 'Regulatory & Compliance Accountability',
        description: 'Understanding legal liabilities, confidentiality, and statutory reporting standards.',
        category: 'judgment'
      },
      {
        name: 'Cross-Department Business Acumen',
        description: 'Translating financial metrics into operational reality for non-finance managers.',
        category: 'communication'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'Financial AI Operations Lead & Scenario Modeler',
      strategicValue: 'AI models can extract tabular invoice data and write Python formulas instantly, but hallucinate numbers or miss subtle regulatory shifts. You supervise automated ledger ingestion and build dynamic strategic forecasting scenarios.',
      whyExperienceMatters: 'A hallucination in a marketing email is embarrassing; a hallucination in financial compliance is catastrophic. Human audit accountability is legally and operationally required.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'Elevate from data-entry clerk to strategic business advisor. Let AI handle invoice parsing and variance reports while you evaluate capital allocation, tax strategy, and risk mitigation.',
    bridgeGaps: [
      'Automated data extraction tools and AI spreadsheet copilots',
      'Python/SQL data synthesis alongside AI code generation',
      'Scenario simulation and probabilistic forecasting'
    ],
    extractedSkills: [
      'Financial Audit & Discrepancy Detection',
      'Regulatory Compliance Accountability',
      'AI Spreadsheet Modeling',
      'Strategic Variance Interpretation',
      'Executive Financial Communication'
    ]
  },
  {
    id: 'teacher_to_learning_architect',
    category: 'Education & Training',
    pastRoleOrExperience: 'Teacher / Corporate Trainer / Educator',
    context: 'Spent nights grading repetitive worksheets, assembling lesson plans from scratch, creating quiz questions, and delivering live instruction to diverse learning speeds.',
    priorTasks: [
      'Crafting weekly lesson plans and lecture slides',
      'Grading 30+ student essays or quizzes with standardized rubrics',
      'Identifying which students are falling behind and tailoring explanations',
      'Managing classroom focus, motivation, and interpersonal friction'
    ],
    underlyingCompetencies: [
      {
        name: 'Pedagogical Scaffolding & Concept Chunking',
        description: 'Breaking down intimidating concepts into intuitive, digestible developmental steps.',
        category: 'systems'
      },
      {
        name: 'Motivational Psychology & Real-Time Engagement',
        description: 'Reading body language, sensing frustration or boredom, and adjusting pacing on the fly.',
        category: 'empathy'
      },
      {
        name: 'Constructive Feedback Delivery',
        description: 'Critiquing student work without crushing confidence, cultivating growth mindsets.',
        category: 'communication'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI Learning Experience Architect & Personalized Education Lead',
      strategicValue: 'AI can generate unlimited practice quizzes and explanations, but lacks the pedagogical wisdom to sequence concepts or inspire learners. You design intelligent tutoring workflows that adapt dynamically to individual student mastery.',
      whyExperienceMatters: 'Knowing HOW humans actually learn is a rare psychological superpower that algorithms cannot replicate.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'Leave lesson-plan drafting and worksheet grading to AI. Focus your human energy on 1-on-1 mentorship, psychological motivation, and curriculum design.',
    bridgeGaps: [
      'Adaptive learning system configuration and prompt design',
      'AI assessment rubrics and automated grading review loops',
      'Micro-learning curriculum architecture'
    ],
    extractedSkills: [
      'Pedagogical Scaffolding',
      'Learner Motivation & Empathy',
      'Adaptive AI Curriculum Design',
      'Diagnostic Assessment Calibration',
      'Educational Feedback Mastery'
    ]
  },
  {
    id: 'qa_tester_to_eval_engineer',
    category: 'Engineering & QA',
    pastRoleOrExperience: 'Manual QA Tester / Test Analyst',
    context: 'Followed manual click-paths through web applications, verified form validation rules, submitted Jira bug tickets, and conducted regression tests before every release.',
    priorTasks: [
      'Executing repetitive test cases across multiple browsers and devices',
      'Documenting step-by-step bug reproduction instructions',
      'Thinking like an adversarial or confused user to break interfaces',
      'Verifying fixes delivered by the development team'
    ],
    underlyingCompetencies: [
      {
        name: 'Adversarial Edge-Case Intuition',
        description: 'Instinctively guessing where a system will fail under extreme or bizarre conditions.',
        category: 'judgment'
      },
      {
        name: 'Deterministic Rigor & Precision',
        description: 'Refusing to assume something works until verified with verifiable empirical evidence.',
        category: 'systems'
      },
      {
        name: 'User Experience Empathy',
        description: 'Advocating for user delight against rushed developer shortcuts.',
        category: 'empathy'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI Model Evaluation (Eval) Engineer & Reliability Lead',
      strategicValue: 'AI models are non-deterministic: they behave unpredictably and hallucinate. The fastest-growing role in AI engineering is creating "Evals"—test suites that systematically stress-test AI outputs for safety, accuracy, and edge cases.',
      whyExperienceMatters: 'Your career was built on breaking software; AI systems are the most breakable systems ever built and desperately require adversarial human testing.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'Transition from manual regression clicking to architecting AI benchmark evaluations. You design the test suites that prevent AI models from hallucinating in production.',
    bridgeGaps: [
      'LLM evaluation frameworks and benchmark creation',
      'Prompt regression testing and red-teaming',
      'Python/JSON-based automated test assertion suites'
    ],
    extractedSkills: [
      'Adversarial Test Architecture',
      'LLM Evaluation & Red-Teaming',
      'Non-Deterministic System Verification',
      'Bug Isolation & Reproduction',
      'Quality Assurance Standards'
    ]
  },
  {
    id: 'project_manager_to_agentic_orchestrator',
    category: 'Management & Agile',
    pastRoleOrExperience: 'Project Coordinator / Scrum Master',
    context: 'Maintained Gantt charts, scheduled status meetings, followed up with engineers on ticket status, updated roadmap presentations, and wrote meeting minutes.',
    priorTasks: [
      'Taking meeting notes and extracting action items',
      'Nudging team members for daily Slack status updates',
      'Calculating sprint velocity and moving cards across Jira boards',
      'Drafting executive progress status reports'
    ],
    underlyingCompetencies: [
      {
        name: 'Cross-Functional Consensus Building',
        description: 'Aligning stubborn stakeholders with conflicting priorities around a shared outcome.',
        category: 'communication'
      },
      {
        name: 'Dependency & Bottleneck Anticipation',
        description: 'Foreseeing how a delay in one department will cascade into three other teams weeks later.',
        category: 'systems'
      },
      {
        name: 'Team Morale & Psychological Safety',
        description: 'Sensing burnout, unstated anxieties, and interpersonal tensions that derail projects.',
        category: 'empathy'
      }
    ],
    modernAITranslation: {
      emergingRoleTitle: 'AI Workflow Systems Orchestrator & Strategic Program Lead',
      strategicValue: 'AI tools can transcribe meetings and summarize ticket velocity automatically. You become the conductor of human-AI hybrid workflows, designing multi-agent automation pipelines and focusing on high-stakes executive alignment.',
      whyExperienceMatters: 'Tools do not build trust; humans build trust. Project success still hinges on negotiation, diplomacy, and accountability.'
    },
    transferabilityIndex: 'Exceptional',
    latentValueSummary: 'Ditch the meeting-note taking and manual Gantt chart adjustments. Let AI summarize project status while you orchestrate high-impact strategic delivery and stakeholder trust.',
    bridgeGaps: [
      'Workflow automation platforms (Make, Zapier, n8n, AI agents)',
      'AI meeting intelligence synthesis and action-item pipelines',
      'Human-in-the-loop governance and delivery assurance'
    ],
    extractedSkills: [
      'Stakeholder Consensus & Diplomacy',
      'Systemic Dependency Mapping',
      'AI Workflow Pipeline Design',
      'Strategic Program Assurance',
      'High-Leverage Team Facilitation'
    ]
  }
];

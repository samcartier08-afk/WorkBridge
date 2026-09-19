import { JobOpportunity } from '../types';

export interface IndiaMarketStat {
  metric: string;
  value: string;
  source: string;
  trend: string;
  insight: string;
}

export const INDIA_AI_MARKET_STATS: IndiaMarketStat[] = [
  {
    metric: 'AI & GenAI Talent Demand in India',
    value: '420,000+',
    source: 'NASSCOM / AIM 2025-2026 Tech Talent Report',
    trend: '+46% YoY',
    insight: 'India holds ~16% of the global AI talent pool, with demand outpacing domestic supply by 2.4x.'
  },
  {
    metric: 'Global Capability Centers (GCCs) in India',
    value: '1,580+ Centers',
    source: 'EY & Zinnov India GCC Pulse Report',
    trend: '$60B+ Market Value',
    insight: 'Over 72% of new India GCC mandates now mandate GenAI workflow proficiency and verification testing.'
  },
  {
    metric: 'AI-Augmented Developer Salary Premium',
    value: '+38% – 65%',
    source: 'Michael Page & TeamLease Digital Index',
    trend: 'Widening gap vs legacy coders',
    insight: 'Engineers who pair domain architecture with Cursor/Claude code review command ₹22–38 LPA at 3–6 yrs exp.'
  },
  {
    metric: 'Top Hiring Hubs in India',
    value: 'Bengaluru (38%) • Hyderabad (22%)',
    source: 'LinkedIn India Workforce Intelligence',
    trend: 'Pune & NCR emerging fast',
    insight: 'Bengaluru Outer Ring Road & Hyderabad HITEC City lead enterprise AI orchestration investments.'
  }
];

export const MOCK_JOB_OPPORTUNITIES: JobOpportunity[] = [
  // --- INDIA TECH HUBS (Bengaluru, Hyderabad, Pune, NCR, Mumbai, Chennai) ---
  {
    id: 'opp_in_blr_01',
    title: 'AI-Augmented Full-Stack Engineer',
    company: 'Swiggy Tech & Logistics Labs',
    companyType: 'Consumer Tech & High-Scale Logistics',
    location: 'Bengaluru, Karnataka (Hybrid)',
    workMode: 'Hybrid',
    experienceLevel: 'Fresher / Entry',
    salaryRange: '$35,000 – $48,000 USD equiv.',
    inrSalaryRange: '₹18 – ₹28 LPA + ESOPs',
    region: 'India',
    indiaHub: 'Bengaluru',
    marketDemandTrend: 'Top Tier-1 Product Demand (+52% YoY)',
    summary: 'Build high-throughput hyperlocal delivery dispatch and order allocation engines. Our engineers use Cursor and Claude copilots to prototype distributed services 3x faster, while dedicating human focus to latency budgets, fault tolerance, and concurrency correctness.',
    aiStackUsed: ['Cursor IDE', 'Claude 3.7 Sonnet', 'TypeScript / Node.js', 'Go', 'Kafka', 'Docker'],
    humanEdgeFactor: 'Distributed system concurrency reasoning, P99 latency protection, and zero-downtime database migrations.',
    requiredSkills: [
      'JavaScript / TypeScript',
      'React',
      'REST APIs',
      'Git & GitHub',
      'AI Coding Acceleration',
      'Prompt Verification & Code Review'
    ],
    niceToHaveSkills: [
      'Distributed Systems Fundamentals',
      'PostgreSQL',
      'Kafka Queues',
      'Microservices Design'
    ]
  },
  {
    id: 'opp_in_hyd_02',
    title: 'Enterprise AI Platform & Solutions Architect',
    company: 'JPMorgan Chase Global Tech Center',
    companyType: 'Global Investment Banking GCC',
    location: 'Hyderabad, Telangana (HITEC City)',
    workMode: 'Hybrid',
    experienceLevel: 'Senior / Lead',
    salaryRange: '$55,000 – $75,000 USD equiv.',
    inrSalaryRange: '₹42 – ₹62 LPA + Annual Bonus',
    region: 'India',
    indiaHub: 'Hyderabad',
    marketDemandTrend: 'BFSI GCC Priority Requisition (NASSCOM Leader)',
    summary: 'Lead the modernization of risk analytics pipelines across wealth management. Supervise deployment of sovereign on-premise LLMs, automate regulatory cross-checks, and ensure strict compliance with RBI and international banking guidelines.',
    aiStackUsed: ['Azure OpenAI GCC', 'Python Quant Engine', 'LangGraph', 'Enterprise RAG', 'Kubernetes'],
    humanEdgeFactor: 'Fiduciary sign-off liability, algorithmic auditability, and regulatory governance under strict banking constraints.',
    requiredSkills: [
      'Regulatory Compliance Accountability',
      'Systemic Dependency Mapping',
      'Financial Audit & Discrepancy Detection',
      'AI Workflow Pipeline Design',
      'Strategic Program Assurance'
    ],
    niceToHaveSkills: [
      'Financial Risk Modeling',
      'Enterprise Data Governance',
      'Banking Security Mandates'
    ]
  },
  {
    id: 'opp_in_pune_03',
    title: 'AI Quality & LLM Red-Teaming Engineer',
    company: 'Persistent AI Innovation Lab',
    companyType: 'Enterprise Cloud & AI Digital Engineering',
    location: 'Pune, Maharashtra (Hinjawadi Tech Park)',
    workMode: 'Hybrid',
    experienceLevel: 'Fresher / Entry',
    salaryRange: '$22,000 – $32,000 USD equiv.',
    inrSalaryRange: '₹14 – ₹22 LPA',
    region: 'India',
    indiaHub: 'Pune',
    marketDemandTrend: '+64% Hiring Surge for AI Testing Talent',
    summary: 'Design comprehensive regression and safety eval suites for enterprise AI clients in healthcare and manufacturing. Write automated adversarial tests that trap prompt injections, hallucinations, and privacy leaks before software delivery.',
    aiStackUsed: ['DeepEval', 'Promptfoo', 'Python FastAPIs', 'JSON Schema Validations', 'PyTest'],
    humanEdgeFactor: 'Adversarial skepticism, empirical boundary discovery, and mission-critical verification.',
    requiredSkills: [
      'Adversarial Test Architecture',
      'LLM Evaluation & Red-Teaming',
      'Verification-Driven Automated Testing',
      'Prompt Verification & Code Review',
      'Quality Assurance Standards'
    ],
    niceToHaveSkills: [
      'Python Scripting',
      'Enterprise SLA Monitoring',
      'API Security Testing'
    ]
  },
  {
    id: 'opp_in_ncr_04',
    title: 'AI Customer Operations & Escalation Strategist',
    company: 'Zomato & Blinkit Customer Intelligence',
    companyType: 'Hyperlocal E-commerce & Food Delivery',
    location: 'Gurugram, NCR (Cyber City)',
    workMode: 'On-site',
    experienceLevel: 'Mid-Level',
    salaryRange: '$25,000 – $36,000 USD equiv.',
    inrSalaryRange: '₹16 – ₹26 LPA',
    region: 'India',
    indiaHub: 'NCR (Gurugram/Noida)',
    marketDemandTrend: 'E-commerce AI Operations Priority',
    summary: 'Oversee automated agent chat fleets handling millions of daily customer events. Intercept sentiment drop anomalies, manage escalations requiring delicate human judgment, and calibrate automated policies to maintain customer trust.',
    aiStackUsed: ['Zendesk AI Suite', 'Custom Hindi/Hinglish NLP RAG', 'Slack Bots', 'Metabase'],
    humanEdgeFactor: 'Cultural empathy in customer disputes, crisis de-escalation, and human loyalty preservation.',
    requiredSkills: [
      'Customer Empathy & Retention',
      'Escalation Triage',
      'High-Stakes Empathy & Crisis De-escalation',
      'AI Agent Quality Auditing',
      'Problem Resolution'
    ],
    niceToHaveSkills: [
      'Multilingual Triage (Hinglish/Regional)',
      'Brand Tone Guardrails',
      'Workflow Automation Mapping'
    ]
  },
  {
    id: 'opp_in_mum_05',
    title: 'Fintech AI Workflow Orchestrator',
    company: 'Razorpay Financial Cloud',
    companyType: 'Fintech Unicorn & Payment Infrastructure',
    location: 'Mumbai / Bengaluru (Hybrid)',
    workMode: 'Hybrid',
    experienceLevel: 'Mid-Level',
    salaryRange: '$38,000 – $52,000 USD equiv.',
    inrSalaryRange: '₹26 – ₹38 LPA + Incentives',
    region: 'India',
    indiaHub: 'Mumbai',
    marketDemandTrend: '+48% Demand across Indian Fintech Unicorns',
    summary: 'Streamline merchant onboarding, KYC verification, and chargeback dispute routing using multi-agent LLM systems. Eliminate manual operations while ensuring human investigators handle suspected anti-money laundering triggers.',
    aiStackUsed: ['OpenAI Assistants API', 'Make.com Enterprise', 'Node.js', 'PostgreSQL', 'Airflow'],
    humanEdgeFactor: 'Fintech compliance vigilance, cross-border payments judgment, and fraud intuition.',
    requiredSkills: [
      'Systemic Dependency Mapping',
      'AI Workflow Pipeline Design',
      'Financial Audit & Discrepancy Detection',
      'Stakeholder Consensus & Diplomacy',
      'Strategic Program Assurance'
    ],
    niceToHaveSkills: [
      'Indian Payment Rails (UPI, BBPS)',
      'Merchant Dispute Architecture',
      'KYC/AML Regulatory Guidelines'
    ]
  },
  {
    id: 'opp_in_chn_06',
    title: 'SaaS Product Experience & AI Systems Designer',
    company: 'Zoho Corporation AI Center',
    companyType: 'Global Enterprise SaaS',
    location: 'Chennai, Tamil Nadu (OMR IT Expressway)',
    workMode: 'Hybrid',
    experienceLevel: 'Mid-Level',
    salaryRange: '$30,000 – $44,000 USD equiv.',
    inrSalaryRange: '₹20 – ₹32 LPA',
    region: 'India',
    indiaHub: 'Chennai',
    marketDemandTrend: 'SaaS AI Transformation Focus',
    summary: 'Shape how millions of global business users interact with generative assistants across CRM and Books. Craft accessible UI patterns, eliminate AI visual slop, and anchor interfaces in responsive design and typography systems.',
    aiStackUsed: ['Figma AI', 'Design Tokens', 'Midjourney v6', 'React Prototype Studio'],
    humanEdgeFactor: 'Mathematical typographic hierarchy, optical alignment, and user empathy across diverse global markets.',
    requiredSkills: [
      'Visual Hierarchy & Typographic Scale',
      'Design Systems Architecture',
      'Generative Image Art Direction',
      'Client Creative Translation',
      'Brand Identity Systems'
    ],
    niceToHaveSkills: [
      'Accessibility Standards (WCAG 2.1)',
      'SaaS Micro-interactions',
      'User Research & Usability Testing'
    ]
  },

  // --- GLOBAL & US ROLES ---
  {
    id: 'opp_eng_01',
    title: 'AI-Augmented Full-Stack Engineer',
    company: 'Nexus Cloud Systems',
    companyType: 'Series B Cloud Infrastructure',
    location: 'San Francisco, CA (Remote)',
    workMode: 'Remote',
    experienceLevel: 'Fresher / Entry',
    salaryRange: '$115,000 – $145,000 + Equity',
    inrSalaryRange: '₹95L – ₹1.2 Cr (Global Remote)',
    region: 'Global',
    marketDemandTrend: 'Silicon Valley AI Dev Benchmark',
    summary: 'Join our core platform team where developers utilize modern AI-assisted development environments to ship features 3x faster. You will architect resilient APIs, manage state persistence, and audit AI-generated code for security vulnerabilities.',
    aiStackUsed: ['Cursor IDE', 'Claude Code / Copilot', 'Gemini API', 'TypeScript', 'Docker', 'Vitest'],
    humanEdgeFactor: 'Architectural reasoning, verification testing, and preventing hallucinated database patterns.',
    requiredSkills: [
      'JavaScript / TypeScript',
      'React',
      'REST APIs',
      'Git & GitHub',
      'AI Coding Acceleration',
      'Prompt Verification & Code Review'
    ],
    niceToHaveSkills: [
      'Tailwind CSS',
      'System Architecture Fundamentals',
      'Basic SQL',
      'Docker Containers'
    ]
  },
  {
    id: 'opp_eval_04',
    title: 'AI Model Evaluation (Eval) Engineer',
    company: 'Veritas Health AI',
    companyType: 'Clinical Decision Intelligence',
    location: 'Boston, MA (Hybrid)',
    workMode: 'Hybrid',
    experienceLevel: 'Fresher / Entry',
    salaryRange: '$120,000 – $155,000',
    inrSalaryRange: '₹1.0 Cr – ₹1.3 Cr (US Direct)',
    region: 'Global',
    marketDemandTrend: 'BioTech & HealthTech AI Surge',
    summary: 'Build the automated benchmark and red-teaming test suites that verify our clinical decision-support AI models before hospital deployment. You design adversarial edge cases, detect hallucinations, and establish rigorous safety thresholds.',
    aiStackUsed: ['Python', 'DeepEval', 'Promptfoo', 'JSON Schema Assertions', 'FastAPI'],
    humanEdgeFactor: 'Adversarial skepticism, medical liability awareness, and empirical validation rigor.',
    requiredSkills: [
      'Adversarial Test Architecture',
      'LLM Evaluation & Red-Teaming',
      'Prompt Verification & Code Review',
      'Verification-Driven Automated Testing',
      'Quality Assurance Standards'
    ],
    niceToHaveSkills: [
      'Python Data Structures',
      'HIPAA Compliance Basics',
      'Non-Deterministic System Verification'
    ]
  },
  {
    id: 'opp_finance_05',
    title: 'Financial AI Operations & Risk Modeler',
    company: 'Apex Capital Partners',
    companyType: 'Asset Management & Private Equity',
    location: 'Chicago, IL (Hybrid)',
    workMode: 'Hybrid',
    experienceLevel: 'Senior / Lead',
    salaryRange: '$140,000 – $180,000 + Bonus',
    inrSalaryRange: '₹1.15 Cr – ₹1.5 Cr (US Direct)',
    region: 'Global',
    marketDemandTrend: 'Wall Street AI Modernization',
    summary: 'Oversee the ingestion of unstructured corporate filings, earnings calls, and balance sheets into automated scenario models. You serve as the human sign-off on risk exposure, macroeconomic sensitivity, and capital allocation.',
    aiStackUsed: ['Copilot for Excel', 'Python Quant Pipeline', 'Bloomberg Terminal', 'SEC Edgar Parser'],
    humanEdgeFactor: 'Fiduciary accountability, regulatory signature liability, and macro intuition.',
    requiredSkills: [
      'Financial Audit & Discrepancy Detection',
      'Regulatory Compliance Accountability',
      'AI Spreadsheet Modeling',
      'Strategic Variance Interpretation',
      'Executive Financial Communication'
    ],
    niceToHaveSkills: [
      'Python/SQL data synthesis',
      'Scenario simulation',
      'Probabilistic forecasting'
    ]
  },
  {
    id: 'opp_orchestrator_07',
    title: 'AI Workflow & Operations Orchestrator',
    company: 'Vanguard Logistics & Supply',
    companyType: 'Enterprise Supply Chain',
    location: 'Austin, TX (On-site / Hybrid)',
    workMode: 'Hybrid',
    experienceLevel: 'Mid-Level',
    salaryRange: '$110,000 – $135,000',
    inrSalaryRange: '₹90L – ₹1.1 Cr (Global Enterprise)',
    region: 'Global',
    marketDemandTrend: 'Enterprise Automation Priority',
    summary: 'Bridge the gap between business operations and automation. You will map manual vendor onboarding, warehouse dispatch, and invoice reconciliation bottlenecks, implementing multi-agent AI pipelines that liberate team hours.',
    aiStackUsed: ['Make.com', 'Zapier Central', 'OpenAI Assistant API', 'Airtable', 'Slack Agents'],
    humanEdgeFactor: 'Cross-functional diplomacy, vendor negotiation, and change management empathy.',
    requiredSkills: [
      'Stakeholder Consensus & Diplomacy',
      'Systemic Dependency Mapping',
      'AI Workflow Pipeline Design',
      'Strategic Program Assurance',
      'High-Leverage Team Facilitation'
    ],
    niceToHaveSkills: [
      'Supply Chain Domain Logic',
      'No-Code Workflow Architecture',
      'Change Management Frameworks'
    ]
  }
];

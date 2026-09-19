import { EmployerDepartmentAudit } from '../types';

export const EMPLOYER_DEPARTMENT_AUDITS: EmployerDepartmentAudit[] = [
  {
    id: 'dept_engineering',
    departmentName: 'Engineering & QA',
    headcount: 42,
    automationExposureIndex: 48,
    augmentationLeverageIndex: 78,
    humanCriticalIndex: 52,
    topRoutineVulnerabilities: [
      'Boilerplate CRUD code writing and standard syntax scaffolding',
      'Manual regression test execution across browsers',
      'Basic documentation drafting and ticket summaries'
    ],
    targetAIEnabledRoles: [
      {
        currentTitle: 'Junior Frontend / Backend Developer',
        emergingTitle: 'AI-Augmented Solutions Engineer',
        transitionWeeks: 6,
        savingsVsHiring: '$58,000 / role'
      },
      {
        currentTitle: 'Manual QA Tester',
        emergingTitle: 'AI Benchmark & Model Evaluation (Eval) Engineer',
        transitionWeeks: 8,
        savingsVsHiring: '$64,000 / role'
      }
    ],
    reskillingCurriculumPreview: [
      'Week 1-2: AI-Assisted IDE Mastery (Cursor, Copilot, prompt test loops)',
      'Week 3-4: LLM API Integration, Structured JSON & Function Calling',
      'Week 5-6: Adversarial Code Verification, Security Guardrails & Evals',
      'Week 7-8: Capstone: Production AI Agent Tool with 100% Test Coverage'
    ]
  },
  {
    id: 'dept_support',
    departmentName: 'Customer Support & Operations',
    headcount: 36,
    automationExposureIndex: 65,
    augmentationLeverageIndex: 82,
    humanCriticalIndex: 35,
    topRoutineVulnerabilities: [
      'Tier-1 password reset and order status inquiries',
      'Searching documentation for repetitive policy questions',
      'Logging standard ticket metadata and tagging categories'
    ],
    targetAIEnabledRoles: [
      {
        currentTitle: 'Tier-1 Support Agent',
        emergingTitle: 'AI Customer Agent Workflow Supervisor',
        transitionWeeks: 4,
        savingsVsHiring: '$42,000 / role'
      },
      {
        currentTitle: 'Helpdesk Specialist',
        emergingTitle: 'High-Value Escalation & Account Retention Specialist',
        transitionWeeks: 5,
        savingsVsHiring: '$48,000 / role'
      }
    ],
    reskillingCurriculumPreview: [
      'Week 1: Conversational AI Architecture & RAG Knowledge Base Sync',
      'Week 2: Designing Sentiment Triggers & Automated Escalation Logic',
      'Week 3: High-Stakes Empathy Protocols & Crisis Retention Techniques',
      'Week 4: AI Agent Transcript Quality Auditing & Weekly Optimization'
    ]
  },
  {
    id: 'dept_marketing',
    departmentName: 'Marketing, Content & Creative',
    headcount: 24,
    automationExposureIndex: 58,
    augmentationLeverageIndex: 85,
    humanCriticalIndex: 42,
    topRoutineVulnerabilities: [
      'Drafting basic SEO blog posts and social media captions',
      'Repetitive image resizing and background clipping',
      'Synthesizing competitor press releases'
    ],
    targetAIEnabledRoles: [
      {
        currentTitle: 'Content Writer / Copywriter',
        emergingTitle: 'AI Editorial Director & Brand Tone Strategist',
        transitionWeeks: 6,
        savingsVsHiring: '$46,000 / role'
      },
      {
        currentTitle: 'Junior Graphic Designer',
        emergingTitle: 'Creative AI Art Director & Visual Systems Lead',
        transitionWeeks: 6,
        savingsVsHiring: '$52,000 / role'
      }
    ],
    reskillingCurriculumPreview: [
      'Week 1-2: Multimodal Prompt Calibration & Anti-Slop Aesthetic Standards',
      'Week 3-4: Fact-Grounding, Source Attribution & Anti-Hallucination Loops',
      'Week 5-6: Integrated AI Campaign Strategy & Human Craft Compositing'
    ]
  },
  {
    id: 'dept_finance',
    departmentName: 'Finance & Accounting',
    headcount: 18,
    automationExposureIndex: 52,
    augmentationLeverageIndex: 75,
    humanCriticalIndex: 48,
    topRoutineVulnerabilities: [
      'Manual invoice PDF data extraction and spreadsheet entry',
      'Routine monthly variance calculations and budget reports',
      'Chasing cross-department receipts and documentation'
    ],
    targetAIEnabledRoles: [
      {
        currentTitle: 'Junior Financial Analyst / Bookkeeper',
        emergingTitle: 'Financial AI Operations Lead & Scenario Modeler',
        transitionWeeks: 7,
        savingsVsHiring: '$60,000 / role'
      }
    ],
    reskillingCurriculumPreview: [
      'Week 1-2: Automated Ledger Extraction & AI Spreadsheet Copilots',
      'Week 3-4: Regulatory Compliance Liability & Hallucination Audit Rules',
      'Week 5-7: Dynamic Scenario Modeling, Probabilistic Sensitivity Analysis'
    ]
  },
  {
    id: 'dept_people',
    departmentName: 'People, HR & Talent',
    headcount: 14,
    automationExposureIndex: 38,
    augmentationLeverageIndex: 72,
    humanCriticalIndex: 62,
    topRoutineVulnerabilities: [
      'Initial resume keyword screening and formatting',
      'Drafting generic job descriptions and interview invitations',
      'Answering routine benefits policy inquiries'
    ],
    targetAIEnabledRoles: [
      {
        currentTitle: 'HR Coordinator / Recruiter',
        emergingTitle: 'Workforce Transition & Internal Mobility Architect',
        transitionWeeks: 5,
        savingsVsHiring: '$44,000 / role'
      }
    ],
    reskillingCurriculumPreview: [
      'Week 1-2: Department Task Decomposition & Skill Inventory Mapping',
      'Week 3-4: Designing Internal Mobility Bridges & Micro-Credentialing',
      'Week 5: Change Management Psychology & Employee Reassurance Loops'
    ]
  }
];

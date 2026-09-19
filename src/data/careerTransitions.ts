import { CareerPathTransition, UserRoleType } from '../types';

export const CAREER_TRANSITIONS_BY_ROLE: Record<UserRoleType, CareerPathTransition[]> = {
  software_engineer: [
    {
      id: 'se-path-1',
      title: 'AI Solutions & Agentic Systems Engineer',
      category: 'Direct Evolution (High Leverage)',
      matchScore: 92,
      difficulty: 'Moderate',
      salaryGrowth: '+25% to +40%',
      timeline: '8–12 weeks',
      description: 'Design and deploy multi-agent autonomous workflows, model orchestration, tool calling pipelines, and secure API boundaries.',
      keyBridgeSkills: ['Multi-Step Agentic Loops', 'Context Engineering & Vector RAG', 'OpenTelemetry Tracing', 'Adversarial Prompt Guardrails'],
      whyItMatters: 'Companies are drowning in simple chatbots; they desperately need engineers who can build deterministic, high-reliability agent systems that integrate with real enterprise databases.'
    },
    {
      id: 'se-path-2',
      title: 'AI Verification & Reliability Architect',
      category: 'Specialization (Quality & Security)',
      matchScore: 86,
      difficulty: 'Gentle',
      salaryGrowth: '+20% to +35%',
      timeline: '6–10 weeks',
      description: 'Audit automated codebases, establish LLM evaluation benchmarks (Evals), prevent data leakage, and ensure regulatory compliance.',
      keyBridgeSkills: ['LLM Eval Frameworks (Promptfoo/Braintrust)', 'Security Boundaries & Injection Defense', 'Synthetic Data Testing', 'Automated Regression Suites'],
      whyItMatters: 'As AI writes 50%+ of code, the scarce premium shifts from writing syntax to rigorous verification, safety compliance, and architectural integrity.'
    },
    {
      id: 'se-path-3',
      title: 'Full-Stack Product Engineer (Solo Multiplier)',
      category: 'Broad Scope (Generalist Multiplier)',
      matchScore: 89,
      difficulty: 'Gentle',
      salaryGrowth: '+30% to +50%',
      timeline: '4–8 weeks',
      description: 'Operate as a 1-person software team executing design, backend, deployment, and marketing with AI copilots.',
      keyBridgeSkills: ['Rapid Prototyping (v0/Cursor)', 'Cloud Run & Serverless Deployment', 'Product Sense & User Framing', 'Automated DevOps'],
      whyItMatters: 'Startups and agile corporate pods increasingly favor nimble generalists who can ship end-to-end features in hours using modern AI tools.'
    }
  ],
  content_marketing: [
    {
      id: 'cm-path-1',
      title: 'AI Content Operations & Editorial Architect',
      category: 'Direct Evolution',
      matchScore: 94,
      difficulty: 'Gentle',
      salaryGrowth: '+25% to +35%',
      timeline: '6–8 weeks',
      description: 'Lead automated content repurposing pipelines while applying rigorous editorial standards and brand voice curation.',
      keyBridgeSkills: ['Make/Zapier Workflow Automation', 'Prompt System Architecture', 'Anti-Slop Editorial Verification', 'Content Performance Analytics'],
      whyItMatters: 'Replaces manual writing churn with strategic distribution systems that produce 5x content with zero drop in authentic voice.'
    },
    {
      id: 'cm-path-2',
      title: 'Generative Engine Optimization (GEO) Strategist',
      category: 'Emerging Frontier',
      matchScore: 88,
      difficulty: 'Moderate',
      salaryGrowth: '+30% to +45%',
      timeline: '8–12 weeks',
      description: 'Optimize brand visibility, entity citations, and knowledge graph presence across Perplexity, ChatGPT Search, and Gemini.',
      keyBridgeSkills: ['Semantic Entity Tagging', 'Information Retrieval Mechanics', 'Digital PR & Citation Sourcing', 'AI Search Telemetry'],
      whyItMatters: 'Traditional 10-blue-links SEO is declining; winning brands need experts who understand how answer engines formulate synthesis.'
    },
    {
      id: 'cm-path-3',
      title: 'Brand Storyteller & Narrative Producer',
      category: 'High Human Edge',
      matchScore: 85,
      difficulty: 'Gentle',
      salaryGrowth: '+20% to +40%',
      timeline: '6–10 weeks',
      description: 'Focus exclusively on the un-automatable: customer documentaries, executive ghostwriting, podcast production, and live community events.',
      keyBridgeSkills: ['Deep Interviewing Technique', 'Investigative Research', 'Documentary Narrative Pacing', 'Executive Relationship Management'],
      whyItMatters: 'As synthetic text saturates feeds, raw human vulnerability and genuine founder perspective command a massive audience premium.'
    }
  ],
  product_designer: [
    {
      id: 'pd-path-1',
      title: 'AI Experience & Dynamic UI Architect',
      category: 'Direct Evolution',
      matchScore: 91,
      difficulty: 'Moderate',
      salaryGrowth: '+25% to +40%',
      timeline: '8–12 weeks',
      description: 'Design non-linear conversational and ambient interfaces that adapt dynamically to real-time AI responses and user intents.',
      keyBridgeSkills: ['Non-Deterministic Flow Design', 'Prompt Ergonomics', 'Ambient Cue Architecture', 'Clickable Code Prototyping'],
      whyItMatters: 'Static Figma artboards are obsolete for AI products; the industry needs designers who understand dynamic latency, states, and generative canvases.'
    },
    {
      id: 'pd-path-2',
      title: 'Design Technologist & Code Prototyper',
      category: 'Hybrid Technical',
      matchScore: 87,
      difficulty: 'Moderate',
      salaryGrowth: '+30% to +45%',
      timeline: '8–10 weeks',
      description: 'Bridge design and engineering by turning generative ideas directly into production-grade React components and token systems.',
      keyBridgeSkills: ['React & Tailwind Code Fluency', 'Design Tokens Automation', 'Interactive Micro-animations', 'LLM Sandbox Assembly'],
      whyItMatters: 'Teams move too fast for redlines; design technologists who build in code shave months off product development cycles.'
    }
  ],
  financial_analyst: [
    {
      id: 'fa-path-1',
      title: 'Decision Intelligence Lead & Predictive Analyst',
      category: 'Direct Evolution',
      matchScore: 90,
      difficulty: 'Moderate',
      salaryGrowth: '+25% to +40%',
      timeline: '8–12 weeks',
      description: 'Combine automated Python ingestion with predictive ML models to deliver real-time scenario guidance directly to the C-suite.',
      keyBridgeSkills: ['Automated Python Pipelines', 'Monte Carlo & Stochastic Models', 'Executive Visualization (Tableau/Streamlit)', 'Macro Stress-Testing'],
      whyItMatters: 'Eliminates weeks of manual spreadsheet data wrangling, positioning the analyst as an indispensable strategic advisor.'
    }
  ],
  customer_success: [
    {
      id: 'cs-path-1',
      title: 'AI Customer Operations & Relationship Director',
      category: 'Direct Evolution',
      matchScore: 93,
      difficulty: 'Gentle',
      salaryGrowth: '+20% to +35%',
      timeline: '6–8 weeks',
      description: 'Architect Tier-1 AI deflection engines while orchestrating high-touch, empathetic relationship strategies for multi-million dollar accounts.',
      keyBridgeSkills: ['Support Knowledge RAG Tuning', 'Predictive Churn Telemetry', 'Enterprise Contract Negotiation', 'Customer Advocacy Systems'],
      whyItMatters: 'Companies need leaders who can deploy automated scale without alienating high-value enterprise accounts.'
    }
  ],
  project_manager: [
    {
      id: 'pm-path-1',
      title: 'AI Product Operations Lead',
      category: 'Direct Evolution',
      matchScore: 90,
      difficulty: 'Gentle',
      salaryGrowth: '+25% to +35%',
      timeline: '6–8 weeks',
      description: 'Automate cross-functional communications and dependency tracking to focus on team alignment, velocity, and culture.',
      keyBridgeSkills: ['AI-Augmented Jira/Linear Workflows', 'Dependency Risk Modeling', 'Stakeholder Alignment Facilitation', 'Team Psychological Safety'],
      whyItMatters: 'Frees project managers from typing status updates so they can focus on removing organizational roadblocks.'
    }
  ],
  hr_people: [
    {
      id: 'hr-path-1',
      title: 'AI Talent & Workforce Evolution Strategist',
      category: 'Direct Evolution',
      matchScore: 89,
      difficulty: 'Gentle',
      salaryGrowth: '+25% to +35%',
      timeline: '6–10 weeks',
      description: 'Guide internal employees through AI skill transitions and design ethical, bias-free AI talent screening frameworks.',
      keyBridgeSkills: ['Internal Upskilling Architecture', 'Algorithmic Hiring Bias Audits', 'Empathetic Career Coaching', 'Change Management'],
      whyItMatters: 'Every enterprise faces massive workforce retraining; leaders who can guide human adaptation are in high demand.'
    }
  ],
  custom: [
    {
      id: 'c-path-1',
      title: 'AI-Augmented Domain Specialist',
      category: 'Direct Evolution',
      matchScore: 92,
      difficulty: 'Moderate',
      salaryGrowth: '+25% to +40%',
      timeline: '8 weeks',
      description: 'Master AI copilot tools in your specific niche to deliver 3x output with superior human taste and verification.',
      keyBridgeSkills: ['Prompt Architecture', 'Automation Pipelines', 'Critical Quality Review', 'Applied Capstone Project'],
      whyItMatters: 'Enables you to command leadership and higher compensation by standing at the intersection of domain knowledge and AI leverage.'
    }
  ]
};

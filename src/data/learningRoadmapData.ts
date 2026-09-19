import { WeeklyRoadmapItem } from '../types';

export const EIGHT_WEEK_ROADMAP: WeeklyRoadmapItem[] = [
  {
    week: 1,
    title: 'AI Fundamentals & Mental Models',
    theme: 'Foundations',
    objective: 'Demystify how modern LLMs work, their probabilistic nature, failure modes, token economics, and how to construct unambiguous prompts.',
    estimatedHours: 5,
    topics: [
      'Next-token prediction vs actual reasoning: understanding what models can and cannot do',
      'Context windows, needle-in-a-haystack retrieval, and memory constraints',
      'Prompt Architecture: Role, Objective, Context, Constraints, and Output Format',
      'Zero-shot vs Few-shot in-context learning with domain examples',
      'Recognizing and mitigating hallucinations with verification techniques'
    ],
    microAssignment: {
      title: 'The De-hallucination Prompt Exercise',
      deliverable: 'A prompt system template that forces the AI to output citations, confidence markers, and "I do not know" fallbacks when data is absent.',
      instructions: 'Take an ambiguous query from your industry. Craft a prompt with explicit negative constraints, chain-of-thought instructions, and structured markdown output.'
    },
    tools: ['Google AI Studio', 'Gemini 2.5/3 Flash', 'Claude 3.7', 'OpenAI Playground'],
    resources: [
      { name: 'Prompt Engineering Guide (DAIR.AI)', type: 'Guide' },
      { name: 'Anthropic Prompt Engineering Interactive Tutorial', type: 'Course' },
      { name: 'Understanding Transformer Attention Visually', type: 'Interactive' }
    ]
  },
  {
    week: 2,
    title: 'Role-Specific AI Tools & Copilots',
    theme: 'Tooling Fluency',
    objective: 'Integrate the specialized AI copilots and productivity extensions built specifically for your domain into daily workflows.',
    estimatedHours: 6,
    topics: [
      'Auditing your existing software stack for native AI capabilities',
      'Keyboard shortcuts, workspace indexing, and contextual codebase/document steering',
      'Custom Instructions and System Prompts: creating persistent digital apprentices',
      'Comparing model capabilities: fast conversational models vs deep reasoning models',
      'Safeguarding corporate data: local vs cloud models, privacy settings, enterprise tiers'
    ],
    microAssignment: {
      title: 'Daily Workflow AI Audit & Pilot',
      deliverable: 'A 1-page time audit log comparing 3 recurring tasks executed manually vs executed with a dedicated AI copilot.',
      instructions: 'Track completion time, revision effort, and quality score for 3 routine work tasks over 3 days.'
    },
    tools: ['Cursor / GitHub Copilot', 'Notion AI', 'Perplexity Pro', 'v0.dev / Figma AI', 'Claude Projects'],
    resources: [
      { name: 'Cursor IDE Workflow Guide for Power Users', type: 'Documentation' },
      { name: 'AI Copilot Benchmarks and Best Practices 2026', type: 'Whitepaper' }
    ]
  },
  {
    week: 3,
    title: 'Data Fluency & Context Grounding',
    theme: 'Context & Data',
    objective: 'Learn how to supply models with accurate internal knowledge using semantic retrieval (RAG) concepts, structured data, and source grounding.',
    estimatedHours: 6,
    topics: [
      'Why models hallucinate without context: the power of external knowledge grounding',
      'Retrieval Augmented Generation (RAG) explained simply without complex jargon',
      'Preparing clean data: chunking text, sanitizing formats, creating structured JSON/CSV',
      'Vector search vs keyword search: how semantic similarity works in practice',
      'Building a personal or team knowledge vault that any AI tool can reference'
    ],
    microAssignment: {
      title: 'Build a Personal Domain Knowledge Base',
      deliverable: 'A structured collection of markdown files or Notion pages tested with an AI assistant to answer high-context domain questions accurately.',
      instructions: 'Assemble 5 company/industry reference docs. Upload them into Claude Projects or NotebookLM, and query complex policy nuances.'
    },
    tools: ['NotebookLM', 'Claude Projects / Knowledge Base', 'Google Sheets + Gemini', 'ChromaDB / Vector previewers'],
    resources: [
      { name: 'Google NotebookLM Deep Dive & Audio Overview Guide', type: 'Video' },
      { name: 'Practical RAG: Grounding AI with Real Data', type: 'Article' }
    ]
  },
  {
    week: 4,
    title: 'Automation & Repetitive Task Elimination',
    theme: 'Automation',
    objective: 'Connect AI models to webhooks and automation platforms (Zapier, Make, n8n, Python scripts) to automate multi-step background chores.',
    estimatedHours: 7,
    topics: [
      'Triggers, Actions, and Conditionals: the anatomy of modern workflow automation',
      'Using LLMs as decision routers inside automations (e.g., classifying emails, scoring leads)',
      'Scheduled batch jobs: generating daily morning briefings, competitor scans, bug summaries',
      'Error handling and human-in-the-loop approval steps in automated pipelines',
      'Cost calculation: estimating API tokens and subscription ROI for team automations'
    ],
    microAssignment: {
      title: 'The "Never Do It Again" Automation Pipeline',
      deliverable: 'An active 3-step automation that receives an input (form, email, or RSS), processes it through an LLM, and formats it into a summary sheet or notification.',
      instructions: 'Use Make.com or Zapier (free tier) or a simple script to automate your most hated recurring administrative chore.'
    },
    tools: ['Make.com', 'Zapier', 'n8n', 'OpenAI / Gemini REST APIs', 'Airtable Automations'],
    resources: [
      { name: 'Automating with AI: A Beginner to Intermediate Guide', type: 'Handbook' },
      { name: '10 No-Code AI Workflows That Save 10 Hours a Week', type: 'Templates' }
    ]
  },
  {
    week: 5,
    title: 'Human + AI Collaborative Workflows',
    theme: 'Collaboration Craft',
    objective: 'Master the iterative cycle: Task Definition → AI Draft Generation → Rigorous Human Review → Refined, High-Craft Output.',
    estimatedHours: 6,
    topics: [
      'The "Director Mindset": shifting from individual typist to creative director and executive editor',
      'The 4-pillar verification checklist: Accuracy, Tone/Empathy, Strategic Alignment, Ethical Edge Cases',
      'Spotting subtle AI clichés, corporate buzzwords, and synthetic fluff ("Anti-Slop")',
      'Interactive multi-turn sparring: pushing models to critique their own assumptions',
      'Documenting prompt provenance: when to disclose AI collaboration to clients and managers'
    ],
    microAssignment: {
      title: 'High-Stakes Deliverable Transformation',
      deliverable: 'A side-by-side artifact showing: Raw prompt, raw AI draft, annotated human critique notes, and the final elevated client-ready result.',
      instructions: 'Produce a real work artifact (proposal, design critique, architecture decision record, or client email) using the collaborative workflow.'
    },
    tools: ['AI+Human Workspace (in this app!)', 'Google Docs / Revision History', 'Figma Jam / FigJam AI'],
    resources: [
      { name: 'The Art of the Edit: Elevating Synthetic Text to Human Resonance', type: 'Essay' },
      { name: 'Verification Frameworks for Mission-Critical AI Outputs', type: 'Checklist' }
    ]
  },
  {
    week: 6,
    title: 'Applied Capstone Project',
    theme: 'Applied Mastery',
    objective: 'Design and build a tangible, end-to-end AI-augmented solution that solves a genuine problem in your chosen industry.',
    estimatedHours: 8,
    topics: [
      'Defining a crisp problem statement with measurable business impact',
      'Architecting the solution: user input, AI processing chain, human verification gate, output delivery',
      'Testing with real users or colleagues: gathering feedback on speed and accuracy',
      'Iterating based on edge cases: what happens when inputs are messy or contradictory',
      'Packaging documentation and calculating business value created (hours saved, revenue unlocked)'
    ],
    microAssignment: {
      title: 'Capstone Prototype & Demo',
      deliverable: 'A working prototype (code app, automated dashboard, or prompt system) accompanied by a 3-minute screen recording walkthrough.',
      instructions: 'Choose from recommended project blueprints or propose your own domain capstone approved by peer mentors.'
    },
    tools: ['AI Studio', 'GitHub / Vercel', 'Loom', 'Streamlit / Gradio', 'Replit'],
    resources: [
      { name: 'Capstone Project Guidelines and Grading Rubrics', type: 'Rubric' },
      { name: '5 Inspiring AI Career Transformation Case Studies', type: 'Case Studies' }
    ]
  },
  {
    week: 7,
    title: 'Portfolio & Proof of Work',
    theme: 'Proof of Work',
    objective: 'Transform your capstone and weekly deliverables into an undeniable, modern proof-of-work portfolio that proves your human+AI advantage.',
    estimatedHours: 6,
    topics: [
      'Why traditional resumes fail in the AI era: hiring managers want proof of leverage, not lists of buzzwords',
      'Documenting your "Human-in-the-Loop" methodology: showcasing your editorial taste and verification rigor',
      'Writing compelling case studies: Situation, Task, AI Augmentation, Human Interventions, Business Result',
      'Publishing interactive demos, GitHub repositories, or live Notion/Substack case studies',
      'Building public credibility: sharing learning insights on LinkedIn or niche industry communities'
    ],
    microAssignment: {
      title: 'The AI-Augmented Professional Portfolio Page',
      deliverable: 'A public link or clean PDF featuring 2 deep-dive case studies detailing your problem framing, AI tools used, human touchpoints, and quantitative outcomes.',
      instructions: 'Write two case studies using the STAR-H framework (Situation, Task, AI leverage, Review & Human additions, Result).'
    },
    tools: ['GitHub Pages', 'Notion Sites', 'Substack', 'LinkedIn Creator Mode', 'Canva'],
    resources: [
      { name: 'How to Build an AI-Era Tech Portfolio That Gets Interviews', type: 'Guide' },
      { name: 'STAR-H Case Study Template for Non-Technical & Technical Roles', type: 'Template' }
    ]
  },
  {
    week: 8,
    title: 'Career Readiness & Market Positioning',
    theme: 'Career Launch',
    objective: 'Position yourself as an indispensable, forward-looking professional who leads AI adaptation rather than fearing it.',
    estimatedHours: 6,
    topics: [
      'Translating "AI skills" on resumes: moving beyond "ChatGPT" to "orchestrated agentic data pipelines saving 15 hrs/wk"',
      'Acing the modern interview: answering "How do you use AI in your daily work?" with authority and ethical grounding',
      'Negotiating compensation for high-leverage roles: articulating 3x multiplier output to employers',
      'Internal advocacy: how to become the designated AI champion and trainer within your existing company',
      'Long-term continuous learning habits: filtering signal from noise in rapid AI research announcements'
    ],
    microAssignment: {
      title: 'The Career Pitch & Interview Simulation',
      deliverable: 'A revamped resume bullet set and a recorded 2-minute response to: "How do you leverage AI while ensuring data integrity and human taste?"',
      instructions: 'Audit your resume with our AI Readiness criteria and conduct a mock interview with a peer or mentor.'
    },
    tools: ['Resume Worded / Teal', 'Interview Simulation Prompts', 'LinkedIn Job Market Insights'],
    resources: [
      { name: 'Negotiating Above-Band Compensation with AI Productivity Proof', type: 'Strategy' },
      { name: '10 Interview Questions Every AI-Augmented Candidate Must Master', type: 'Cheat Sheet' }
    ]
  }
];

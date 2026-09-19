import { UserRoleType } from '../types';

export interface RolePreset {
  id: UserRoleType;
  title: string;
  industry: string;
  typicalSkills: string[];
  targetRoleTitle: string;
  suggestedGoal: string;
  description: string;
}

export const ROLE_PRESETS: RolePreset[] = [
  {
    id: 'software_engineer',
    title: 'Software Developer / Engineer',
    industry: 'Technology & Software',
    typicalSkills: ['JavaScript / TypeScript', 'React', 'Git & GitHub', 'REST APIs', 'SQL', 'Node.js', 'Unit Testing'],
    targetRoleTitle: 'AI-Augmented Solutions Engineer',
    suggestedGoal: 'Evolve from writing boilerplate code to architecting agentic systems & context-grounded AI workflows',
    description: 'Moving beyond syntax generation to system architecture, verification, and AI workflow integration.'
  },
  {
    id: 'content_marketing',
    title: 'Content Strategist & Marketer',
    industry: 'Marketing & Digital Media',
    typicalSkills: ['Copywriting', 'SEO Research', 'Social Media Strategy', 'Email Campaigns', 'Content Calendar', 'Brand Voice'],
    targetRoleTitle: 'AI Growth & Editorial Strategist',
    suggestedGoal: 'Shift from drafting volume to orchestrating AI pipelines, editorial craft, and strategic distribution',
    description: 'Elevating from manual copywriting to brand stewardship, high-taste curation, and strategic distribution.'
  },
  {
    id: 'product_designer',
    title: 'Product & UX/UI Designer',
    industry: 'Design & Digital Products',
    typicalSkills: ['Figma', 'Wireframing', 'User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
    targetRoleTitle: 'AI Experience Orchestrator',
    suggestedGoal: 'Design adaptive, conversational, and non-deterministic UI systems powered by generative models',
    description: 'Designing fluid, context-aware human-AI interfaces beyond traditional static rectangular widgets.'
  },
  {
    id: 'financial_analyst',
    title: 'Financial & Business Analyst',
    industry: 'Finance & Consulting',
    typicalSkills: ['Excel / Sheets Modeling', 'Financial Reporting', 'Variance Analysis', 'PowerBI / Tableau', 'Data Cleaning', 'SQL Basics'],
    targetRoleTitle: 'Decision Intelligence Partner',
    suggestedGoal: 'Leverage LLMs for automated synthesis and scenario testing while deepening strategic forecasting',
    description: 'Transforming routine balance sheet reconciliation into automated pipelines and predictive strategic advice.'
  },
  {
    id: 'customer_success',
    title: 'Customer Success & Support Lead',
    industry: 'SaaS & Enterprise Services',
    typicalSkills: ['Ticket Resolution', 'Zendesk / Intercom', 'Customer Onboarding', 'Account Management', 'Conflict De-escalation', 'Documentation'],
    targetRoleTitle: 'AI Operations & Relationship Strategist',
    suggestedGoal: 'Deploy intelligent support copilots while focusing high-touch empathy on executive accounts',
    description: 'Freeing time from answering tier-1 FAQs to resolving high-stakes relationship nuances and product adoption.'
  }
];

import { SKILL_TRANSLATION_PRESETS } from '../data/skillTranslatorData';
import { SkillTranslationPreset, CustomTranslationResult } from '../types';

/**
 * Service layer for Skill Translation.
 * In production, this can seamlessly call a server-side Gemini API endpoint (/api/translate-skills)
 * to run deep LLM semantic extraction on user resumes or past work history.
 * In this client environment, it combines high-fidelity rule heuristics with preset matching
 * to ensure 100% reliable, zero-latency execution.
 */

export const skillTranslatorService = {
  /**
   * Retrieve all curated translation presets
   */
  getAllPresets(): SkillTranslationPreset[] {
    return SKILL_TRANSLATION_PRESETS;
  },

  /**
   * Find preset matching a specific profession or user role
   */
  getPresetForRole(roleTitle: string): SkillTranslationPreset {
    const query = roleTitle.toLowerCase();
    const match = SKILL_TRANSLATION_PRESETS.find(p => 
      p.pastRoleOrExperience.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.modernAITranslation.emergingRoleTitle.toLowerCase().includes(query)
    );
    return match || SKILL_TRANSLATION_PRESETS[0];
  },

  /**
   * Translate arbitrary free-form user experience (e.g. resume bullet point, past duties)
   * into transferable AI-era capabilities, identifying latent strengths and bridge gaps.
   */
  translateCustomExperience(inputText: string): CustomTranslationResult {
    const text = inputText.trim();
    const lower = text.toLowerCase();

    // Semantic heuristic keyword matching
    const isTech = lower.includes('code') || lower.includes('program') || lower.includes('software') || lower.includes('develop') || lower.includes('data') || lower.includes('test') || lower.includes('bug');
    const isCustomer = lower.includes('customer') || lower.includes('client') || lower.includes('call') || lower.includes('support') || lower.includes('ticket') || lower.includes('service') || lower.includes('patient');
    const isCreative = lower.includes('design') || lower.includes('write') || lower.includes('art') || lower.includes('copy') || lower.includes('video') || lower.includes('content') || lower.includes('graphic');
    const isFinance = lower.includes('finance') || lower.includes('accounting') || lower.includes('excel') || lower.includes('audit') || lower.includes('money') || lower.includes('tax') || lower.includes('budget');
    const isPeople = lower.includes('manage') || lower.includes('team') || lower.includes('teach') || lower.includes('student') || lower.includes('agile') || lower.includes('lead') || lower.includes('recruit');

    let latentCompetencies: string[] = [];
    let modernAITranslation = '';
    let humanAdvantageFactor = '';
    let transferabilityScore = 88;
    let recommendedBridgeSkills: string[] = [];
    let suggestedRoles: string[] = [];

    if (isCustomer) {
      latentCompetencies = [
        'Real-Time High-Stakes Empathy & De-escalation',
        'Human Distress Triage & Root Cause Extraction',
        'Customer Retention Psychology Under Pressure'
      ];
      modernAITranslation = 'AI Support Agent Supervisor & Escalation Lead: Direct automated chatbot workflows, review edge-case transcripts, and personally resolve the critical, high-trust human interactions.';
      humanAdvantageFactor = 'Empathy and de-escalation are completely beyond generative models. You provide the emotional safety net when automated systems generate confusion.';
      transferabilityScore = 93;
      recommendedBridgeSkills = [
        'AI Support Knowledge Base Architecture (RAG)',
        'Prompt Tuning for Brand Empathy',
        'Customer Sentiment Trigger Rules'
      ];
      suggestedRoles = [
        'AI Customer Operations Lead',
        'Customer Experience Systems Architect',
        'High-Tier Escalation Specialist'
      ];
    } else if (isCreative) {
      latentCompetencies = [
        'Visual & Aesthetic Taste Judgment',
        'Audience Resonance & Emotional Framing',
        'Brand Narrative Cohesion'
      ];
      modernAITranslation = 'Creative AI Director & Visual Systems Architect: Command generative multimodal tools to produce rapid campaign concepts, curating and elevating synthetic drafts with human craft.';
      humanAdvantageFactor = 'Generative models produce endless generic variations ("AI slop"). Only human taste, typography hierarchy, and cultural awareness turn raw outputs into brand assets.';
      transferabilityScore = 91;
      recommendedBridgeSkills = [
        'Generative Parameter Control & Seed Consistency',
        'Post-AI Visual Compositing & Typography Craft',
        'Brand Prompt Guardrail Systems'
      ];
      suggestedRoles = [
        'AI Creative Strategist',
        'Multimodal Design Director',
        'Generative Brand Architect'
      ];
    } else if (isFinance) {
      latentCompetencies = [
        'Mathematical Skepticism & Discrepancy Spotting',
        'Regulatory Compliance Liability Awareness',
        'Cross-Functional Financial Translation'
      ];
      modernAITranslation = 'Financial AI Intelligence Lead: Supervise automated ledger parsing and forecast modeling, ensuring data integrity, compliance adherence, and strategic capital modeling.';
      humanAdvantageFactor = 'AI models frequently hallucinate numerical calculation logic. Your accountability, legal signature, and risk skepticism are indispensable to organizational survival.';
      transferabilityScore = 95;
      recommendedBridgeSkills = [
        'AI-Powered Spreadsheet Copilot Automation',
        'Automated Ingestion Pipeline Auditing',
        'Probabilistic Scenario Simulation'
      ];
      suggestedRoles = [
        'Financial AI Operations Manager',
        'Strategic Forecasting & Audit Lead',
        'Risk & Compliance AI Auditor'
      ];
    } else if (isPeople) {
      latentCompetencies = [
        'Stakeholder Alignment & Diplomatic Negotiation',
        'Interpersonal Trust & Psychological Safety',
        'Organizational Velocity & Dependency Anticipation'
      ];
      modernAITranslation = 'AI Workforce Orchestrator & Program Director: Conductor of human-AI hybrid teams, configuring multi-agent task boards while focusing 100% of human energy on leadership and alignment.';
      humanAdvantageFactor = 'Software cannot forge executive trust, navigate office politics, or inspire nervous team members. High-touch human leadership commands the highest market compensation.';
      transferabilityScore = 94;
      recommendedBridgeSkills = [
        'Agentic Workflow Automation (Zapier/Make/Agents)',
        'Meeting Intelligence & Action Extraction Systems',
        'Human-in-the-Loop Team Governance'
      ];
      suggestedRoles = [
        'AI Transformation Program Manager',
        'Hybrid Operations Director',
        'Agile AI Systems Coach'
      ];
    } else {
      // General Technical / Analytical Default
      latentCompetencies = [
        'Systemic Logic & Decomposition',
        'Empirical Verification & Edge-Case Skepticism',
        'Architectural Coherence & Security Intuition'
      ];
      modernAITranslation = 'AI Solutions Engineer & System Orchestrator: Leverage generative AI coding tools to accelerate syntax generation by 4x, while taking full responsibility for architecture, security, and verification.';
      humanAdvantageFactor = 'Anyone can prompt a model to write code; only an engineer understands the security vulnerabilities, state loops, and edge cases hidden in synthetic code.';
      transferabilityScore = 90;
      recommendedBridgeSkills = [
        'AI-Assisted IDE Mastery (Cursor, Copilot)',
        'LLM API Integration & Function Calling',
        'Verification-Driven Automated Testing'
      ];
      suggestedRoles = [
        'AI-Augmented Solutions Engineer',
        'LLM Systems Integrator',
        'Technical Product Orchestrator'
      ];
    }

    return {
      pastExperienceText: text,
      latentCompetencies,
      modernAITranslation,
      humanAdvantageFactor,
      transferabilityScore,
      recommendedBridgeSkills,
      suggestedRoles
    };
  }
};

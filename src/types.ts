export type UserRoleType = 
  | 'software_engineer'
  | 'product_designer'
  | 'content_marketing'
  | 'financial_analyst'
  | 'customer_success'
  | 'project_manager'
  | 'hr_people'
  | 'custom';

export type ExperienceLevel = 
  | 'fresher' // 0-1 years / fresh graduate
  | 'early'   // 1-3 years
  | 'mid'     // 3-7 years
  | 'senior'; // 7+ years

export type AIFamiliarity = 
  | 'beginner'     // Basic awareness / ChatGPT curious
  | 'intermediate' // Daily prompt user & research helper
  | 'advanced';    // API integrations, agentic workflows, custom tooling

export type LearningTimeCommitment = 
  | '2-4'
  | '5-8'
  | '10-15'
  | '15+';

export type UserPersona = 'student' | 'professional' | 'career_changer';

export interface StudentProfileData {
  collegeName: string;
  degree: string;
  academicYear: string;
  specialization: string;
  academicProjects: string[];
  careerInterests: string[];
  targetIndustry: string;
}

export interface ProfessionalProfileData {
  currentCompany?: string;
  yearsOfExperience: string;
  currentResponsibilities: string[];
  keyToolsUsed: string[];
}

export interface CareerChangerProfileData {
  previousRole: string;
  previousIndustry: string;
  pivotReason: string;
  transferableStrengths: string[];
  targetPivotRole: string;
}

export interface AssessmentData {
  userPersona: UserPersona;
  role: string;
  roleId: UserRoleType;
  industry: string;
  currentSkills: string[];
  experienceLevel: ExperienceLevel;
  careerGoal: string;
  learningTime: LearningTimeCommitment;
  aiFamiliarity: AIFamiliarity;
  targetRoleTitle?: string;
  studentProfile?: StudentProfileData;
  professionalProfile?: ProfessionalProfileData;
  careerChangerProfile?: CareerChangerProfileData;
}

export interface TaskImpactItem {
  id: string;
  taskName: string;
  description: string;
  timeSpentBefore: string;
  timeSpentWithAI: string;
  reason: string;
  humanElevatorStrategy: string;
}

export interface AIImpactBreakdown {
  automated: {
    percentage: number;
    description: string;
    tasks: TaskImpactItem[];
  };
  augmented: {
    percentage: number;
    description: string;
    tasks: TaskImpactItem[];
  };
  human: {
    percentage: number;
    description: string;
    tasks: TaskImpactItem[];
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'ai_tooling' | 'human_edge' | 'domain_mastery';
  isCurrent: boolean;
  isTarget: boolean;
  priority: 'high' | 'medium' | 'foundational';
  description: string;
  recommendedWeek?: number;
}

export interface CareerBridgeMilestone {
  stage: 'today' | 'ai_impact' | 'human_edge' | 'human_advantage' | 'skill_gap' | 'learning' | 'tomorrow';
  label: string;
  title: string;
  summary: string;
  badge: string;
  details: string[];
}

export interface HumanEdgeTask {
  title: string;
  description: string;
  whyAIExcels?: string;
  timeSaved?: string;
  aiContribution?: string;
  humanJudgmentNeeded?: string;
  whyHumanEssential?: string;
  humanValue?: string;
}

export interface HumanEdgeProfession {
  id: string;
  title: string;
  industry: string;
  categoryBadge: string;
  summary: string;
  aiCapabilityOverview: string;
  taskDistribution: {
    aiReady: number; // percentage
    aiHuman: number; // percentage
    humanCritical: number; // percentage
  };
  aiReadyTasks: HumanEdgeTask[];
  aiAssistedTasks: HumanEdgeTask[];
  humanCriticalTasks: HumanEdgeTask[];
  humanEdgeSkills: {
    name: string;
    category: 'empathy' | 'judgment' | 'creativity' | 'accountability' | 'context' | 'presence';
    description: string;
  }[];
  workflowScenario: {
    task: string;
    context: string;
    aiContribution: string;
    humanContribution: string;
    finalResult: string;
    humanValueSummary: string;
  };
}

export interface WeeklyRoadmapItem {
  week: number;
  title: string;
  theme: string;
  objective: string;
  estimatedHours: number;
  topics: string[];
  microAssignment: {
    title: string;
    deliverable: string;
    instructions: string;
  };
  tools: string[];
  resources: { name: string; type: string; url?: string }[];
}

export interface WorkspaceScenario {
  id: string;
  roleId: string;
  title: string;
  domain: string;
  task: {
    prompt: string;
    intent: string;
    context: string;
  };
  aiDraft: {
    output: string;
    pros: string[];
    weaknesses: string[];
  };
  humanReview: {
    checklist: { id: string; label: string; checked: boolean; tip: string }[];
    interventions: string[];
    critiqueNotes: string;
  };
  improvedResult: {
    output: string;
    humanValueAdded: string[];
    craftMetrics: { label: string; value: string }[];
  };
}

export interface CareerPathTransition {
  id: string;
  title: string;
  category: string;
  matchScore: number;
  difficulty: 'Gentle' | 'Moderate' | 'Ambitious';
  salaryGrowth: string;
  timeline: string;
  description: string;
  keyBridgeSkills: string[];
  whyItMatters: string;
}

export interface SkillTranslationPreset {
  id: string;
  category: string;
  pastRoleOrExperience: string;
  context: string;
  priorTasks: string[];
  underlyingCompetencies: {
    name: string;
    description: string;
    category: 'empathy' | 'judgment' | 'systems' | 'creativity' | 'communication';
  }[];
  modernAITranslation: {
    emergingRoleTitle: string;
    strategicValue: string;
    whyExperienceMatters: string;
  };
  transferabilityIndex: 'Exceptional' | 'High' | 'Solid';
  latentValueSummary: string;
  bridgeGaps: string[];
  extractedSkills: string[];
}

export interface CustomTranslationResult {
  pastExperienceText: string;
  latentCompetencies: string[];
  modernAITranslation: string;
  humanAdvantageFactor: string;
  transferabilityScore: number;
  recommendedBridgeSkills: string[];
  suggestedRoles: string[];
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  companyType: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  experienceLevel: 'Fresher / Entry' | 'Mid-Level' | 'Senior / Lead';
  salaryRange: string;
  inrSalaryRange?: string; // e.g. "₹24 – ₹36 LPA"
  region?: 'India' | 'Global' | 'US';
  indiaHub?: 'Bengaluru' | 'Hyderabad' | 'Pune' | 'NCR (Gurugram/Noida)' | 'Mumbai' | 'Chennai';
  marketDemandTrend?: string; // e.g. "+46% YoY Hiring Surge (NASSCOM)"
  summary: string;
  aiStackUsed: string[];
  humanEdgeFactor: string;
  requiredSkills: string[];
  niceToHaveSkills: string[];
  matchScore?: number;
  matchedSkills?: string[];
  missingGaps?: string[];
  bridgeAdvice?: string;
  isSaved?: boolean;
}

export interface EmployerDepartmentAudit {
  id: string;
  departmentName: string;
  headcount: number;
  automationExposureIndex: number; // percentage
  augmentationLeverageIndex: number; // percentage
  humanCriticalIndex: number; // percentage
  topRoutineVulnerabilities: string[];
  targetAIEnabledRoles: {
    currentTitle: string;
    emergingTitle: string;
    transitionWeeks: number;
    savingsVsHiring: string;
  }[];
  reskillingCurriculumPreview: string[];
}

export interface EmployerTransitionMetrics {
  totalEmployees: number;
  averageExternalReplacementCost: number;
  averageInternalReskillingCost: number;
  projectedSavings: number;
  retainedKnowledgeScore: number;
}

export type ActiveTab = 
  | 'landing'
  | 'assessment'
  | 'ai_impact'
  | 'human_advantage'
  | 'human_edge'
  | 'skill_translator'
  | 'skill_gap'
  | 'career_bridge'
  | 'learning_projects'
  | 'learning_path'
  | 'opportunities'
  | 'dashboard'
  | 'employer'
  | 'workspace'
  | 'career_paths';

import { AssessmentData } from '../types';

const STORAGE_KEY_ASSESSMENT = 'workbridge_assessment';
const STORAGE_KEY_COMPLETED_WEEKS = 'workbridge_completed_weeks';
const STORAGE_KEY_SAVED_SKILLS = 'workbridge_saved_skills';
const STORAGE_KEY_TARGET_PATH = 'workbridge_target_path';
const STORAGE_KEY_CHECKLIST_STATE = 'workbridge_checklist_state';

export const defaultAssessment: AssessmentData = {
  userPersona: 'student',
  role: 'Computer Science & AI Undergraduate',
  roleId: 'software_engineer',
  industry: 'Technology & Software',
  currentSkills: [
    'Python',
    'C++ / Data Structures',
    'JavaScript / TypeScript',
    'React Basics',
    'Git & GitHub',
    'SQL & Database Design',
    'Object-Oriented Programming'
  ],
  experienceLevel: 'fresher',
  careerGoal: 'Secure high-impact AI-augmented Software Engineer campus offer in Bangalore / Hyderabad',
  learningTime: '5-8',
  aiFamiliarity: 'intermediate',
  targetRoleTitle: 'AI-Augmented Full-Stack Engineer',
  studentProfile: {
    collegeName: 'National Institute of Technology / Tier-1 Engineering College',
    degree: 'B.Tech / B.E.',
    academicYear: 'Final Year (Graduating 2025/2026)',
    specialization: 'Computer Science & Engineering (AI/ML)',
    academicProjects: [
      'Multi-Agent Study Assistant with Vector RAG',
      'Campus Event Ticket Booking Web App',
      'Distributed Cache Simulator in C++'
    ],
    careerInterests: [
      'AI-Assisted Software Development',
      'Full-Stack Web Engineering',
      'Distributed Systems & Cloud Backend'
    ],
    targetIndustry: 'Technology & Cloud Ecosystem (Startups & GCCs)'
  },
  professionalProfile: {
    currentCompany: 'Enterprise IT Services',
    yearsOfExperience: '3–5 Years',
    currentResponsibilities: [
      'Maintaining legacy microservices and monolithic backend APIs',
      'Triaging defect bug tickets and writing standard unit test fixtures',
      'Reviewing pull requests and participating in sprint planning'
    ],
    keyToolsUsed: ['Java / Spring Boot', 'MySQL', 'Jira', 'Jenkins CI']
  },
  careerChangerProfile: {
    previousRole: 'Financial Operations & Audit Analyst',
    previousIndustry: 'Banking & Financial Services (BFSI)',
    pivotReason: 'Routine manual Excel reconciliation and audit checklists are becoming automated; seeking high-leverage AI Operations & Fintech orchestration.',
    transferableStrengths: [
      'Regulatory compliance accountability',
      'Fiduciary risk intuition',
      'Complex numerical discrepancy auditing',
      'High-stakes client diplomacy'
    ],
    targetPivotRole: 'Fintech AI Workflow Orchestrator'
  }
};

export function loadAssessment(): AssessmentData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_ASSESSMENT);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate legacy state if userPersona was missing
      if (!parsed.userPersona) {
        parsed.userPersona = 'student';
      }
      return {
        ...defaultAssessment,
        ...parsed,
        studentProfile: {
          ...defaultAssessment.studentProfile!,
          ...(parsed.studentProfile || {})
        },
        professionalProfile: {
          ...defaultAssessment.professionalProfile!,
          ...(parsed.professionalProfile || {})
        },
        careerChangerProfile: {
          ...defaultAssessment.careerChangerProfile!,
          ...(parsed.careerChangerProfile || {})
        }
      };
    }
  } catch (e) {
    console.warn('Failed to load assessment from localStorage', e);
  }
  return defaultAssessment;
}

export function saveAssessment(data: AssessmentData): void {
  try {
    localStorage.setItem(STORAGE_KEY_ASSESSMENT, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save assessment to localStorage', e);
  }
}

export function loadCompletedWeeks(): number[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_COMPLETED_WEEKS);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load completed weeks', e);
  }
  return [1]; // Week 1 started/done as initial helpful state
}

export function saveCompletedWeeks(weeks: number[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_COMPLETED_WEEKS, JSON.stringify(weeks));
  } catch (e) {
    console.warn('Failed to save completed weeks', e);
  }
}

export function loadSavedSkills(): { acquired: string[]; target: string[] } | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SAVED_SKILLS);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load saved skills', e);
  }
  return null;
}

export function saveCustomSkills(skills: { acquired: string[]; target: string[] }): void {
  try {
    localStorage.setItem(STORAGE_KEY_SAVED_SKILLS, JSON.stringify(skills));
  } catch (e) {
    console.warn('Failed to save custom skills', e);
  }
}

export function loadTargetPath(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY_TARGET_PATH);
  } catch {
    return null;
  }
}

export function saveTargetPath(pathId: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_TARGET_PATH, pathId);
  } catch (e) {
    console.warn('Failed to save target path', e);
  }
}

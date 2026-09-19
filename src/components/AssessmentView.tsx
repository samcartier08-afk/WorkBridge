import React, { useState } from 'react';
import { 
  AssessmentData, 
  ExperienceLevel, 
  LearningTimeCommitment, 
  AIFamiliarity, 
  UserRoleType,
  UserPersona,
  StudentProfileData,
  ProfessionalProfileData,
  CareerChangerProfileData
} from '../types';
import { ROLE_PRESETS } from '../data/roles';
import { 
  Check, 
  Plus, 
  X, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  Clock, 
  Target, 
  Award,
  Layers,
  GraduationCap,
  Building2,
  RefreshCw,
  FolderGit2,
  BookOpen,
  Compass,
  CheckCircle2
} from 'lucide-react';

interface AssessmentViewProps {
  initialData: AssessmentData;
  onSaveAndContinue: (data: AssessmentData) => void;
}

const INDUSTRIES = [
  'Technology & Software',
  'Marketing & Digital Media',
  'Design & Creative Products',
  'Finance, Banking & Fintech',
  'Customer Experience & Support',
  'Healthcare & Life Sciences',
  'Education & EdTech',
  'Consulting & Professional Services',
  'E-commerce & Retail Operations'
];

const STUDENT_DEGREES = [
  'B.Tech / B.E. (Engineering)',
  'BCA (Computer Applications)',
  'B.Sc Computer Science / IT / Data',
  'MCA (Master of Computer Apps)',
  'M.Tech / M.E. / MS',
  'B.Des / M.Des (Design)',
  'B.Com / BBA (Commerce & Finance)',
  'MBA / Post-Graduate Management',
  'Other Bachelor / Master Degree'
];

const STUDENT_YEARS = [
  '1st Year Undergraduate',
  '2nd Year Undergraduate',
  '3rd Year Undergraduate (Pre-Final)',
  'Final Year (Graduating 2025/2026)',
  'Recent College Graduate (0–1 yr post-grad)',
  'Masters / Postgraduate Student'
];

const STUDENT_SPECIALIZATIONS = [
  'Computer Science & Engineering',
  'AI & Machine Learning (CSE-AI)',
  'Data Science & Analytics',
  'Information Technology (IT)',
  'Electronics & Communication (ECE)',
  'UI/UX & Interactive Media Design',
  'FinTech & Quantitative Finance',
  'Business Analytics & Information Systems',
  'Mechanical / Robotics Engineering'
];

const POPULAR_STUDENT_SKILLS = [
  'Python',
  'C++ / DSA',
  'Java',
  'JavaScript / TypeScript',
  'React Basics',
  'SQL & Databases',
  'Git & GitHub',
  'Machine Learning Basics',
  'Object-Oriented Design',
  'REST APIs',
  'HTML / Tailwind CSS',
  'Problem Solving'
];

const POPULAR_STUDENT_INTERESTS = [
  'AI-Augmented Software Engineering',
  'GenAI & LLM Application Development',
  'AI Quality & Model Evaluation (Red-Teaming)',
  'Full-Stack Web & Mobile Systems',
  'Cloud Infrastructure & DevOps',
  'UI/UX Product Experience',
  'Data Engineering & Analytics'
];

const LEARNING_TIMES: { id: LearningTimeCommitment; label: string; desc: string }[] = [
  { id: '2-4', label: '2–4 hrs / week', desc: 'Light pace alongside heavy semester exams or full-time office hours' },
  { id: '5-8', label: '5–8 hrs / week', desc: 'Recommended sprint: 1 focused hour daily for verified portfolio readiness' },
  { id: '10-15', label: '10–15 hrs / week', desc: 'Immersion mode: perfect during semester breaks or active campus placement season' },
  { id: '15+', label: '15+ hrs / week', desc: 'Full-time transition sprint: ideal for rapid job search and career pivoters' }
];

const AI_FAMILIARITY_LEVELS: { id: AIFamiliarity; label: string; desc: string }[] = [
  { id: 'beginner', label: 'Beginner', desc: 'I have used ChatGPT or Gemini occasionally for summaries or basic homework explanations.' },
  { id: 'intermediate', label: 'Intermediate', desc: 'I use AI copilots daily for drafting code, debugging, or research, and want structured enterprise workflows.' },
  { id: 'advanced', label: 'Advanced', desc: 'I use Cursor, Claude Code, API integrations, agentic pipelines, or local model fine-tuning.' }
];

export const AssessmentView: React.FC<AssessmentViewProps> = ({
  initialData,
  onSaveAndContinue
}) => {
  const [formData, setFormData] = useState<AssessmentData>(initialData);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [newProjectInput, setNewProjectInput] = useState('');

  // Persona switch handler
  const handlePersonaSwitch = (persona: UserPersona) => {
    let roleTitle = formData.role;
    let goal = formData.careerGoal;
    let expLevel: ExperienceLevel = formData.experienceLevel;

    if (persona === 'student') {
      roleTitle = `${formData.studentProfile?.specialization || 'Computer Science'} Student (${formData.studentProfile?.degree || 'B.Tech'})`;
      goal = 'Secure top-tier campus offer at a product company or GCC (₹18–28 LPA) as an AI-enabled developer';
      expLevel = 'fresher';
    } else if (persona === 'professional') {
      roleTitle = 'Software Engineer (3–5 Years)';
      goal = 'Evolve from standard maintenance coder to high-leverage AI Solutions Architect';
      expLevel = 'mid';
    } else if (persona === 'career_changer') {
      roleTitle = 'Financial Operations Analyst (Pivoting to AI)';
      goal = 'Pivot into Fintech AI Workflow Orchestration preserving full compensation';
      expLevel = 'early';
    }

    setFormData(prev => ({
      ...prev,
      userPersona: persona,
      role: roleTitle,
      careerGoal: goal,
      experienceLevel: expLevel
    }));
  };

  // Student profile helpers
  const updateStudentProfile = (patch: Partial<StudentProfileData>) => {
    setFormData(prev => ({
      ...prev,
      studentProfile: {
        ...(prev.studentProfile || {
          collegeName: '',
          degree: 'B.Tech / B.E. (Engineering)',
          academicYear: 'Final Year (Graduating 2025/2026)',
          specialization: 'Computer Science & Engineering',
          academicProjects: [],
          careerInterests: [],
          targetIndustry: 'Technology & Software'
        }),
        ...patch
      }
    }));
  };

  // Skill management
  const addCustomSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newSkillInput.trim();
    if (trimmed && !formData.currentSkills.includes(trimmed)) {
      setFormData(prev => ({
        ...prev,
        currentSkills: [...prev.currentSkills, trimmed]
      }));
      setNewSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      currentSkills: prev.currentSkills.filter(s => s !== skillToRemove)
    }));
  };

  const togglePresetSkill = (skill: string) => {
    if (formData.currentSkills.includes(skill)) {
      removeSkill(skill);
    } else {
      setFormData(prev => ({
        ...prev,
        currentSkills: [...prev.currentSkills, skill]
      }));
    }
  };

  // Academic project management
  const addProject = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newProjectInput.trim();
    const currentProjects = formData.studentProfile?.academicProjects || [];
    if (trimmed && !currentProjects.includes(trimmed)) {
      updateStudentProfile({
        academicProjects: [...currentProjects, trimmed]
      });
      setNewProjectInput('');
    }
  };

  const removeProject = (proj: string) => {
    const currentProjects = formData.studentProfile?.academicProjects || [];
    updateStudentProfile({
      academicProjects: currentProjects.filter(p => p !== proj)
    });
  };

  const toggleCareerInterest = (interest: string) => {
    const current = formData.studentProfile?.careerInterests || [];
    if (current.includes(interest)) {
      updateStudentProfile({
        careerInterests: current.filter(i => i !== interest)
      });
    } else {
      updateStudentProfile({
        careerInterests: [...current, interest]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveAndContinue(formData);
  };

  const currentPersona = formData.userPersona || 'student';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* 1. Header & Stage Breadcrumb */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-semibold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Stage 1: Adaptive Baseline Diagnostic</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Career Profile & Adaptation Assessment
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
          Select your current stage in work or education. Workbridge calibrates an AI impact audit, 
          calculates your 20% skill gap, and builds a verified proof-of-work bridge.
        </p>
      </div>

      {/* 2. THE THREE PRIMARY USER PATHS SELECTOR */}
      <div className="glass-card rounded-2xl p-5 border border-stone-200/90 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Select Your Primary User Path (Targeted Adaptation Flow):</span>
          </span>
          <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 font-semibold">
            Active: {currentPersona === 'student' ? '🎓 Student' : currentPersona === 'professional' ? '💼 Professional' : '🔄 Career Changer'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Path 1: College / University Student */}
          <button
            type="button"
            id="persona-tab-student"
            onClick={() => handlePersonaSwitch('student')}
            className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 ${
              currentPersona === 'student'
                ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-1 ring-indigo-500'
                : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono">
                MAJOR FOCUS
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">
                1. College / University Student
              </h3>
              <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                Degree & campus projects → AI impact on hiring → Bridge syllabus gaps → Proof-of-work portfolio.
              </p>
            </div>
            <div className="text-[10px] font-mono text-indigo-700 font-semibold pt-1 border-t border-stone-100">
              Campus to AI Career Launchpad
            </div>
          </button>

          {/* Path 2: Working Professional */}
          <button
            type="button"
            id="persona-tab-professional"
            onClick={() => handlePersonaSwitch('professional')}
            className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 ${
              currentPersona === 'professional'
                ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-1 ring-indigo-500'
                : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-mono">
                PRACTITIONER
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">
                2. Working Professional
              </h3>
              <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                Current role → AI impact → Human judgment moat → Lateral step to AI Solutions / Lead.
              </p>
            </div>
            <div className="text-[10px] font-mono text-indigo-700 font-semibold pt-1 border-t border-stone-100">
              Role Evolution & Leverage
            </div>
          </button>

          {/* Path 3: Job Seeker / Career Changer */}
          <button
            type="button"
            id="persona-tab-career-changer"
            onClick={() => handlePersonaSwitch('career_changer')}
            className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 ${
              currentPersona === 'career_changer'
                ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-1 ring-indigo-500'
                : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-mono">
                PIVOT
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">
                3. Job Seeker / Career Changer
              </h3>
              <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                Previous domain experience → Transferable strengths → Skill gaps → Emerging opportunities.
              </p>
            </div>
            <div className="text-[10px] font-mono text-indigo-700 font-semibold pt-1 border-t border-stone-100">
              Transferable Pivot Bridge
            </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ========================================================= */}
        {/* PATH 1: COLLEGE / UNIVERSITY STUDENT CUSTOM SECTION */}
        {/* ========================================================= */}
        {currentPersona === 'student' && (
          <div className="space-y-6">
            {/* Student Step A: College & Degree */}
            <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                <div>
                  <h2 className="text-base font-bold text-stone-900">
                    1. College / University & Academic Background
                  </h2>
                  <p className="text-xs text-stone-500">
                    Tell us where you are studying and your graduation timeline so we calibrate against modern placement expectations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* College / University Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="student-college-input" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    College / University Name:
                  </label>
                  <input
                    id="student-college-input"
                    type="text"
                    value={formData.studentProfile?.collegeName || ''}
                    onChange={e => updateStudentProfile({ collegeName: e.target.value })}
                    placeholder="e.g. IIT Madras, BITS Pilani, Delhi University, Anna University, National Institute of Tech"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"
                    required
                  />
                </div>

                {/* Degree */}
                <div>
                  <label htmlFor="student-degree-select" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Degree Program:
                  </label>
                  <select
                    id="student-degree-select"
                    value={formData.studentProfile?.degree || STUDENT_DEGREES[0]}
                    onChange={e => updateStudentProfile({ degree: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"
                  >
                    {STUDENT_DEGREES.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Graduation Year */}
                <div>
                  <label htmlFor="student-year-select" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Academic Year / Stage:
                  </label>
                  <select
                    id="student-year-select"
                    value={formData.studentProfile?.academicYear || STUDENT_YEARS[3]}
                    onChange={e => updateStudentProfile({ academicYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"
                  >
                    {STUDENT_YEARS.map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Specialization */}
                <div className="sm:col-span-2">
                  <label htmlFor="student-spec-select" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Specialization / Major:
                  </label>
                  <select
                    id="student-spec-select"
                    value={formData.studentProfile?.specialization || STUDENT_SPECIALIZATIONS[0]}
                    onChange={e => {
                      updateStudentProfile({ specialization: e.target.value });
                      setFormData(prev => ({
                        ...prev,
                        role: `${e.target.value} Student (${formData.studentProfile?.degree || 'B.Tech'})`
                      }));
                    }}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"
                  >
                    {STUDENT_SPECIALIZATIONS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Student Step B: Skills & Academic Projects */}
            <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
                <Award className="w-5 h-5 text-indigo-600" />
                <div>
                  <h2 className="text-base font-bold text-stone-900">
                    2. Current Skills & Academic Coursework
                  </h2>
                  <p className="text-xs text-stone-500">
                    Select the foundational skills you have studied in college. We will identify which are transferable and which need AI copilot augmentation.
                  </p>
                </div>
              </div>

              {/* Popular student skills */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-700 block">
                  Quick Select Core Skills Studied:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_STUDENT_SKILLS.map(sk => {
                    const hasSkill = formData.currentSkills.includes(sk);
                    return (
                      <button
                        key={sk}
                        type="button"
                        onClick={() => togglePresetSkill(sk)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                          hasSkill
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                            : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
                        }`}
                      >
                        {hasSkill && <Check className="w-3 h-3 inline mr-1" />}
                        {sk}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom skill adder */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={e => setNewSkillInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addCustomSkill(); } }}
                  placeholder="Add custom course skill (e.g. Django, Flutter, Rust)..."
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
                <button
                  type="button"
                  onClick={() => addCustomSkill()}
                  className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800"
                >
                  Add Skill
                </button>
              </div>

              {/* Verified Toolbox Chips */}
              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-semibold text-stone-500 block mb-1.5">
                  Your Current Toolbox ({formData.currentSkills.length} Skills):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {formData.currentSkills.map(sk => (
                    <span
                      key={sk}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs border border-stone-200"
                    >
                      <span>{sk}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(sk)}
                        className="text-stone-400 hover:text-stone-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Projects Input */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-stone-800">
                    College / Mini-Projects Already Built:
                  </span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newProjectInput}
                    onChange={e => setNewProjectInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addProject(); } }}
                    placeholder="e.g. Multi-Agent Notes Assistant, Hospital DB Management, Portfolio Site..."
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => addProject()}
                    className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800"
                  >
                    Add Project
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {(formData.studentProfile?.academicProjects || []).map(p => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-900 text-xs border border-indigo-200 font-medium"
                    >
                      <span>{p}</span>
                      <button
                        type="button"
                        onClick={() => removeProject(p)}
                        className="text-indigo-400 hover:text-indigo-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Student Step C: Career Interests & Target Industry */}
            <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
                <Target className="w-5 h-5 text-indigo-600" />
                <div>
                  <h2 className="text-base font-bold text-stone-900">
                    3. Career Interests & Target Industry
                  </h2>
                  <p className="text-xs text-stone-500">
                    What kind of roles and company domains excite you most for campus or off-campus placements?
                  </p>
                </div>
              </div>

              {/* Career Interests chips */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-700 block">
                  Select Your Emerging AI Career Interests:
                </span>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_STUDENT_INTERESTS.map(interest => {
                    const isSelected = (formData.studentProfile?.careerInterests || []).includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleCareerInterest(interest)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                            : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 inline mr-1" />}
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Industry & Placement Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label htmlFor="student-target-ind-select" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Target Industry Ecosystem:
                  </label>
                  <select
                    id="student-target-ind-select"
                    value={formData.studentProfile?.targetIndustry || 'Technology & Software'}
                    onChange={e => {
                      updateStudentProfile({ targetIndustry: e.target.value });
                      setFormData(prev => ({ ...prev, industry: e.target.value }));
                    }}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="student-career-goal-input" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Placement Goal / Dream Offer:
                  </label>
                  <input
                    id="student-career-goal-input"
                    type="text"
                    value={formData.careerGoal}
                    onChange={e => setFormData({ ...formData, careerGoal: e.target.value })}
                    placeholder="e.g. Secure product-company SDE-1 offer (₹18-28 LPA)"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PATH 2: WORKING PROFESSIONAL CUSTOM SECTION */}
        {/* ========================================================= */}
        {currentPersona === 'professional' && (
          <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  Current Professional Role & Responsibilities
                </h2>
                <p className="text-xs text-stone-500">
                  Audit your current day-to-day work so we can decompose tasks into automated, augmented, and human judgment moats.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Current Role Title:
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Software Engineer, QA Lead, Financial Analyst"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Industry:
                </label>
                <select
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                >
                  {INDUSTRIES.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Career Evolution Goal:
                </label>
                <input
                  type="text"
                  value={formData.careerGoal}
                  onChange={e => setFormData({ ...formData, careerGoal: e.target.value })}
                  placeholder="e.g. Transition from junior maintenance coder to high-leverage AI Solutions Architect"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                  required
                />
              </div>
            </div>

            {/* Skills Toolbox */}
            <div className="pt-3 border-t border-stone-100 space-y-3">
              <span className="text-xs font-semibold text-stone-700 block">
                Your Current Technical / Domain Toolbox ({formData.currentSkills.length} skills):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {formData.currentSkills.map(sk => (
                  <span key={sk} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs border border-stone-200">
                    <span>{sk}</span>
                    <button type="button" onClick={() => removeSkill(sk)} className="text-stone-400 hover:text-stone-700">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={e => setNewSkillInput(e.target.value)}
                  placeholder="Add skill (e.g. Java, Docker, Stakeholder Management)..."
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-stone-200"
                />
                <button
                  type="button"
                  onClick={() => addCustomSkill()}
                  className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PATH 3: JOB SEEKER / CAREER CHANGER CUSTOM SECTION */}
        {/* ========================================================= */}
        {currentPersona === 'career_changer' && (
          <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <RefreshCw className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  Previous Background & Career Pivot Strategy
                </h2>
                <p className="text-xs text-stone-500">
                  Map your past domain mastery into transferable advantages for emerging AI roles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Previous Role / Discipline:
                </label>
                <input
                  type="text"
                  value={formData.careerChangerProfile?.previousRole || 'Financial Operations Analyst'}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    careerChangerProfile: {
                      ...(prev.careerChangerProfile || {
                        previousRole: '',
                        previousIndustry: '',
                        pivotReason: '',
                        transferableStrengths: [],
                        targetPivotRole: ''
                      }),
                      previousRole: e.target.value
                    }
                  }))}
                  placeholder="e.g. Financial Analyst, Manual QA, Content Writer, Legal Associate"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Target AI Pivot Role:
                </label>
                <input
                  type="text"
                  value={formData.careerChangerProfile?.targetPivotRole || 'Fintech AI Workflow Orchestrator'}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    targetRoleTitle: e.target.value,
                    careerChangerProfile: {
                      ...(prev.careerChangerProfile || {
                        previousRole: '',
                        previousIndustry: '',
                        pivotReason: '',
                        transferableStrengths: [],
                        targetPivotRole: ''
                      }),
                      targetPivotRole: e.target.value
                    }
                  }))}
                  placeholder="e.g. AI Prompt & Eval Engineer, AI Workflow Orchestrator"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Primary Pivot Reason / Motivation:
                </label>
                <textarea
                  rows={2}
                  value={formData.careerChangerProfile?.pivotReason || ''}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    careerChangerProfile: {
                      ...(prev.careerChangerProfile || {
                        previousRole: '',
                        previousIndustry: '',
                        pivotReason: '',
                        transferableStrengths: [],
                        targetPivotRole: ''
                      }),
                      pivotReason: e.target.value
                    }
                  }))}
                  placeholder="e.g. Manual data processing and audit checklists are automating; aiming to move into strategic AI system oversight."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 bg-white text-stone-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section: AI Familiarity & Weekly Commitment (Shared Core) */}
        <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
            <Clock className="w-5 h-5 text-indigo-600" />
            <div>
              <h2 className="text-base font-bold text-stone-900">
                AI Familiarity & Learning Commitment
              </h2>
              <p className="text-xs text-stone-500">
                Calibrate the depth and weekly pacing of your 8-week capstone sprints.
              </p>
            </div>
          </div>

          {/* AI Familiarity */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-stone-800">
              Current AI Tool Fluency:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {AI_FAMILIARITY_LEVELS.map(lvl => {
                const isSelected = formData.aiFamiliarity === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, aiFamiliarity: lvl.id })}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-indigo-50/80 border-indigo-500 shadow-2xs ring-1 ring-indigo-500 text-stone-900'
                        : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs">{lvl.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                    </div>
                    <p className="text-[11px] text-stone-500 leading-snug">{lvl.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weekly Learning Hours */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <label className="block text-xs font-bold text-stone-800">
              Weekly Learning Time Commitment:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {LEARNING_TIMES.map(time => {
                const isSelected = formData.learningTime === time.id;
                return (
                  <button
                    key={time.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, learningTime: time.id })}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-indigo-50/80 border-indigo-500 shadow-2xs ring-1 ring-indigo-500 text-stone-900'
                        : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs">{time.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                    </div>
                    <p className="text-[10px] text-stone-500 leading-snug">{time.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Submit & Continue Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            Active Path: <strong>{currentPersona === 'student' ? '🎓 Student' : currentPersona === 'professional' ? '💼 Professional' : '🔄 Career Changer'}</strong> • Ready to calculate AI Impact & Skill Delta.
          </div>

          <button
            type="submit"
            id="assessment-submit-btn"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>Analyze AI Impact & Compute Skill Gap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

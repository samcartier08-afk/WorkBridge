import React, { useState } from 'react';
import { AssessmentData, ActiveTab, UserPersona } from '../types';
import { loadCompletedWeeks, loadSavedSkills, saveAssessment } from '../utils/storage';
import { SKILL_GAP_BY_ROLE } from '../data/skillGapData';
import { EIGHT_WEEK_ROADMAP } from '../data/learningRoadmapData';
import { getJobOpportunities } from '../services/jobOpportunitiesService';
import { 
  LayoutDashboard, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Download, 
  Target, 
  Check, 
  Briefcase, 
  UserCheck, 
  ExternalLink, 
  BrainCircuit, 
  Building2, 
  ChevronRight, 
  TrendingUp,
  GraduationCap,
  RefreshCw,
  Award,
  FolderGit2,
  Compass,
  AlertCircle
} from 'lucide-react';

interface DashboardViewProps {
  assessment: AssessmentData;
  setActiveTab: (tab: ActiveTab) => void;
  onUpdateAssessment?: (data: AssessmentData) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  assessment,
  setActiveTab,
  onUpdateAssessment
}) => {
  const [activePersonaTab, setActivePersonaTab] = useState<UserPersona>(
    assessment.userPersona || 'student'
  );

  const completedWeeks = loadCompletedWeeks();
  const allSkills = SKILL_GAP_BY_ROLE[assessment.roleId] || SKILL_GAP_BY_ROLE.custom;
  const savedSkills = loadSavedSkills();
  const opportunities = getJobOpportunities(assessment);

  const acquiredSkillsCount = savedSkills 
    ? allSkills.filter(s => savedSkills.acquired.includes(s.id) || s.isCurrent).length
    : allSkills.filter(s => s.isCurrent).length;

  const totalSkills = allSkills.length;
  const skillsPercent = Math.round((acquiredSkillsCount / totalSkills) * 100);
  const learningPercent = Math.round((completedWeeks.length / 8) * 100);

  // Composite AI Readiness Score
  const aiReadinessScore = Math.min(96, Math.max(35, Math.round(
    (skillsPercent * 0.45) + (learningPercent * 0.35) + (assessment.aiFamiliarity === 'advanced' ? 20 : assessment.aiFamiliarity === 'intermediate' ? 12 : 5)
  )));

  // Determine next active week
  const nextPendingWeek = [1, 2, 3, 4, 5, 6, 7, 8].find(w => !completedWeeks.includes(w)) || 8;
  const nextWeekData = EIGHT_WEEK_ROADMAP.find(w => w.week === nextPendingWeek) || EIGHT_WEEK_ROADMAP[0];

  const [copiedReport, setCopiedReport] = useState(false);

  // Persona switch inside dashboard
  const handleSwitchPersona = (newPersona: UserPersona) => {
    setActivePersonaTab(newPersona);
    const updated: AssessmentData = {
      ...assessment,
      userPersona: newPersona
    };
    saveAssessment(updated);
    if (onUpdateAssessment) {
      onUpdateAssessment(updated);
    }
  };

  const handleExportPlan = () => {
    const personaLabel = activePersonaTab === 'student' ? 'COLLEGE / UNIVERSITY STUDENT' : activePersonaTab === 'professional' ? 'WORKING PROFESSIONAL' : 'JOB SEEKER / CAREER CHANGER';

    const reportText = `=== WORKBRIDGE AI CAREER ADAPTATION SUMMARY ===
USER PATHWAY: ${personaLabel}
Current Role/Stage: ${assessment.role}
Target Transition: ${assessment.targetRoleTitle || 'AI-Augmented Specialist'}
Industry: ${assessment.industry}
AI Readiness Score: ${aiReadinessScore}%

1. AI IMPACT AUDIT:
- AI-Ready (Automate): Repetitive syntax, boilerplate, routine data formatting
- AI + Human (Augment): Co-piloted implementation, fast architectural exploration
- Human-Critical: Verification, ethical accountability, domain judgment

2. HUMAN ADVANTAGE ANCHORS:
- System design reasoning & architecture
- Anti-slop verification & error liability
- Real-world stakeholder empathy & communication

3. SKILL GAP STATUS:
- Verified in Toolbox: ${acquiredSkillsCount} / ${totalSkills} (${skillsPercent}%)
- Identified 20% Delta: AI tool orchestration, Cursor/Copilot workflows, eval red-teaming

4. CAREER BRIDGE TRACK:
TODAY (${assessment.role}) → AI IMPACT → HUMAN ADVANTAGE → SKILL GAP → LEARNING → TOMORROW (${assessment.targetRoleTitle || 'AI Specialist'})

5. PROGRESS:
- ${completedWeeks.length} of 8 Weeks Completed (${learningPercent}%)

Tagline: "AI is changing work. Let's change with it."
Generated on Workbridge AI.`;

    navigator.clipboard.writeText(reportText);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  const studentData = assessment.studentProfile || {
    collegeName: 'National Institute of Technology / Tier-1 Engineering College',
    degree: 'B.Tech / B.E.',
    academicYear: 'Final Year (Graduating 2025/2026)',
    specialization: 'Computer Science & Engineering',
    academicProjects: [
      'Multi-Agent Study Assistant with Vector RAG',
      'Campus Event Ticket Booking Web App',
      'Distributed Cache Simulator in C++'
    ],
    careerInterests: [
      'AI-Assisted Software Development',
      'Full-Stack Web Engineering',
      'Cloud Systems'
    ],
    targetIndustry: 'Technology & Software'
  };

  // Filter opportunities for student/entry if in student view
  const displayOpportunities = activePersonaTab === 'student'
    ? opportunities.filter(j => j.title.toLowerCase().includes('junior') || j.title.toLowerCase().includes('associate') || j.title.toLowerCase().includes('software') || (j.matchScore ?? 0) > 85).slice(0, 3)
    : opportunities.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Dashboard Executive Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-2">
            <LayoutDashboard className="w-3.5 h-3.5 text-indigo-600" />
            <span>Career Adaptation Command Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Career Adaptation Dashboard
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Real-time orientation across AI Impact, Human Advantage, Skill Gaps, Bridge Roadmaps, and Live Opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            id="dashboard-export-plan-btn"
            onClick={handleExportPlan}
            className="px-4 py-2 rounded-xl bg-white border border-stone-200/90 hover:bg-stone-50 text-stone-700 text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors"
          >
            {copiedReport ? <Check className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4 text-stone-600" />}
            <span>{copiedReport ? 'Plan Copied!' : 'Export Plan'}</span>
          </button>
        </div>
      </div>

      {/* THREE USER PATHWAYS SEGMENTED SWITCHER ON DASHBOARD */}
      <div className="bg-stone-100/80 p-1.5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-1.5">
        <button
          type="button"
          onClick={() => handleSwitchPersona('student')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activePersonaTab === 'student'
              ? 'bg-white text-indigo-950 shadow-xs border border-stone-200/80'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-indigo-600" />
          <span>1. College / University Student Pathway</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
            MAJOR FOCUS
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleSwitchPersona('professional')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activePersonaTab === 'professional'
              ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <Building2 className="w-4 h-4 text-stone-700" />
          <span>2. Working Professional Pathway</span>
        </button>

        <button
          type="button"
          onClick={() => handleSwitchPersona('career_changer')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activePersonaTab === 'career_changer'
              ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <RefreshCw className="w-4 h-4 text-purple-600" />
          <span>3. Job Seeker / Career Changer Pathway</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. STUDENT-SPECIFIC DASHBOARD PROFILE BANNER (When Student is Selected)   */}
      {/* ========================================================================= */}
      {activePersonaTab === 'student' ? (
        <section className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-800/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 text-indigo-300 border border-indigo-400/40 flex items-center justify-center shadow-inner">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
                    STUDENT CAREER LAUNCHPAD
                  </span>
                  <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                    CAMPUS PLACEMENT & ENTRY 2025/2026
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {studentData.degree} in {studentData.specialization}
                </h2>
                <div className="text-xs text-indigo-200 mt-1 flex flex-wrap items-center gap-2">
                  <span>🏛️ {studentData.collegeName || 'Engineering & Technology University'}</span>
                  <span>•</span>
                  <span>📅 {studentData.academicYear}</span>
                </div>
              </div>
            </div>

            <div className="text-right sm:text-right bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 self-start sm:self-auto">
              <div className="text-[10px] text-indigo-200 uppercase font-mono">
                Placement AI Readiness
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400">
                {aiReadinessScore}% <span className="text-xs font-normal text-stone-300">Market-Ready</span>
              </div>
            </div>
          </div>

          {/* Student Flow Mapping Strip */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider font-semibold">
              The Student Adaptation Flow:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-1.5 text-[10px] font-mono">
              {[
                'College/Univ',
                'Degree & Spec',
                'Skills/Projects',
                'Career Interests',
                'AI Impact',
                'Skill Gap',
                'Projects/Learning',
                'Career Readiness',
                'Opportunities'
              ].map((step, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white/10 border border-white/10 text-center text-white/90">
                  <div className="text-[9px] text-indigo-300">{idx + 1}.</div>
                  <div className="truncate font-semibold">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transferable Skills vs. Missing Skills (Quick Breakdown) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Transferable Academic Strengths ({formDataSkillsCount(assessment)}):</span>
                </span>
                <span className="text-[10px] font-mono text-stone-300">From Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {assessment.currentSkills.slice(0, 6).map(s => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>Priority 20% Industry Gaps to Close:</span>
                </span>
                <span className="text-[10px] font-mono text-stone-300">Recruiter Moat</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Cursor / Claude Code Fluency',
                  'AI Evaluation & Red-Teaming',
                  'Vector RAG Architecture',
                  'GitHub Proof-of-Work Repos'
                ].map(g => (
                  <span key={g} className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : activePersonaTab === 'professional' ? (
        /* Working Professional Profile Banner */
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-800 text-stone-300 border border-stone-700 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                  WORKING PROFESSIONAL EVOLUTION
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {assessment.role}
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Focus: Current Role → AI Impact → Human Advantage → Transferable Skills → Lateral Transition
                </p>
              </div>
            </div>

            <div className="bg-stone-800/80 px-4 py-3 rounded-2xl border border-stone-700 self-start sm:self-auto text-right">
              <div className="text-[10px] text-stone-400 uppercase font-mono">
                Leverage Index
              </div>
              <div className="text-2xl font-bold font-mono text-indigo-400">
                {aiReadinessScore}%
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Career Changer Profile Banner */
        <section className="bg-gradient-to-r from-purple-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-900/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-800/40 text-purple-300 border border-purple-700 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                  CAREER PIVOT ARCHITECTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {assessment.careerChangerProfile?.previousRole || assessment.role} → {assessment.targetRoleTitle || 'AI Specialist'}
                </h2>
                <p className="text-xs text-purple-200/80 mt-0.5">
                  Focus: Previous Experience → Transferable Strengths → Skill Gaps → Emerging Opportunities
                </p>
              </div>
            </div>

            <div className="bg-white/10 px-4 py-3 rounded-2xl border border-white/10 self-start sm:self-auto text-right">
              <div className="text-[10px] text-purple-300 uppercase font-mono">
                Pivot Feasibility
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400">
                {aiReadinessScore}%
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. THE SHARED WORKBRIDGE CORE:                                            */}
      {/* AI IMPACT → HUMAN ADVANTAGE → SKILL GAP → CAREER BRIDGE → OPPORTUNITY      */}
      {/* ========================================================================= */}
      <section className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              The Workbridge Core Engine Continuum
            </h2>
          </div>
          <span className="text-[11px] font-mono text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
            Shared Adaptation Framework
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
          {[
            {
              step: '01',
              title: 'AI IMPACT',
              subtitle: 'Deconstruct Tasks',
              desc: activePersonaTab === 'student' ? 'What campus recruiters test vs. what AI automates' : 'Automated routines vs. Co-piloted leverage',
              tab: 'ai_impact',
              color: 'border-amber-200 bg-amber-50/40 text-amber-900'
            },
            {
              step: '02',
              title: 'HUMAN ADVANTAGE',
              subtitle: 'Irreplaceable Moat',
              desc: activePersonaTab === 'student' ? 'Architecture, DSA fundamentals & verification liability' : 'Contextual domain judgment & team trust',
              tab: 'human_advantage',
              color: 'border-purple-200 bg-purple-50/40 text-purple-950'
            },
            {
              step: '03',
              title: 'SKILL GAP',
              subtitle: 'The 20% Delta',
              desc: `${skillsPercent}% toolbox verified; closing target agentic & AI tool fluency`,
              tab: 'skill_gap',
              color: 'border-indigo-200 bg-indigo-50/40 text-indigo-900'
            },
            {
              step: '04',
              title: 'CAREER BRIDGE',
              subtitle: '8-Week Roadmap',
              desc: `Week ${nextPendingWeek} active: Hands-on capstones, not video courses`,
              tab: 'learning_projects',
              color: 'border-emerald-200 bg-emerald-50/40 text-emerald-900'
            },
            {
              step: '05',
              title: 'OPPORTUNITIES',
              subtitle: 'India & Global Requisitions',
              desc: activePersonaTab === 'student' ? 'Top fresher & graduate AI tech offers (₹8–24 LPA)' : '420,000+ AI requisitions across Indian GCCs & startups',
              tab: 'opportunities',
              color: 'border-blue-200 bg-blue-50/40 text-blue-900'
            }
          ].map((col) => (
            <button
              key={col.step}
              onClick={() => setActiveTab(col.tab as ActiveTab)}
              className={`p-3.5 rounded-xl border text-left transition-all hover:scale-[1.01] ${col.color}`}
            >
              <div className="text-[10px] font-mono font-bold opacity-75">STAGE {col.step}</div>
              <div className="text-xs font-bold mt-0.5 tracking-tight">{col.title}</div>
              <div className="text-[11px] font-semibold opacity-90">{col.subtitle}</div>
              <p className="text-[10px] leading-snug opacity-80 pt-2 border-t border-current/10 mt-2">
                {col.desc}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DETAILED BREAKDOWNS: AI IMPACT & HUMAN ADVANTAGE                       */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Impact on Target Career */}
        <section className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {activePersonaTab === 'student' ? 'AI Impact on Campus & Early Career' : 'AI Impact on Daily Work'}
              </h2>
            </div>
            <button onClick={() => setActiveTab('ai_impact')} className="text-xs text-stone-500 hover:text-stone-900 font-medium">
              Audit Matrix →
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 shrink-0">
                AI-READY
              </span>
              <p className="text-stone-700 leading-relaxed">
                {activePersonaTab === 'student'
                  ? 'Boilerplate CRUD code, syntax memorization, and basic homework assignments are now fully automated. Regurgitating textbook code no longer passes placement bars.'
                  : 'Repetitive boilerplate, structured transcription, and routine data formatting ready for immediate automated delegation.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                AI + HUMAN
              </span>
              <p className="text-stone-700 leading-relaxed">
                {activePersonaTab === 'student'
                  ? 'Pair programming with Cursor, automated test case generation, and rapid scaffolding. Students who can guide AI agents to ship working features stand out immediately.'
                  : 'Co-piloted research, first-draft synthesis, and data structuring where human review and context steering guide quality.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                HUMAN-CRITICAL
              </span>
              <p className="text-stone-700 leading-relaxed">
                {activePersonaTab === 'student'
                  ? 'Deep understanding of data structure trade-offs, system architecture, verifying that generated code is secure, and communicating reasoning clearly to senior interviewers.'
                  : 'Ethical accountability, empathy, high-stakes trade-offs, and final liability remain firmly within human jurisdiction.'}
              </p>
            </div>
          </div>
        </section>

        {/* Human Advantage / Transferable Skills */}
        <section className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {activePersonaTab === 'student' ? 'Your Transferable Student Moat' : 'Your Human Advantage'}
              </h2>
            </div>
            <button onClick={() => setActiveTab('human_advantage')} className="text-xs text-stone-500 hover:text-stone-900 font-medium">
              Explore Moat →
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1">
              <div className="font-bold text-purple-950 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600" />
                <span>Foundational First-Principles Reasoning</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {activePersonaTab === 'student'
                  ? 'Your CS degree teaches memory management, concurrency, and complexity analysis (Big-O). LLMs hallucinate subtle race conditions; you can catch and resolve them.'
                  : 'Contextual domain intuition that generative models lack because they have never lived in your organization or felt stakeholder pressure.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1">
              <div className="font-bold text-purple-950 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600" />
                <span>Anti-Slop Verification & Code Taste</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Recruiters are rejecting candidates whose take-homes are generic, AI-generated spaghetti. Your human review guarantees clean modular code with production tests.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1">
              <div className="font-bold text-purple-950 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600" />
                <span>Genuine Collaboration & Agency</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Empathy, active listening, asking the right questions, and taking end-to-end ownership of project delivery cannot be automated by any foundation model.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 4. SKILL GAP & 8-WEEK RECOMMENDED PROJECTS                                */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skill Gap Matrix */}
        <section className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {activePersonaTab === 'student' ? 'Missing Skills & The 20% Delta' : 'Skill Gap & Tool Fluency'}
              </h2>
            </div>
            <button onClick={() => setActiveTab('skill_gap')} className="text-xs text-indigo-600 hover:underline font-medium">
              Full Matrix →
            </button>
          </div>

          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-stone-900 font-mono">
                {acquiredSkillsCount}<span className="text-stone-400 text-xl font-normal">/{totalSkills}</span>
              </span>
              <span className="text-xs text-stone-500 font-medium">Target Competencies</span>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-800">
              {skillsPercent}% Verified
            </span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div style={{ width: `${skillsPercent}%` }} className="bg-indigo-600 h-full rounded-full transition-all" />
          </div>

          <div className="pt-2">
            <div className="text-[11px] font-semibold text-stone-700 mb-2">
              {activePersonaTab === 'student' ? 'High-Priority Gaps to Stand Out in Placements:' : 'Priority Gaps to Close:'}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allSkills.filter(s => !s.isCurrent && (!savedSkills || !savedSkills.acquired.includes(s.id))).slice(0, 4).map((gap) => (
                <span key={gap.id} className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  {gap.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Learning & Recommended Projects */}
        <section className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {activePersonaTab === 'student' ? 'Recommended Proof-of-Work Projects' : '8-Week Capstone Roadmap'}
              </h2>
            </div>
            <button onClick={() => setActiveTab('learning_projects')} className="text-xs text-purple-600 hover:underline font-medium">
              Sprints →
            </button>
          </div>

          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-stone-900 font-mono">
                {completedWeeks.length}<span className="text-stone-400 text-xl font-normal">/8</span>
              </span>
              <span className="text-xs text-stone-500 font-medium">Weeks Done</span>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-800">
              {learningPercent}% Completed
            </span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div style={{ width: `${learningPercent}%` }} className="bg-purple-600 h-full rounded-full transition-all" />
          </div>

          <p className="text-xs text-stone-600 leading-relaxed pt-1">
            {activePersonaTab === 'student'
              ? 'Build inspectable GitHub repositories with end-to-end tests and Docker deployment—showing hiring managers actual production capability, not just a resume keyword.'
              : 'Hands-on micro-projects designed to directly close your identified gaps with deliverable proof-of-work—not a generic video course.'}
          </p>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 5. MATCHED OPPORTUNITIES (INDIA STATS & REQUISITIONS)                     */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              {activePersonaTab === 'student'
                ? 'Relevant Fresher & Entry Opportunities (India Tech Hubs)'
                : 'Matched AI-Enabled Opportunities (India & Global)'}
            </h2>
          </div>
          <button onClick={() => setActiveTab('opportunities')} className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1">
            <span>Explore All 420K+ Requisitions</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {displayOpportunities.map((job) => (
            <div key={job.id} className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {job.matchScore}% Match
                </span>
                <div className="flex items-center gap-1 text-[11px] text-stone-500">
                  {job.region === 'India' && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded border border-emerald-200">
                      🇮🇳 {job.indiaHub || 'India'}
                    </span>
                  )}
                  <span>{job.workMode}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900 leading-snug">{job.title}</h3>
                <div className="text-xs text-stone-600 mt-0.5">{job.company} • {job.location}</div>
              </div>
              <div className="text-[11px] font-bold text-indigo-700">
                {job.inrSalaryRange || job.salaryRange}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. IMMEDIATE NEXT ACTION */}
      <section className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-white shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                Immediate Next Action
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Week {nextPendingWeek}: {nextWeekData.title}
              </h3>
            </div>
          </div>

          <button
            id="dashboard-take-action-btn"
            onClick={() => setActiveTab('learning_projects')}
            className="px-6 py-3 rounded-xl bg-white text-stone-900 hover:bg-stone-100 text-xs font-semibold shadow-xs flex items-center gap-2 self-start sm:self-auto transition-colors"
          >
            <span>Start Micro-Assignment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-indigo-300 font-semibold">Deliverable Proof-of-Work: </span>
            {nextWeekData.microAssignment.deliverable}
          </div>
          <span className="text-[11px] text-stone-400">
            Est. Time: {nextWeekData.estimatedHours} Hours
          </span>
        </div>
      </section>
    </div>
  );
};

function formDataSkillsCount(assessment: AssessmentData): number {
  return assessment.currentSkills.length;
}

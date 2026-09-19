import React from 'react';
import { ActiveTab, AssessmentData, UserPersona } from '../types';
import { ROLE_PRESETS } from '../data/roles';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Compass,
  Zap,
  ArrowUpRight,
  GraduationCap,
  Building2,
  RefreshCw,
  Award,
  ChevronRight
} from 'lucide-react';

interface LandingViewProps {
  onStartAssessment: () => void;
  onSelectRolePreset: (presetId: string) => void;
  onSelectPersona?: (persona: UserPersona) => void;
  setActiveTab: (tab: ActiveTab) => void;
  assessment: AssessmentData;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onStartAssessment,
  onSelectRolePreset,
  onSelectPersona,
  setActiveTab,
  assessment
}) => {
  const currentPersona = assessment.userPersona || 'student';

  const handleChoosePersona = (persona: UserPersona) => {
    if (onSelectPersona) {
      onSelectPersona(persona);
    } else {
      onStartAssessment();
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto px-4 pt-4 sm:pt-8">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
          <div className="w-[500px] h-[280px] bg-indigo-100/60 rounded-full blur-3xl" />
          <div className="w-[380px] h-[220px] bg-violet-100/40 rounded-full blur-2xl" />
        </div>

        {/* Minimal pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-200/80 text-stone-700 text-xs font-medium shadow-xs mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>Career Adaptation Framework for the AI Era</span>
        </div>

        {/* Primary Tagline & Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-[1.15] mb-6">
          AI is changing work. <br />
          <span className="font-serif-heading italic font-normal text-stone-700">
            Let's change with it.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          A calm, human-centered bridge for graduates entering transformed industries, professionals evolving their crafts, and career pivoters. Replace anxiety with an actionable 8-week path.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <button
            id="landing-start-assessment-btn"
            onClick={onStartAssessment}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group"
          >
            <span>Begin Career Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            id="landing-explore-dashboard-btn"
            onClick={() => setActiveTab('career_bridge')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-medium text-sm border border-stone-200/90 transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>View Career Bridge</span>
          </button>
        </div>

        {/* Active persona status */}
        <div className="mt-8 text-xs text-stone-500 flex items-center justify-center gap-2">
          <span>Active mode:</span>
          <span className="font-semibold text-stone-800">
            {currentPersona === 'student' ? '🎓 Student' : currentPersona === 'professional' ? '💼 Professional' : '🔄 Career Changer'} ({assessment.role})
          </span>
          <span>•</span>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="text-indigo-600 hover:underline font-medium"
          >
            Jump to Dashboard
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 PRIMARY USER PATHS SECTION - STUDENTS ARE MAJOR TARGET GROUP */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>Three Dedicated Adaptation Pathways</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            Choose Your Profile & Adaptation Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Students are a major target group, not an afterthought. Each path shares the Workbridge core engine (<span className="font-mono text-xs text-indigo-700">AI IMPACT → HUMAN ADVANTAGE → SKILL GAP → CAREER BRIDGE → OPPORTUNITY</span>) calibrated to your career stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. College / University Student */}
          <div className="rounded-2xl p-6 bg-white border border-indigo-200/80 shadow-xs flex flex-col justify-between space-y-4 relative overflow-hidden group hover:border-indigo-400 transition-all">
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-bl-xl font-mono uppercase tracking-wider">
              MAJOR FOCUS
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                1. College / University Student
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                For undergraduates, recent grads, and postgrads preparing for campus placements and entry-level hiring in transformed tech ecosystems.
              </p>

              {/* Student Process Stepper */}
              <div className="mt-4 p-3 rounded-xl bg-stone-50/90 border border-stone-200/70 text-[11px] space-y-1 font-mono text-stone-700">
                <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                  Student Adaptation Flow:
                </div>
                <div className="leading-snug text-stone-600">
                  College/University → Degree & Specialization → Skills/Projects → Career Interests → AI Impact on Target Industry → Skill Gap → Projects/Learning → Career Readiness → Opportunities
                </div>
              </div>
            </div>

            <button
              type="button"
              id="landing-choose-student-btn"
              onClick={() => handleChoosePersona('student')}
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Launch Student Pathway</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Working Professional */}
          <div className="rounded-2xl p-6 bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                2. Working Professional
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                For engineers, analysts, designers, and managers protecting their compensation and shifting from task execution to strategic leverage.
              </p>

              {/* Professional Process Stepper */}
              <div className="mt-4 p-3 rounded-xl bg-stone-50/90 border border-stone-200/70 text-[11px] space-y-1 font-mono text-stone-700">
                <div className="text-[10px] font-bold text-stone-800 uppercase tracking-wider">
                  Professional Evolution Flow:
                </div>
                <div className="leading-snug text-stone-600">
                  Current Role → AI Impact Audit → Human Advantage Moat → Transferable Skills → Lateral Transition Opportunities
                </div>
              </div>
            </div>

            <button
              type="button"
              id="landing-choose-professional-btn"
              onClick={() => handleChoosePersona('professional')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Launch Professional Flow</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Job Seeker / Career Changer */}
          <div className="rounded-2xl p-6 bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                3. Job Seeker / Career Changer
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                For professionals pivoting across disciplines or re-entering the market into high-demand AI-orchestrated roles.
              </p>

              {/* Career Changer Process Stepper */}
              <div className="mt-4 p-3 rounded-xl bg-stone-50/90 border border-stone-200/70 text-[11px] space-y-1 font-mono text-stone-700">
                <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">
                  Career Pivot Flow:
                </div>
                <div className="leading-snug text-stone-600">
                  Previous Experience → Transferable Strengths → Skill Gaps → Emerging Opportunities
                </div>
              </div>
            </div>

            <button
              type="button"
              id="landing-choose-changer-btn"
              onClick={() => handleChoosePersona('career_changer')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Launch Career Pivot Flow</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The Core Career Bridge Visual Preview */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/60 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">The Core Architecture</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 mt-0.5">The 6-Stage Career Bridge</h2>
            </div>
            <button
              id="landing-open-bridge-full"
              onClick={() => setActiveTab('career_bridge')}
              className="inline-flex items-center gap-1 text-xs font-medium text-indigo-700 hover:text-indigo-900 bg-indigo-50/70 hover:bg-indigo-100/70 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto"
            >
              <span>Explore Interactive Model</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stepper Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {[
              {
                step: '01',
                title: 'CURRENT ROLE',
                subtitle: 'Baseline Role',
                desc: 'Audit recurring routine tasks and baseline skill portfolio.',
                accent: 'border-stone-200 bg-stone-50/70 text-stone-800'
              },
              {
                step: '02',
                title: 'AI IMPACT',
                subtitle: 'Automate / Augment',
                desc: 'Separate pure automation from tasks amplified by human expertise.',
                accent: 'border-amber-200/80 bg-amber-50/40 text-amber-900'
              },
              {
                step: '03',
                title: 'HUMAN EDGE',
                subtitle: 'Judgment & Empathy',
                desc: 'AI handles information. Humans handle judgment and ethics.',
                accent: 'border-purple-200/80 bg-purple-50/50 text-purple-950'
              },
              {
                step: '04',
                title: 'SKILL GAP',
                subtitle: 'The Delta',
                desc: 'Isolate key AI tooling fluency and irreplaceable human differentiators.',
                accent: 'border-indigo-200/80 bg-indigo-50/40 text-indigo-900'
              },
              {
                step: '05',
                title: 'LEARNING',
                subtitle: '8-Week Capstone',
                desc: 'Verifiable hands-on projects, not passive video lectures.',
                accent: 'border-emerald-200/80 bg-emerald-50/40 text-emerald-900'
              },
              {
                step: '06',
                title: 'FUTURE ROLE',
                subtitle: 'The Destination',
                desc: 'Step forward into an AI-empowered high-agency career.',
                accent: 'border-blue-200/80 bg-blue-50/40 text-blue-900'
              }
            ].map(col => (
              <div key={col.step} className={`p-4 rounded-xl border ${col.accent} space-y-2 flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest block opacity-70">
                    STAGE {col.step}
                  </span>
                  <h3 className="text-xs font-bold mt-1 tracking-tight">{col.title}</h3>
                  <div className="text-[11px] font-semibold opacity-90">{col.subtitle}</div>
                </div>
                <p className="text-[10px] leading-normal opacity-80 pt-2 border-t border-current/10">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preset Role Bridges */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Explore Pre-Calculated Career Bridges</h2>
            <p className="text-xs text-stone-500">Select your discipline to inspect custom AI impact distributions and 8-week roadmaps.</p>
          </div>
          <button
            onClick={onStartAssessment}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline"
          >
            Or start customized assessment →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ROLE_PRESETS.map((preset) => {
            const isCurrent = assessment.roleId === preset.id;
            return (
              <button
                key={preset.id}
                id={`preset-btn-${preset.id}`}
                onClick={() => onSelectRolePreset(preset.id)}
                className={`p-4 rounded-xl text-left border transition-all relative ${
                  isCurrent 
                    ? 'bg-indigo-50/60 border-indigo-300 ring-1 ring-indigo-200' 
                    : 'bg-white hover:bg-stone-50/80 border-stone-200/90 shadow-2xs'
                }`}
              >
                {isCurrent && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">
                    Selected
                  </span>
                )}
                <div className="text-xs font-semibold text-stone-500">{preset.industry}</div>
                <div className="font-semibold text-stone-900 text-sm mt-0.5">{preset.title}</div>
                <p className="text-[11px] text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                  {preset.suggestedGoal}
                </p>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="text-indigo-600 font-medium">Target: {preset.targetRoleTitle}</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Anti-Slop / Calming Philosophy Banner */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="p-6 rounded-2xl bg-stone-100/80 border border-stone-200/80 text-center space-y-3">
          <div className="inline-flex items-center justify-center p-2 rounded-xl bg-white text-stone-800 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-base font-semibold text-stone-900">Our Core Thesis: AI Amplifies Craft, It Does Not Replace Judgment</h3>
          <p className="text-xs text-stone-600 max-w-xl mx-auto leading-relaxed">
            The market is quickly tiring of generic, low-effort AI slop. True career resilience comes from combining modern generative speed with deeply human verification, taste, domain nuance, and ethical accountability.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('workspace')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              <span>See the AI+Human Workspace in action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

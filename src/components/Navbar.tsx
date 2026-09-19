import React from 'react';
import { ActiveTab, AssessmentData } from '../types';
import { 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  LayoutDashboard, 
  FileText,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  BrainCircuit,
  Briefcase,
  Building2,
  Check,
  CircleDot,
  Clock,
  Download
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  assessment: AssessmentData;
  onReset: () => void;
}

interface NavStep {
  id: ActiveTab;
  label: string;
  shortLabel: string;
  stageNum: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const NAV_STEPS: NavStep[] = [
  { 
    id: 'assessment', 
    label: 'Assessment', 
    shortLabel: 'Profile',
    stageNum: 1, 
    description: 'Baseline profile & skills',
    icon: FileText 
  },
  { 
    id: 'ai_impact', 
    label: 'AI Impact', 
    shortLabel: 'Impact',
    stageNum: 2, 
    description: 'Automate vs Augment vs Human',
    icon: Sparkles 
  },
  { 
    id: 'human_advantage', 
    label: 'Human Advantage', 
    shortLabel: 'Advantage',
    stageNum: 3, 
    description: 'Irreplaceable human core',
    icon: ShieldCheck 
  },
  { 
    id: 'skill_translator', 
    label: 'Skill Translator', 
    shortLabel: 'Translator',
    stageNum: 4, 
    description: 'Translate experience to AI',
    icon: BrainCircuit, 
    badge: 'New' 
  },
  { 
    id: 'skill_gap', 
    label: 'Skill Gap', 
    shortLabel: 'Gaps',
    stageNum: 5, 
    description: 'Competency delta matrix',
    icon: CheckCircle2 
  },
  { 
    id: 'career_bridge', 
    label: 'Career Bridge', 
    shortLabel: 'Bridge',
    stageNum: 6, 
    description: 'Today to Tomorrow continuum',
    icon: Layers, 
    badge: 'Core' 
  },
  { 
    id: 'learning_projects', 
    label: 'Learning & Projects', 
    shortLabel: 'Roadmap',
    stageNum: 7, 
    description: 'Proof-of-work assignments',
    icon: BookOpen 
  },
  { 
    id: 'opportunities', 
    label: 'Opportunities', 
    shortLabel: 'Jobs',
    stageNum: 8, 
    description: 'AI-augmented job market',
    icon: Briefcase, 
    badge: 'Jobs' 
  },
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    shortLabel: 'Overview',
    stageNum: 9, 
    description: 'Executive adaptation command center',
    icon: LayoutDashboard 
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  assessment,
  onReset
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Map legacy/alias tabs to current flow index
  const normalizedTab = 
    activeTab === 'human_edge' ? 'human_advantage' :
    activeTab === 'learning_path' ? 'learning_projects' :
    activeTab === 'career_paths' ? 'career_bridge' :
    activeTab;

  const currentIndex = NAV_STEPS.findIndex(s => s.id === normalizedTab);
  const isProcessTab = currentIndex >= 0;
  const currentStageNumber = currentIndex + 1;
  const totalStages = NAV_STEPS.length;
  const progressPercentage = isProcessTab 
    ? Math.round((currentStageNumber / totalStages) * 100)
    : activeTab === 'employer' ? 100 : 0;

  const prevStep = currentIndex > 0 ? NAV_STEPS[currentIndex - 1] : null;
  const nextStep = currentIndex >= 0 && currentIndex < NAV_STEPS.length - 1 ? NAV_STEPS[currentIndex + 1] : null;

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <button
              id="nav-brand-button"
              onClick={() => setActiveTab('landing')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-stone-900 to-stone-700 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5 text-indigo-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-stone-900 tracking-tight text-base">Workbridge AI</span>
                </div>
                <p className="text-[10px] text-stone-600 hidden sm:block font-serif-heading italic">
                  AI is changing work. Let's change with it.
                </p>
              </div>
            </button>
          </div>

          {/* Center: Stage Orientation Indicator (Active on all screens) */}
          {isProcessTab ? (
            <div 
              id="navbar-stage-pill"
              className="hidden md:flex xl:hidden items-center gap-2 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200/90 text-xs shadow-2xs"
            >
              {/* Radial Progress Meter */}
              <div className="relative w-4 h-4 flex items-center justify-center">
                <svg className="w-4 h-4 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-stone-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-600 transition-all duration-500 ease-out"
                    strokeDasharray={`${progressPercentage}, 100`}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <span className="font-semibold text-stone-900">
                Stage {currentStageNumber}/{totalStages}
              </span>
              <span className="text-stone-300">•</span>
              <span className="font-medium text-indigo-700 truncate max-w-[120px]">
                {NAV_STEPS[currentIndex].label}
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                {progressPercentage}%
              </span>
            </div>
          ) : null}

          {/* Desktop Flow Stepper Indicator (XL & 2XL) */}
          <nav 
            id="nav-desktop-stepper"
            className="hidden xl:flex items-center space-x-0.5 bg-stone-100/90 p-1 rounded-xl border border-stone-200/70"
            aria-label="Career Adaptation Stages"
          >
            {NAV_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = normalizedTab === step.id;
              const isCompleted = isProcessTab && idx < currentIndex;

              return (
                <button
                  key={step.id}
                  id={`nav-tab-${step.id}`}
                  onClick={() => setActiveTab(step.id)}
                  title={`Stage ${step.stageNum}: ${step.label} - ${step.description} ${isCompleted ? '(Completed)' : isActive ? '(Current Stage)' : ''}`}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] transition-all ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-2xs font-bold ring-1 ring-indigo-500/20'
                      : isCompleted
                      ? 'text-stone-700 hover:text-stone-900 hover:bg-white/60 font-medium'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-white/40'
                  }`}
                >
                  {/* Status Indicator Icon */}
                  {isCompleted ? (
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  ) : isActive ? (
                    <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
                      <span className="absolute w-2 h-2 rounded-full bg-indigo-600 animate-ping opacity-75" />
                      <span className="relative w-2 h-2 rounded-full bg-indigo-600" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-stone-400 shrink-0">
                      0{step.stageNum}
                    </span>
                  )}

                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-indigo-600' : isCompleted ? 'text-emerald-600' : 'text-stone-500'}`} />
                  <span className="whitespace-nowrap">{step.shortLabel}</span>

                  {step.badge && (
                    <span className={`text-[8px] px-1 py-0.2 rounded font-semibold ${
                      isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-stone-200 text-stone-600'
                    }`}>
                      {step.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Employer Transition Portal Link */}
            <button
              id="nav-employer-portal-btn"
              onClick={() => setActiveTab('employer')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                activeTab === 'employer'
                  ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>For Employers</span>
            </button>

            {/* Active profile & persona pill */}
            <div className="hidden md:flex items-center gap-1.5 pl-2.5 pr-2 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-700">
              <span className="text-xs">
                {assessment.userPersona === 'student' ? '🎓' : assessment.userPersona === 'professional' ? '💼' : '🔄'}
              </span>
              <span className="font-semibold text-stone-900 max-w-[120px] truncate">
                {assessment.userPersona === 'student' ? (assessment.studentProfile?.degree || 'Student') : assessment.role}
              </span>
              <button
                id="change-role-nav-btn"
                onClick={() => setActiveTab('assessment')}
                className="text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline ml-0.5"
              >
                Profile
              </button>
            </div>

            {/* Quick Next Button */}
            {nextStep && (
              <button
                id="nav-next-step-btn"
                onClick={() => setActiveTab(nextStep.id)}
                className="flex items-center gap-1 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 px-3 py-1.5 rounded-xl transition-colors shadow-2xs"
                title={`Advance to Stage ${nextStep.stageNum}: ${nextStep.label}`}
              >
                <span className="hidden sm:inline">Next Stage</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Visual Adaptation Stage Orientation Sub-strip (Visible when inside the adaptation process) */}
      {isProcessTab && (
        <div 
          id="navbar-adaptation-orientation-strip"
          className="bg-stone-50/95 border-t border-stone-200/60 px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs"
        >
          {/* Left: Current stage orientation label and contextual guidance */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded-md bg-stone-200/80 font-mono font-bold text-stone-700 text-[10px] tracking-wide shrink-0">
              STAGE 0{currentStageNumber}/0{totalStages}
            </span>
            <span className="font-bold text-stone-900 truncate">
              {NAV_STEPS[currentIndex].label}
            </span>
            <span className="text-stone-300 hidden sm:inline">•</span>
            <span className="text-stone-500 text-[11px] hidden md:inline truncate">
              {NAV_STEPS[currentIndex].description}
            </span>
          </div>

          {/* Right: Step Dots Stepper & Quick Prev/Next jumps */}
          <div className="flex items-center gap-2 shrink-0">
            {/* 9-Node Interactive Segmented Track */}
            <div 
              className="hidden sm:flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-stone-200/80 shadow-2xs"
              aria-label="Process Step Track"
            >
              {NAV_STEPS.map((step, idx) => {
                const isStepActive = idx === currentIndex;
                const isStepCompleted = idx < currentIndex;

                return (
                  <button
                    key={step.id}
                    id={`nav-dot-${step.id}`}
                    onClick={() => setActiveTab(step.id)}
                    title={`Stage ${step.stageNum}: ${step.label} (${isStepCompleted ? 'Completed' : isStepActive ? 'Current' : 'Upcoming'})`}
                    className={`group relative flex items-center justify-center transition-all ${
                      isStepActive
                        ? 'w-6 h-4 rounded-full bg-indigo-600 text-white text-[9px] font-bold shadow-2xs'
                        : isStepCompleted
                        ? 'w-4 h-4 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800'
                        : 'w-4 h-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-400'
                    }`}
                  >
                    {isStepActive ? (
                      <span>{step.stageNum}</span>
                    ) : isStepCompleted ? (
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    ) : (
                      <span className="text-[8px] font-mono">{step.stageNum}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Percentage Badge */}
            <div className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100/80">
              {progressPercentage}%
            </div>

            {/* Prev Stage Button */}
            {prevStep && (
              <button
                id="nav-prev-step-btn"
                onClick={() => setActiveTab(prevStep.id)}
                className="text-[11px] font-medium text-stone-600 hover:text-stone-900 flex items-center gap-0.5 px-2 py-0.5 rounded bg-white hover:bg-stone-100 border border-stone-200/70 transition-colors"
                title={`Previous: ${prevStep.label}`}
              >
                <ChevronLeft className="w-3 h-3" />
                <span className="hidden sm:inline">{prevStep.shortLabel}</span>
              </button>
            )}

            {/* Next Stage Button */}
            {nextStep && (
              <button
                id="nav-next-step-strip-btn"
                onClick={() => setActiveTab(nextStep.id)}
                className="text-[11px] font-medium text-indigo-700 hover:text-indigo-900 flex items-center gap-0.5 px-2 py-0.5 rounded bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 transition-colors font-semibold"
                title={`Next: ${nextStep.label}`}
              >
                <span className="hidden sm:inline">{nextStep.shortLabel}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Visual Progress Bar (Anchored along the bottom border of the Navbar) */}
      <div 
        id="navbar-progress-bar-container"
        className="w-full bg-stone-200/70 h-[3px] overflow-hidden relative"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Career adaptation journey progress"
      >
        <div
          id="navbar-progress-bar-fill"
          className="h-full bg-gradient-to-r from-stone-600 via-indigo-600 to-emerald-500 transition-all duration-500 ease-out relative"
          style={{ width: `${progressPercentage}%` }}
        >
          {/* Animated Glow Tip */}
          <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/80 shadow-xs animate-pulse" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-md border-b border-stone-200 px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2">
          {/* Mobile Progress Card */}
          {isProcessTab && (
            <div className="mb-4 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900">Career Adaptation Progress</span>
                <span className="font-mono font-bold text-indigo-700">{progressPercentage}% Complete</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="text-[11px] text-stone-600 flex items-center justify-between">
                <span>Current: <strong>Stage {currentStageNumber}: {NAV_STEPS[currentIndex].label}</strong></span>
                <span className="text-stone-400">{totalStages - currentStageNumber} stages remain</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
            {NAV_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = normalizedTab === step.id;
              const isCompleted = isProcessTab && idx < currentIndex;

              return (
                <button
                  key={step.id}
                  id={`mobile-nav-${step.id}`}
                  onClick={() => {
                    setActiveTab(step.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-900 font-bold border border-indigo-200/80'
                      : isCompleted
                      ? 'bg-stone-50/80 text-stone-800 hover:bg-stone-100 border border-stone-200/60'
                      : 'text-stone-600 hover:bg-stone-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-indigo-600' : isCompleted ? 'text-emerald-600' : 'text-stone-400'}`} />
                    <span className="truncate">{step.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {isCompleted ? (
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    ) : isActive ? (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white text-[9px] font-bold">
                        CURRENT
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-stone-400">0{step.stageNum}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => {
                setActiveTab('employer');
                setMobileMenuOpen(false);
              }}
              className="text-xs font-semibold text-indigo-700 hover:underline flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>For Organizations / Employers</span>
            </button>

            <button
              onClick={() => {
                onReset();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-stone-400 hover:text-stone-700"
            >
              Reset Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


import React, { useState, useMemo } from 'react';
import { AssessmentData, HumanEdgeProfession, ActiveTab } from '../types';
import { HUMAN_EDGE_PROFESSIONS, HUMAN_EDGE_CORE_CATEGORIES } from '../data/humanEdgeData';
import { 
  ShieldCheck, 
  Sparkles, 
  Search, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Eye, 
  Brain, 
  Scale, 
  Compass, 
  Flame, 
  Activity,
  Award,
  ChevronRight,
  Filter,
  Check,
  Share2
} from 'lucide-react';

interface HumanEdgeViewProps {
  assessment: AssessmentData;
  onContinue: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const HumanEdgeView: React.FC<HumanEdgeViewProps> = ({
  assessment,
  onContinue,
  onNavigateTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  
  // Find profession matching user role if possible, else default to Software Developer or first item
  const initialProfession = useMemo(() => {
    const matched = HUMAN_EDGE_PROFESSIONS.find(p => 
      p.id.toLowerCase().includes(assessment.roleId.toLowerCase()) ||
      p.title.toLowerCase().includes(assessment.role.toLowerCase())
    );
    return matched || HUMAN_EDGE_PROFESSIONS[0];
  }, [assessment.roleId, assessment.role]);

  const [activeProfessionId, setActiveProfessionId] = useState<string>(initialProfession.id);
  const [activeTaskTab, setActiveTaskTab] = useState<'all' | 'ai_ready' | 'ai_human' | 'human_critical'>('all');
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<'task' | 'ai' | 'human' | 'result'>('result');

  // Filtered professions list based on search and industry/category filter
  const filteredProfessions = useMemo(() => {
    return HUMAN_EDGE_PROFESSIONS.filter(p => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.humanEdgeSkills.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategoryFilter === 'All' || 
        p.categoryBadge.toLowerCase() === selectedCategoryFilter.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategoryFilter]);

  const currentProfession = useMemo(() => {
    return HUMAN_EDGE_PROFESSIONS.find(p => p.id === activeProfessionId) || filteredProfessions[0] || HUMAN_EDGE_PROFESSIONS[0];
  }, [activeProfessionId, filteredProfessions]);

  const allCategories = ['All', 'Engineering', 'Education', 'Healthcare', 'Design', 'Finance', 'Support', 'Social Services', 'Legal', 'Management'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* 1. Hero / Header with Featured Philosophy */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-900 text-xs font-semibold shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
          <span>The Human-In-The-Loop Frontier</span>
        </div>
        
        {/* Core Tagline / Philosophy */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
          "AI can handle information.<br className="hidden sm:inline" /> Humans handle judgment."
        </h1>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          No profession is automated as a monolith. Work is a collection of tasks. 
          Discover where generative AI provides massive mechanical leverage—and where human empathy, 
          ethical courage, accountability, and physical presence remain strictly irreplaceable.
        </p>
      </div>

      {/* 2. Connected Career Bridge Alignment Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 pb-2 border-b border-stone-100">
          <span className="font-semibold text-stone-700 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Career Bridge Trajectory Position</span>
          </span>
          <span>Position 03 of 06: Defining Your Competitive Edge</span>
        </div>

        {/* 6-Node Visual Flow: CURRENT ROLE → AI IMPACT → HUMAN EDGE → SKILL GAP → LEARNING PATH → FUTURE ROLE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            { label: 'CURRENT ROLE', step: '01', status: assessment.role, tab: 'assessment', current: false },
            { label: 'AI IMPACT', step: '02', status: 'Audited', tab: 'ai_impact', current: false },
            { label: 'HUMAN EDGE', step: '03', status: 'Active Focus', tab: 'human_edge', current: true },
            { label: 'SKILL GAP', step: '04', status: 'Next Step', tab: 'skill_gap', current: false },
            { label: 'LEARNING PATH', step: '05', status: '8 Weeks', tab: 'learning_path', current: false },
            { label: 'FUTURE ROLE', step: '06', status: assessment.targetRoleTitle || 'Specialist', tab: 'career_paths', current: false },
          ].map((node) => (
            <button
              key={node.step}
              onClick={() => onNavigateTab(node.tab as ActiveTab)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                node.current
                  ? 'bg-purple-50/80 border-purple-400 ring-2 ring-purple-500/20 shadow-xs'
                  : 'bg-white/70 hover:bg-white border-stone-200/80 text-stone-600'
              }`}
            >
              <div className="text-[9px] font-mono font-bold text-stone-400">{node.step}</div>
              <div className={`text-[11px] font-bold tracking-wider truncate ${node.current ? 'text-purple-950' : 'text-stone-800'}`}>
                {node.label}
              </div>
              <div className="text-[10px] text-stone-500 truncate mt-0.5">{node.status}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Three Core Categories Framework */}
      <div className="space-y-4">
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-stone-900">The Tri-Task Decomposition Framework</h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Every profession is analyzed across three distinct task operational bands:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HUMAN_EDGE_CORE_CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="glass-card rounded-2xl p-5 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">{cat.subtitle}</span>
                </div>
                
                <h3 className="text-base font-bold text-stone-900 tracking-tight">
                  {cat.title}
                </h3>
                
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block mb-1.5">
                    Archetypal Examples:
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {cat.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-stone-400">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-50/90 border border-stone-200/60 text-[11px] text-stone-700">
                <strong className="text-stone-900 font-semibold block mb-0.5">Human Operator Mandate:</strong>
                {cat.humanRole}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Searchable Job Explorer */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Interactive Job Explorer
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Explore how AI capability and the Human Edge interact across 10 distinct professions.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="job-explorer-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, task, or skill..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl text-xs bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-stone-900 shadow-2xs"
            />
          </div>
        </div>

        {/* Industry Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {allCategories.map((cat) => (
            <button
              key={cat}
              id={`category-filter-${cat}`}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategoryFilter === cat
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Profession Switcher Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {filteredProfessions.map((prof) => {
            const isSelected = prof.id === currentProfession.id;
            return (
              <button
                key={prof.id}
                id={`select-profession-${prof.id}`}
                onClick={() => setActiveProfessionId(prof.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-white border-purple-500 shadow-xs ring-2 ring-purple-500/20'
                    : 'bg-white/80 hover:bg-white border-stone-200/90 text-stone-700 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                    {prof.categoryBadge}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-purple-600" />}
                </div>
                <div className="text-xs font-bold text-stone-900 truncate mt-1">
                  {prof.title}
                </div>
                <div className="text-[10px] text-stone-500 truncate mt-0.5">
                  {prof.taskDistribution.humanCritical}% Human-Critical
                </div>
              </button>
            );
          })}
        </div>

        {filteredProfessions.length === 0 && (
          <div className="text-center py-8 text-xs text-stone-500 glass-card rounded-2xl border border-stone-200">
            No professions found matching "{searchQuery}". Try searching for "software", "healthcare", or "empathy".
          </div>
        )}

        {/* 5. Deep Profession Inspection Canvas */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-8">
          {/* Header of Active Profession */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {currentProfession.industry}
                </span>
                <span className="text-xs text-stone-300">•</span>
                <span className="text-xs font-medium text-stone-500">Task Collection Analysis</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mt-1">
                {currentProfession.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
                {currentProfession.summary}
              </p>
            </div>

            {/* AI Capability Distribution Meter */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs min-w-[280px] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700">Task Allocation Mix</span>
                <span className="font-mono text-purple-700 font-bold">100% Audited</span>
              </div>

              {/* Segmented Progress Bar */}
              <div className="h-3 w-full rounded-full bg-stone-100 overflow-hidden flex shadow-inner">
                <div 
                  style={{ width: `${currentProfession.taskDistribution.aiReady}%` }}
                  title={`AI-Ready: ${currentProfession.taskDistribution.aiReady}%`}
                  className="bg-emerald-500 h-full"
                />
                <div 
                  style={{ width: `${currentProfession.taskDistribution.aiHuman}%` }}
                  title={`AI+Human: ${currentProfession.taskDistribution.aiHuman}%`}
                  className="bg-indigo-500 h-full"
                />
                <div 
                  style={{ width: `${currentProfession.taskDistribution.humanCritical}%` }}
                  title={`Human-Critical: ${currentProfession.taskDistribution.humanCritical}%`}
                  className="bg-purple-600 h-full"
                />
              </div>

              {/* Legend */}
              <div className="flex justify-between text-[10px] pt-1">
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {currentProfession.taskDistribution.aiReady}% AI-Ready
                </span>
                <span className="flex items-center gap-1 text-indigo-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {currentProfession.taskDistribution.aiHuman}% AI+Human
                </span>
                <span className="flex items-center gap-1 text-purple-900 font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  {currentProfession.taskDistribution.humanCritical}% Human-Critical
                </span>
              </div>
            </div>
          </div>

          {/* AI Capability Overview Statement */}
          <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 text-xs text-stone-700 leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 font-semibold">AI Capability Assessment: </strong>
              <span>{currentProfession.aiCapabilityOverview}</span>
            </div>
          </div>

          {/* Task Breakdown: AI-READY, AI-ASSISTED, HUMAN-CRITICAL */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider text-xs">
                Task Breakdown for {currentProfession.title}
              </h4>

              {/* Category Filter Selector */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs">
                {[
                  { id: 'all', label: 'All Tasks' },
                  { id: 'ai_ready', label: 'AI-Ready' },
                  { id: 'ai_human', label: 'AI + Human' },
                  { id: 'human_critical', label: 'Human-Critical' }
                ].map((tb) => (
                  <button
                    key={tb.id}
                    onClick={() => setActiveTaskTab(tb.id as any)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      activeTaskTab === tb.id
                        ? 'bg-white text-stone-900 shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Task Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: AI-READY TASKS */}
              {(activeTaskTab === 'all' || activeTaskTab === 'ai_ready') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800 pb-1 border-b border-emerald-200">
                    <span>1. AI-READY TASKS</span>
                    <span className="text-[10px] font-normal bg-emerald-50 px-2 py-0.5 rounded">Automate & Scaffolding</span>
                  </div>

                  {currentProfession.aiReadyTasks.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-stone-900 leading-snug">{t.title}</span>
                        {t.timeSaved && (
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 shrink-0">
                            {t.timeSaved}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">{t.description}</p>
                      {t.whyAIExcels && (
                        <div className="pt-2 border-t border-stone-100 text-[10px] text-emerald-900">
                          <strong>Why AI Excels:</strong> {t.whyAIExcels}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Column 2: AI-ASSISTED TASKS */}
              {(activeTaskTab === 'all' || activeTaskTab === 'ai_human') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-800 pb-1 border-b border-indigo-200">
                    <span>2. AI + HUMAN TASKS</span>
                    <span className="text-[10px] font-normal bg-indigo-50 px-2 py-0.5 rounded">Augmented Collaboration</span>
                  </div>

                  {currentProfession.aiAssistedTasks.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-indigo-200/80 shadow-2xs space-y-2">
                      <span className="text-xs font-bold text-stone-900 leading-snug block">{t.title}</span>
                      <p className="text-[11px] text-stone-600 leading-relaxed">{t.description}</p>
                      <div className="pt-2 border-t border-stone-100 space-y-1 text-[10px]">
                        <div className="text-indigo-900">
                          <strong>AI Role:</strong> {t.aiContribution}
                        </div>
                        <div className="text-stone-800">
                          <strong>Human Judgment:</strong> {t.humanJudgmentNeeded}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Column 3: HUMAN-CRITICAL TASKS */}
              {(activeTaskTab === 'all' || activeTaskTab === 'human_critical') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-purple-900 pb-1 border-b border-purple-200">
                    <span>3. HUMAN-CRITICAL TASKS</span>
                    <span className="text-[10px] font-normal bg-purple-50 px-2 py-0.5 rounded">The Irreplaceable Edge</span>
                  </div>

                  {currentProfession.humanCriticalTasks.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-purple-50/40 border border-purple-200/80 shadow-2xs space-y-2">
                      <span className="text-xs font-bold text-purple-950 leading-snug block">{t.title}</span>
                      <p className="text-[11px] text-stone-600 leading-relaxed">{t.description}</p>
                      <div className="pt-2 border-t border-purple-100 space-y-1 text-[10px]">
                        <div className="text-purple-900">
                          <strong>Why Human Essential:</strong> {t.whyHumanEssential}
                        </div>
                        {t.humanValue && (
                          <div className="text-emerald-900 font-medium">
                            <strong>Human Value Delivered:</strong> {t.humanValue}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Human Edge Skills Pill Matrix */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Human Edge Skills for {currentProfession.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentProfession.humanEdgeSkills.map((sk, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">{sk.name}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                      {sk.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed pt-1">
                    {sk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Interactive Real-World Workflow Scenario */}
          {/* TASK → AI CONTRIBUTION → HUMAN CONTRIBUTION → FINAL RESULT */}
          <div className="p-6 sm:p-8 rounded-2xl bg-indigo-50/40 border border-indigo-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-indigo-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">
                  INTERACTIVE WORKFLOW CASE STUDY
                </span>
                <h4 className="text-lg font-bold text-stone-900 mt-0.5">
                  AI + Human Collaboration in Action
                </h4>
              </div>

              <div className="text-xs text-indigo-900 font-medium bg-white/80 px-3 py-1.5 rounded-xl border border-indigo-100">
                Profession: <strong>{currentProfession.title}</strong>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { id: 'task', label: '1. TASK', icon: Compass },
                { id: 'ai', label: '2. AI CONTRIBUTION', icon: Sparkles },
                { id: 'human', label: '3. HUMAN CONTRIBUTION', icon: ShieldCheck },
                { id: 'result', label: '4. FINAL RESULT', icon: CheckCircle2 },
              ].map((step) => {
                const Icon = step.icon;
                const isSelected = activeWorkflowStage === step.id;
                return (
                  <button
                    key={step.id}
                    id={`workflow-stage-${step.id}`}
                    onClick={() => setActiveWorkflowStage(step.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-white border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs text-stone-900'
                        : 'bg-white/60 hover:bg-white border-stone-200/80 text-stone-600'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-600' : 'text-stone-400'}`} />
                    <span className="text-xs font-bold tracking-wider truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Stage Card */}
            <div className="p-5 rounded-2xl bg-white border border-indigo-100 shadow-2xs space-y-4">
              {activeWorkflowStage === 'task' && (
                <div className="space-y-2 animate-in fade-in">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Step 1: The Objective & Context</span>
                  <div className="text-sm font-bold text-stone-900">{currentProfession.workflowScenario.task}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Operational Context:</strong> {currentProfession.workflowScenario.context}
                  </p>
                </div>
              )}

              {activeWorkflowStage === 'ai' && (
                <div className="space-y-2 animate-in fade-in">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Step 2: What AI Generates Rapidly</span>
                  <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs text-stone-800 leading-relaxed font-mono">
                    {currentProfession.workflowScenario.aiContribution}
                  </div>
                  <p className="text-[11px] text-stone-500">
                    High speed, massive syntactical completion, but unaware of unstated edge cases or human politics.
                  </p>
                </div>
              )}

              {activeWorkflowStage === 'human' && (
                <div className="space-y-2 animate-in fade-in">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">Step 3: The Human Verification & Injection Layer</span>
                  <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-200/80 text-xs text-purple-950 leading-relaxed">
                    {currentProfession.workflowScenario.humanContribution}
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Where lived experience, physical inspection, skepticism, or empathy corrects and elevates the output.
                  </p>
                </div>
              )}

              {activeWorkflowStage === 'result' && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Step 4: The Elevated Artifact</span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">High Craft Delivered</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-900 text-stone-100 text-xs leading-relaxed font-mono">
                    {currentProfession.workflowScenario.finalResult}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>The Indispensable Human Value:</strong> {currentProfession.workflowScenario.humanValueSummary}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
              <span>Inspect how each phase interacts in the real world</span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const sequence: ('task' | 'ai' | 'human' | 'result')[] = ['task', 'ai', 'human', 'result'];
                    const currentIdx = sequence.indexOf(activeWorkflowStage);
                    setActiveWorkflowStage(sequence[(currentIdx + 1) % sequence.length]);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <button
          onClick={() => onNavigateTab('ai_impact')}
          className="text-xs font-medium text-stone-600 hover:text-stone-900"
        >
          ← Back to AI Impact Analysis
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('career_bridge')}
            className="px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-50"
          >
            View Career Bridge
          </button>
          <button
            onClick={onContinue}
            id="human-edge-continue-to-gap-btn"
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>Proceed to Skill Gap Matrix</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

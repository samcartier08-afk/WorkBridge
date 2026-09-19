import React, { useState } from 'react';
import { AssessmentData, AIImpactBreakdown } from '../types';
import { AI_IMPACT_BY_ROLE } from '../data/aiImpactData';
import { 
  Bot, 
  Sparkles, 
  HeartHandshake, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Info,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AIImpactViewProps {
  assessment: AssessmentData;
  onContinue: () => void;
}

export const AIImpactView: React.FC<AIImpactViewProps> = ({
  assessment,
  onContinue
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'automated' | 'augmented' | 'human'>('all');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  const impactData: AIImpactBreakdown = AI_IMPACT_BY_ROLE[assessment.roleId] || AI_IMPACT_BY_ROLE.custom;

  const toggleExpand = (id: string) => {
    setExpandedTaskId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Step 2: Workplace Workload Categorization</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          AI Impact Breakdown for <span className="underline decoration-indigo-300 underline-offset-4">{assessment.role}</span>
        </h1>
        <p className="text-sm text-stone-600 mt-1.5 max-w-2xl">
          We categorize your domain activities into three distinct zones: tasks to delegate to automation, tasks where AI acts as your intellectual copilot, and high-stakes human differentiators.
        </p>
      </div>

      {/* Visual Tri-Bar Distribution */}
      <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wider text-xs">
            Workload Distribution Ratio
          </h2>
          <span className="text-xs text-stone-500">Based on industry analysis for {assessment.industry}</span>
        </div>

        {/* Unified Progress Bar */}
        <div className="h-5 w-full bg-stone-100 rounded-full overflow-hidden flex p-0.5 border border-stone-200/80 shadow-inner">
          <div 
            style={{ width: `${impactData.automated.percentage}%` }}
            className="bg-amber-400/90 h-full rounded-l-full transition-all duration-500 relative group"
            title={`Automate: ${impactData.automated.percentage}%`}
          />
          <div 
            style={{ width: `${impactData.augmented.percentage}%` }}
            className="bg-indigo-500/90 h-full transition-all duration-500 relative group"
            title={`Augment: ${impactData.augmented.percentage}%`}
          />
          <div 
            style={{ width: `${impactData.human.percentage}%` }}
            className="bg-emerald-500/90 h-full rounded-r-full transition-all duration-500 relative group"
            title={`Human: ${impactData.human.percentage}%`}
          />
        </div>

        {/* Legend / Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => setSelectedCategory(selectedCategory === 'automated' ? 'all' : 'automated')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCategory === 'automated' 
                ? 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-200' 
                : 'bg-white hover:bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                AUTOMATE
              </span>
              <span className="text-lg font-bold text-stone-900">{impactData.automated.percentage}%</span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Repetitive syntax, boilerplate, and routine administration.
            </p>
          </button>

          <button
            onClick={() => setSelectedCategory(selectedCategory === 'augmented' ? 'all' : 'augmented')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCategory === 'augmented' 
                ? 'bg-indigo-50/80 border-indigo-300 ring-1 ring-indigo-200' 
                : 'bg-white hover:bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-800">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                AUGMENT
              </span>
              <span className="text-lg font-bold text-stone-900">{impactData.augmented.percentage}%</span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Tasks accelerated 3-10x with AI copilot assistance.
            </p>
          </button>

          <button
            onClick={() => setSelectedCategory(selectedCategory === 'human' ? 'all' : 'human')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCategory === 'human' 
                ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-200' 
                : 'bg-white hover:bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                HUMAN
              </span>
              <span className="text-lg font-bold text-stone-900">{impactData.human.percentage}%</span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Irreplaceable judgment, empathy, ethics & architecture.
            </p>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-stone-500">Filter view:</span>
          {(['all', 'automated', 'augmented', 'human'] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-cat-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
              }`}
            >
              {cat === 'all' ? 'All Tasks' : cat}
            </button>
          ))}
        </div>
        <span className="text-xs text-stone-400">Click any card to inspect elevator strategy</span>
      </div>

      {/* Task List Breakdown */}
      <div className="space-y-4">
        {/* AUTOMATE Section */}
        {(selectedCategory === 'all' || selectedCategory === 'automated') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              <Bot className="w-4 h-4 text-amber-600" />
              <span>Automate Tasks — Commoditized Execution</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {impactData.automated.tasks.map(task => {
                const isExpanded = expandedTaskId === task.id;
                return (
                  <div
                    key={task.id}
                    className="glass-card rounded-xl border border-stone-200/90 p-4 transition-all hover:border-amber-300"
                  >
                    <div 
                      onClick={() => toggleExpand(task.id)}
                      className="cursor-pointer flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-stone-900">{task.taskName}</h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            High Automation Speedup
                          </span>
                        </div>
                        <p className="text-xs text-stone-600">{task.description}</p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right hidden sm:block">
                          <div className="text-xs font-mono font-semibold text-stone-700">{task.timeSpentBefore} → {task.timeSpentWithAI}</div>
                          <div className="text-[10px] text-emerald-600 font-medium">Saved: ~85% time</div>
                        </div>
                        <button className="text-stone-400 hover:text-stone-700 p-1">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-stone-100 space-y-2.5 text-xs animate-in fade-in">
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/60">
                          <strong className="text-stone-800 font-semibold">Why it is automated: </strong>
                          <span className="text-stone-600">{task.reason}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-200/60 text-indigo-950">
                          <strong className="text-indigo-900 font-semibold">Human Elevator Strategy: </strong>
                          <span>{task.humanElevatorStrategy}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* AUGMENT Section */}
        {(selectedCategory === 'all' || selectedCategory === 'augmented') && (
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-800 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Augment Tasks — Human Direction + AI Multiplier</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {impactData.augmented.tasks.map(task => {
                const isExpanded = expandedTaskId === task.id;
                return (
                  <div
                    key={task.id}
                    className="glass-card rounded-xl border border-stone-200/90 p-4 transition-all hover:border-indigo-300"
                  >
                    <div 
                      onClick={() => toggleExpand(task.id)}
                      className="cursor-pointer flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-stone-900">{task.taskName}</h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                            3x–5x Leverage Multiplier
                          </span>
                        </div>
                        <p className="text-xs text-stone-600">{task.description}</p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right hidden sm:block">
                          <div className="text-xs font-mono font-semibold text-stone-700">{task.timeSpentBefore} → {task.timeSpentWithAI}</div>
                          <div className="text-[10px] text-indigo-600 font-medium">Focus Shifts to Quality</div>
                        </div>
                        <button className="text-stone-400 hover:text-stone-700 p-1">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-stone-100 space-y-2.5 text-xs animate-in fade-in">
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/60">
                          <strong className="text-stone-800 font-semibold">How AI Augments: </strong>
                          <span className="text-stone-600">{task.reason}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-200/60 text-indigo-950">
                          <strong className="text-indigo-900 font-semibold">Human Elevator Strategy: </strong>
                          <span>{task.humanElevatorStrategy}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* HUMAN Section */}
        {(selectedCategory === 'all' || selectedCategory === 'human') && (
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>Human Core — Judgment, Empathy & Ethical Architecture</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {impactData.human.tasks.map(task => {
                const isExpanded = expandedTaskId === task.id;
                return (
                  <div
                    key={task.id}
                    className="glass-card rounded-xl border border-stone-200/90 p-4 transition-all hover:border-emerald-300"
                  >
                    <div 
                      onClick={() => toggleExpand(task.id)}
                      className="cursor-pointer flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-stone-900">{task.taskName}</h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            Highest Market Value
                          </span>
                        </div>
                        <p className="text-xs text-stone-600">{task.description}</p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right hidden sm:block">
                          <div className="text-xs font-mono font-semibold text-emerald-700">{task.timeSpentWithAI}</div>
                          <div className="text-[10px] text-emerald-600 font-medium">Expanding Focus</div>
                        </div>
                        <button className="text-stone-400 hover:text-stone-700 p-1">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-stone-100 space-y-2.5 text-xs animate-in fade-in">
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/60">
                          <strong className="text-stone-800 font-semibold">Why AI Cannot Replace This: </strong>
                          <span className="text-stone-600">{task.reason}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-emerald-950">
                          <strong className="text-emerald-900 font-semibold">Leadership Opportunity: </strong>
                          <span>{task.humanElevatorStrategy}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <div className="text-xs text-stone-500 text-center sm:text-left">
          Next: Discover AI-Ready vs AI+Human vs Human-Critical boundaries in the Human Edge module.
        </div>
        <button
          onClick={onContinue}
          id="impact-continue-to-human-edge-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Explore Human Edge</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { AssessmentData, WeeklyRoadmapItem } from '../types';
import { EIGHT_WEEK_ROADMAP } from '../data/learningRoadmapData';
import { loadCompletedWeeks, saveCompletedWeeks } from '../utils/storage';
import { 
  BookOpen, 
  CheckCircle2, 
  CircleDashed, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCode,
  Layers,
  Award
} from 'lucide-react';

interface LearningPathViewProps {
  assessment: AssessmentData;
  onContinue: () => void;
}

export const LearningPathView: React.FC<LearningPathViewProps> = ({
  assessment,
  onContinue
}) => {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>(() => loadCompletedWeeks());
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [filterPhase, setFilterPhase] = useState<'all' | 'foundations' | 'advanced' | 'capstone'>('all');

  const toggleWeekCompleted = (weekNum: number) => {
    setCompletedWeeks(prev => {
      const updated = prev.includes(weekNum)
        ? prev.filter(w => w !== weekNum)
        : [...prev, weekNum].sort((a, b) => a - b);
      saveCompletedWeeks(updated);
      return updated;
    });
  };

  const progressPercent = Math.round((completedWeeks.length / 8) * 100);

  const activeWeekData = EIGHT_WEEK_ROADMAP.find(w => w.week === selectedWeek) || EIGHT_WEEK_ROADMAP[0];

  const filteredRoadmap = EIGHT_WEEK_ROADMAP.filter(w => {
    if (filterPhase === 'all') return true;
    if (filterPhase === 'foundations') return w.week <= 3;
    if (filterPhase === 'advanced') return w.week >= 4 && w.week <= 6;
    if (filterPhase === 'capstone') return w.week >= 7;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-purple-700 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Step 4: 8-Week Applied Adaptation Sprint</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          8-Week Learning Roadmap for <span className="underline decoration-indigo-300 underline-offset-4">{assessment.role}</span>
        </h1>
        <p className="text-sm text-stone-600 mt-1.5 max-w-2xl">
          From AI fundamentals and role-specific copilots to context grounding, automation, human review craft, and an applied portfolio capstone.
        </p>
      </div>

      {/* Progress Dashboard Banner */}
      <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Adaptation Journey Completion</div>
            <div className="text-xl font-bold text-stone-900 mt-0.5">
              {completedWeeks.length} of 8 Weeks Completed ({progressPercent}%)
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 font-medium">
              Target: {assessment.learningTime} hrs/week
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-medium">
              Sprint Duration: 2 Months
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden mt-4 p-0.5 border border-stone-200/60 shadow-inner">
          <div 
            style={{ width: `${progressPercent}%` }}
            className="bg-purple-600 h-full rounded-full transition-all duration-500"
          />
        </div>

        {/* Week Pills Bar */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-4">
          {EIGHT_WEEK_ROADMAP.map(w => {
            const isDone = completedWeeks.includes(w.week);
            const isCurrent = selectedWeek === w.week;
            return (
              <button
                key={w.week}
                id={`week-selector-${w.week}`}
                onClick={() => setSelectedWeek(w.week)}
                className={`py-2 px-1 rounded-xl text-center border transition-all text-xs font-semibold ${
                  isCurrent
                    ? 'ring-2 ring-purple-500/30 border-purple-500 bg-purple-50/70 text-purple-900'
                    : isDone
                    ? 'border-emerald-200 bg-emerald-50/50 text-emerald-800'
                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                }`}
              >
                <div className="text-[10px] font-mono text-stone-400">WK 0{w.week}</div>
                <div className="truncate text-[11px] mt-0.5 font-medium">
                  {isDone ? '✓ Done' : 'Pending'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Week Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Week Master Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 font-mono">
                    WEEK {activeWeekData.week} OF 8
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-medium">
                    {activeWeekData.theme}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  {activeWeekData.title}
                </h2>
              </div>

              {/* Mark Complete Checkbox Button */}
              <button
                id={`mark-week-${activeWeekData.week}-btn`}
                onClick={() => toggleWeekCompleted(activeWeekData.week)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  completedWeeks.includes(activeWeekData.week)
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedWeeks.includes(activeWeekData.week) ? 'Completed (Undo)' : 'Mark Week Complete'}
                </span>
              </button>
            </div>

            {/* Objective */}
            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                Learning Objective
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {activeWeekData.objective}
              </p>
            </div>

            {/* Topics Covered */}
            <div>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                Core Topics & Mental Models
              </h3>
              <ul className="space-y-2 text-xs text-stone-700">
                {activeWeekData.topics.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-50/70 border border-stone-200/50">
                    <span className="font-mono text-purple-600 font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hands-On Micro-Assignment */}
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    Applied Micro-Assignment
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                  Portfolio Deliverable
                </span>
              </div>

              <h4 className="text-sm font-bold text-stone-900">
                {activeWeekData.microAssignment.title}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                {activeWeekData.microAssignment.instructions}
              </p>

              <div className="pt-2 border-t border-indigo-100 text-xs text-indigo-950 flex items-start gap-1.5">
                <strong className="shrink-0">Deliverable:</strong>
                <span className="font-medium text-stone-800">{activeWeekData.microAssignment.deliverable}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Weekly Tools & Curated Resources */}
        <div className="space-y-6">
          {/* Tool Stack */}
          <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-4">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Recommended Tool Stack for Week {activeWeekData.week}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeWeekData.tools.map(tool => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-xl bg-white border border-stone-200 text-stone-800 text-xs font-medium shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              We focus exclusively on accessible, industry-standard tooling with free developer tiers.
            </p>
          </div>

          {/* Curated Resources */}
          <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs space-y-4">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-600" />
              <span>Curated Guides & Readings</span>
            </h3>
            <div className="space-y-2">
              {activeWeekData.resources.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-stone-200/80 hover:border-purple-300 transition-colors flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-stone-800">{res.name}</div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">{res.type}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Week Navigation */}
          <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 space-y-2">
            <div className="font-semibold text-stone-800">Explore Adjacent Weeks:</div>
            <div className="flex gap-2">
              <button
                disabled={activeWeekData.week <= 1}
                onClick={() => setSelectedWeek(prev => Math.max(1, prev - 1))}
                className="flex-1 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 disabled:opacity-40 text-xs font-medium hover:bg-stone-50"
              >
                ← Week {Math.max(1, activeWeekData.week - 1)}
              </button>
              <button
                disabled={activeWeekData.week >= 8}
                onClick={() => setSelectedWeek(prev => Math.min(8, prev + 1))}
                className="flex-1 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 disabled:opacity-40 text-xs font-medium hover:bg-stone-50"
              >
                Week {Math.min(8, activeWeekData.week + 1)} →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <div className="text-xs text-stone-500 text-center sm:text-left">
          Next: Test the collaborative review loop in the AI+Human Workspace.
        </div>
        <button
          onClick={onContinue}
          id="learning-continue-to-workspace-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Open AI+Human Workspace</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

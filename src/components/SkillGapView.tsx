import React, { useState, useEffect } from 'react';
import { AssessmentData, SkillItem } from '../types';
import { SKILL_GAP_BY_ROLE } from '../data/skillGapData';
import { loadSavedSkills, saveCustomSkills } from '../utils/storage';
import { 
  CheckCircle2, 
  CircleDashed, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Target,
  Filter,
  Check
} from 'lucide-react';

interface SkillGapViewProps {
  assessment: AssessmentData;
  onContinue: () => void;
  onNavigateToWeek?: (weekNumber: number) => void;
}

export const SkillGapView: React.FC<SkillGapViewProps> = ({
  assessment,
  onContinue,
  onNavigateToWeek
}) => {
  const initialSkills = SKILL_GAP_BY_ROLE[assessment.roleId] || SKILL_GAP_BY_ROLE.custom;

  // Local state for skills with persistence
  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = loadSavedSkills();
    if (saved) {
      return initialSkills.map(s => ({
        ...s,
        isCurrent: saved.acquired.includes(s.id) || s.isCurrent
      }));
    }
    return initialSkills;
  });

  const [categoryFilter, setCategoryFilter] = useState<'all' | 'ai_tooling' | 'human_edge' | 'domain_mastery'>('all');

  const toggleSkillAcquired = (skillId: string) => {
    setSkills(prev => {
      const updated = prev.map(s => {
        if (s.id === skillId) {
          return { ...s, isCurrent: !s.isCurrent };
        }
        return s;
      });

      // Save to local storage
      const acquired = updated.filter(s => s.isCurrent).map(s => s.id);
      const target = updated.filter(s => s.isTarget).map(s => s.id);
      saveCustomSkills({ acquired, target });

      return updated;
    });
  };

  const acquiredCount = skills.filter(s => s.isCurrent).length;
  const totalCount = skills.length;
  const matchPercentage = Math.round((acquiredCount / totalCount) * 100);

  const filteredSkills = skills.filter(s => {
    if (categoryFilter === 'all') return true;
    return s.category === categoryFilter;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold mb-2">
          <Target className="w-3.5 h-3.5" />
          <span>Step 3: Competency Delta Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          Skill Gap: Current Baseline vs. <span className="underline decoration-indigo-300 underline-offset-4">{assessment.targetRoleTitle || 'AI-Enabled Target Role'}</span>
        </h1>
        <p className="text-sm text-stone-600 mt-1.5 max-w-2xl">
          To transition from routine task execution to high-leverage AI orchestration, close the delta across modern AI tooling, human taste, and domain mastery.
        </p>
      </div>

      {/* Target Role Match Meter */}
      <div className="glass-card rounded-2xl p-6 border border-stone-200/90 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Target Capability Readiness</div>
            <div className="text-xl font-bold text-stone-900 mt-0.5">
              {matchPercentage}% Ready for {assessment.targetRoleTitle || 'AI-Augmented Role'}
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 font-medium text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {acquiredCount} In Toolbox
            </span>
            <span className="flex items-center gap-1.5 font-medium text-indigo-700">
              <CircleDashed className="w-4 h-4 text-indigo-500" />
              {totalCount - acquiredCount} Emerging Gaps
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-100 h-3.5 rounded-full overflow-hidden mt-4 p-0.5 border border-stone-200/60 shadow-inner">
          <div 
            style={{ width: `${matchPercentage}%` }}
            className="bg-indigo-600 h-full rounded-full transition-all duration-500"
          />
        </div>
        <div className="flex justify-between text-[11px] text-stone-600 mt-2">
          <span>Current Baseline: {assessment.role}</span>
          <span>Target: High-Leverage AI Specialist</span>
        </div>
      </div>

      {/* Filter and Category Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-stone-500">Pillar:</span>
          {[
            { id: 'all', label: 'All Pillars' },
            { id: 'ai_tooling', label: 'AI & Tooling' },
            { id: 'human_edge', label: 'Human Edge' },
            { id: 'domain_mastery', label: 'Domain Depth' }
          ].map(p => (
            <button
              key={p.id}
              id={`filter-pill-${p.id}`}
              onClick={() => setCategoryFilter(p.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                categoryFilter === p.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-stone-400">
          Tip: Click any skill to toggle mastered vs. in-progress
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map(skill => {
          const isAcquired = skill.isCurrent;
          return (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              onClick={() => toggleSkillAcquired(skill.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all relative ${
                isAcquired
                  ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                  : 'bg-white hover:bg-stone-50/80 border-stone-200/90 shadow-2xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isAcquired ? 'bg-emerald-500 text-white' : 'border border-stone-300 text-transparent'
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                    skill.category === 'ai_tooling'
                      ? 'bg-indigo-50 text-indigo-700'
                      : skill.category === 'human_edge'
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-amber-50 text-amber-800'
                  }`}>
                    {skill.category === 'ai_tooling' ? 'AI Tooling' : skill.category === 'human_edge' ? 'Human Edge' : 'Domain Depth'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    skill.priority === 'high' 
                      ? 'bg-rose-50 text-rose-700 border border-rose-200/70' 
                      : skill.priority === 'medium'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200/70'
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {skill.priority.toUpperCase()} PRIORITY
                  </span>
                  {skill.recommendedWeek && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                      Wk {skill.recommendedWeek}
                    </span>
                  )}
                </div>
              </div>

              <h3 className={`text-sm font-semibold mt-2 ${isAcquired ? 'text-emerald-950' : 'text-stone-900'}`}>
                {skill.name}
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {skill.description}
              </p>

              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <span className={isAcquired ? 'text-emerald-700 font-medium' : 'text-stone-600'}>
                  {isAcquired ? '✓ Verified in Your Toolbox' : '○ Identified Growth Opportunity'}
                </span>
                <span className="text-indigo-600 font-medium hover:underline">
                  Toggle status
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <div className="text-xs text-stone-500 text-center sm:text-left">
          Skills are mapped into the core visual Career Bridge and 8-week roadmap.
        </div>
        <button
          onClick={onContinue}
          id="skill-gap-continue-to-bridge-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Explore Career Bridge Visual</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

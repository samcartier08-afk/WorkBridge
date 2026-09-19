import React, { useState } from 'react';
import { AssessmentData, CareerPathTransition } from '../types';
import { CAREER_TRANSITIONS_BY_ROLE } from '../data/careerTransitions';
import { loadTargetPath, saveTargetPath } from '../utils/storage';
import { 
  GitFork, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Star,
  Layers,
  Award,
  Check
} from 'lucide-react';

interface CareerPathsViewProps {
  assessment: AssessmentData;
  onSetTargetRole: (newTargetTitle: string) => void;
  onContinue: () => void;
}

export const CareerPathsView: React.FC<CareerPathsViewProps> = ({
  assessment,
  onSetTargetRole,
  onContinue
}) => {
  const transitions: CareerPathTransition[] = CAREER_TRANSITIONS_BY_ROLE[assessment.roleId] || CAREER_TRANSITIONS_BY_ROLE.custom;

  const [selectedTargetId, setSelectedTargetId] = useState<string>(() => {
    return loadTargetPath() || transitions[0]?.id || '';
  });

  const handleSelectPath = (path: CareerPathTransition) => {
    setSelectedTargetId(path.id);
    saveTargetPath(path.id);
    onSetTargetRole(path.title);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold mb-2">
          <GitFork className="w-3.5 h-3.5" />
          <span>Step 6: Trajectory Mapping</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          AI-Enabled Career Paths for <span className="underline decoration-indigo-300 underline-offset-4">{assessment.role}</span>
        </h1>
        <p className="text-sm text-stone-600 mt-1.5 max-w-2xl">
          Discover high-demand emerging roles that build directly upon your existing domain skills, magnified by AI leverage.
        </p>
      </div>

      {/* Target Path Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {transitions.map((path) => {
          const isSelected = selectedTargetId === path.id;
          return (
            <div
              key={path.id}
              id={`career-path-${path.id}`}
              className={`glass-card rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                isSelected
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md bg-emerald-50/20'
                  : 'border-stone-200/90 hover:border-stone-300 shadow-2xs bg-white'
              }`}
            >
              {isSelected && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Active Target Role</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Header Badge & Match Score */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                    {path.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    <span>{path.matchScore}% Match</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    {path.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Key Metrics Matrix */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 text-center">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Transition</span>
                    <span className="text-xs font-semibold text-stone-800">{path.difficulty}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Timeline</span>
                    <span className="text-xs font-semibold text-stone-800">{path.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Comp Upside</span>
                    <span className="text-xs font-bold text-emerald-600">{path.salaryGrowth}</span>
                  </div>
                </div>

                {/* Key Bridge Skills */}
                <div>
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                    Critical Bridge Skills Needed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {path.keyBridgeSkills.map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-stone-700 text-[11px] font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Why It Matters Thesis */}
                <div className="p-3 rounded-xl bg-indigo-50/40 border border-indigo-100 text-[11px] text-stone-700 leading-relaxed">
                  <strong className="text-indigo-900 font-semibold block mb-0.5">Market Demand Thesis:</strong>
                  {path.whyItMatters}
                </div>
              </div>

              {/* Select Button */}
              <div className="pt-5 mt-4 border-t border-stone-100">
                <button
                  id={`set-target-btn-${path.id}`}
                  onClick={() => handleSelectPath(path)}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Target Role Selected</span>
                    </>
                  ) : (
                    <span>Set as Target Career Goal</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <div className="text-xs text-stone-500 text-center sm:text-left">
          Target role: <strong className="text-stone-800">{assessment.targetRoleTitle || 'Selected'}</strong>
        </div>
        <button
          onClick={onContinue}
          id="paths-continue-to-dashboard-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Open Full Dashboard</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

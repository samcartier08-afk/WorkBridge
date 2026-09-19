import React, { useState } from 'react';
import { AssessmentData, CareerBridgeMilestone, ActiveTab, CareerPathTransition } from '../types';
import { CAREER_TRANSITIONS_BY_ROLE } from '../data/careerTransitions';
import { loadTargetPath, saveTargetPath } from '../utils/storage';
import { 
  Layers, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  ExternalLink,
  GitFork,
  Briefcase,
  Check
} from 'lucide-react';

interface CareerBridgeViewProps {
  assessment: AssessmentData;
  onNavigateTab: (tab: ActiveTab) => void;
  onSetTargetRole?: (newTargetTitle: string) => void;
}

const MILESTONES: CareerBridgeMilestone[] = [
  {
    stage: 'today',
    label: 'TODAY',
    badge: 'Baseline Point',
    title: 'Current Operating Reality',
    summary: 'Execution-heavy role spending significant weekly hours on boilerplate syntax, repetitive drafting, and manual administrative coordination.',
    details: [
      'High proportion of repetitive, rule-based tasks vulnerable to rapid automation',
      'Cognitive energy depleted by formatting, context switching, and routine transcription',
      'Evaluated primarily on mechanical speed and typing volume rather than strategic leverage'
    ]
  },
  {
    stage: 'ai_impact',
    label: 'AI IMPACT',
    badge: 'Task Tri-Audit',
    title: 'Workload Tri-Categorization',
    summary: 'Auditing every domain task into AI-Ready (automate), AI + Human (augment with human judgment), and Human-Critical (authentic human domain).',
    details: [
      '30%–50% of routine grunt work identified for immediate copilot delegation',
      'Intellectual leverage unlocked through prompt architecture and semantic context injection',
      'Clear boundary lines established between synthetic generation and human oversight'
    ]
  },
  {
    stage: 'human_advantage',
    label: 'HUMAN ADVANTAGE',
    badge: 'Core Philosophy',
    title: 'Uniquely Human Value-Add',
    summary: '"AI can handle information. Humans handle judgment." Centering value on contextual judgment, ethical accountability, empathy, and creative taste.',
    details: [
      'Contextual nuance and domain understanding that algorithms cannot infer',
      'Ethical judgment, legal liability, and final verification rigor ("Anti-Slop")',
      'Authentic human relationship-building, empathy, and stakeholder alignment'
    ]
  },
  {
    stage: 'skill_gap',
    label: 'SKILL GAP',
    badge: 'The Delta',
    title: 'Dual-Pillar Competency Model',
    summary: 'Bridging the delta between legacy craft and modern high-multiplier execution across technical tooling and irreplaceable human judgment.',
    details: [
      'Mastering agentic workflows, multi-step tool calling, and context grounding',
      'Cultivating "Anti-Slop" editorial taste, verification rigor, and architectural skepticism',
      'Elevating from raw task executor to strategic cross-functional orchestrator'
    ]
  },
  {
    stage: 'learning',
    label: 'LEARNING',
    badge: 'Targeted Gaps',
    title: 'Actionable Micro-Projects & Roadmap',
    summary: 'A project-based sprint directly closing your identified skill gaps with tangible proof-of-work deliverables—not a generic course.',
    details: [
      'Targeted micro-assignments replacing passive video theory with production proof-of-work',
      '5–8 hours/week tailored to your schedule and domain requirements',
      'Portfolio-grade case studies built under the STAR-H framework'
    ]
  },
  {
    stage: 'tomorrow',
    label: 'TOMORROW',
    badge: 'The Horizon',
    title: 'The AI-Enabled Specialist',
    summary: 'An indispensable professional delivering 3x–5x multiplier leverage with pristine quality, human judgment, and trusted domain authority.',
    details: [
      'Autonomous problem-solver who converts ambiguous objectives into validated systems',
      'Director-level perspective with deep understanding of verification and ethical boundaries',
      'High career resilience and versatility across evolving model architectures'
    ]
  }
];

export const CareerBridgeView: React.FC<CareerBridgeViewProps> = ({
  assessment,
  onNavigateTab,
  onSetTargetRole
}) => {
  const [activeStage, setActiveStage] = useState<'today' | 'ai_impact' | 'human_advantage' | 'skill_gap' | 'learning' | 'tomorrow'>('human_advantage');

  // Load candidate transitions
  const transitions: CareerPathTransition[] = CAREER_TRANSITIONS_BY_ROLE[assessment.roleId] || CAREER_TRANSITIONS_BY_ROLE.custom;

  const [selectedTargetId, setSelectedTargetId] = useState<string>(() => {
    return loadTargetPath() || transitions[0]?.id || '';
  });

  const handleSelectPath = (path: CareerPathTransition) => {
    setSelectedTargetId(path.id);
    saveTargetPath(path.id);
    if (onSetTargetRole) {
      onSetTargetRole(path.title);
    }
  };

  const currentMilestone = MILESTONES.find(m => m.stage === activeStage) || MILESTONES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/90 text-stone-700 text-xs font-medium shadow-2xs backdrop-blur-sm">
          <Layers className="w-3.5 h-3.5 text-indigo-600" />
          <span>The Core Transformation Metaphor</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
          The Career Bridge
        </h1>
        <p className="text-base text-stone-600 font-normal leading-relaxed">
          TODAY → AI IMPACT → HUMAN ADVANTAGE → SKILL GAP → LEARNING → TOMORROW
        </p>
      </div>

      {/* Glass Bridge Visual Metaphor Container */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs relative overflow-hidden">
        {/* Subtle Ambient Refraction */}
        <div className="absolute top-0 left-1/4 right-1/4 h-24 bg-indigo-50/50 blur-3xl -z-10 rounded-full" />

        {/* Bridge Track / Connected Beam */}
        <div className="relative mb-10">
          {/* Subtle connecting line across nodes on desktop */}
          <div className="hidden xl:block absolute top-7 left-12 right-12 h-1 bg-stone-200/80 -z-0 rounded-full">
            <div className="h-full bg-gradient-to-r from-stone-400 via-indigo-500 to-emerald-500 rounded-full opacity-60" />
          </div>

          {/* Milestone Node Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 relative z-10">
            {MILESTONES.map((milestone, idx) => {
              const isSelected = activeStage === milestone.stage;
              return (
                <button
                  key={milestone.stage}
                  id={`bridge-node-${milestone.stage}`}
                  onClick={() => setActiveStage(milestone.stage as any)}
                  className={`p-3.5 rounded-2xl text-left border transition-all relative ${
                    isSelected
                      ? 'bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/20'
                      : 'bg-white/70 hover:bg-white/95 border-stone-200/90 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-stone-400">
                      STEP 0{idx + 1}
                    </span>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-indigo-100 text-indigo-800' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {milestone.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold tracking-wider text-stone-900 mb-0.5">
                    {milestone.label}
                  </div>
                  <div className="text-[11px] font-medium text-stone-600 line-clamp-1">
                    {milestone.title}
                  </div>

                  <div className={`mt-3 h-1.5 w-full rounded-full transition-all ${
                    isSelected ? 'bg-indigo-600' : 'bg-stone-200/70'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Inspection Panel */}
        <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {currentMilestone.label} Stage Breakdown
                </span>
                <span className="text-xs text-stone-400">•</span>
                <span className="text-xs font-medium text-stone-500">For {assessment.role}</span>
              </div>
              <h2 className="text-2xl font-semibold text-stone-900 mt-1">
                {currentMilestone.title}
              </h2>
            </div>

            {/* Jump button */}
            <button
              onClick={() => {
                if (currentMilestone.stage === 'today') onNavigateTab('assessment');
                if (currentMilestone.stage === 'ai_impact') onNavigateTab('ai_impact');
                if (currentMilestone.stage === 'human_advantage') onNavigateTab('human_advantage');
                if (currentMilestone.stage === 'skill_gap') onNavigateTab('skill_gap');
                if (currentMilestone.stage === 'learning') onNavigateTab('learning_projects');
                if (currentMilestone.stage === 'tomorrow') onNavigateTab('career_bridge');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3.5 py-2 rounded-xl transition-colors self-start sm:self-auto"
            >
              <span>Explore Module</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm text-stone-700 leading-relaxed max-w-3xl">
            {currentMilestone.summary}
          </p>

          <div>
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Key Strategic Anchor Points:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentMilestone.details.map((detail, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/60 text-xs text-stone-700 space-y-1">
                  <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Focus Point 0{idx + 1}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Possible AI-Enabled Career Transitions (Based on skills & gaps, WITHOUT ranking) */}
      <section className="space-y-6">
        <div className="text-center sm:text-left max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold mb-2">
            <GitFork className="w-3.5 h-3.5" />
            <span>Equal-Dignity Transition Trajectories</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-900 tracking-tight">
            Possible AI-Enabled Career Transitions
          </h2>
          <p className="text-sm text-stone-600 mt-1 leading-relaxed">
            These pathways build directly upon your existing domain background and address your identified skill gaps. <strong>They are presented without hierarchical ranking</strong>—each represents an authentic, high-leverage direction tailored to different professional strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transitions.map((path) => {
            const isSelected = selectedTargetId === path.id || assessment.targetRoleTitle === path.title;
            return (
              <div
                key={path.id}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white/80 border-stone-200/90 shadow-2xs hover:border-stone-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                      Horizon Archetype
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Selected Horizon
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">
                      {path.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Timeline:</span>
                      <span className="font-semibold text-stone-800">{path.timeline}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Multiplier Leverage:</span>
                      <span className="font-semibold text-emerald-700">{path.salaryGrowth}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-stone-700 mb-1.5">
                      Key Bridge Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {path.keyBridgeSkills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100">
                  <button
                    id={`select-path-${path.id}`}
                    onClick={() => handleSelectPath(path)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Active Target Horizon</span>
                      </>
                    ) : (
                      <>
                        <span>Select as Target Horizon</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Side-by-Side Evolution Comparison: TODAY vs TOMORROW */}
      <section className="space-y-4 pt-4 border-t border-stone-200">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl font-semibold text-stone-900">The Professional Shift</h2>
          <p className="text-xs text-stone-500 mt-1">Comparing daily operating realities before and after the adaptation bridge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Today Side */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-500 tracking-wider">TODAY'S OPERATING REALITY</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">Legacy Craft</span>
            </div>
            <div className="text-sm font-semibold text-stone-900">{assessment.role}</div>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">✕</span>
                <span>Manually writes repetitive boilerplate, emails, or first drafts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">✕</span>
                <span>Spends 12+ hours weekly on manual data transcription & reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">✕</span>
                <span>Vulnerable to sudden efficiency quotas or automated task reduction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">✕</span>
                <span>Evaluated primarily on mechanical speed and typing volume</span>
              </li>
            </ul>
          </div>

          {/* Tomorrow Side */}
          <div className="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
              <span className="text-xs font-bold text-indigo-700 tracking-wider">TOMORROW'S OPERATING REALITY</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">High-Leverage Specialist</span>
            </div>
            <div className="text-sm font-semibold text-indigo-950">{assessment.targetRoleTitle || 'AI-Augmented Specialist'}</div>
            <ul className="space-y-2.5 text-xs text-indigo-950">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Orchestrates agentic workflows that generate first drafts in seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Applies strict verification rigor, taste, and safety reviews ("Anti-Slop")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Acts as cross-functional AI champion, training peers and setting policies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Commands high market resilience and domain multiplier value</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <button
          onClick={() => onNavigateTab('skill_gap')}
          className="text-xs font-medium text-stone-600 hover:text-stone-900"
        >
          ← Back to Skill Gap
        </button>
        <button
          onClick={() => onNavigateTab('learning_projects')}
          id="bridge-continue-to-learning-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-2xs flex items-center justify-center gap-2 group"
        >
          <span>Continue to Learning & Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};


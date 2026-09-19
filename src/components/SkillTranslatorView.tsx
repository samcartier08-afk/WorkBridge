import React, { useState } from 'react';
import { AssessmentData, ActiveTab, SkillTranslationPreset, CustomTranslationResult } from '../types';
import { skillTranslatorService } from '../services/skillTranslatorService';
import { 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Check, 
  Plus, 
  ShieldCheck, 
  Search, 
  Layers, 
  Zap, 
  Award,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Compass,
  FileText,
  Lightbulb
} from 'lucide-react';

interface SkillTranslatorViewProps {
  assessment: AssessmentData;
  onUpdateSkills: (newSkills: string[]) => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onContinue: () => void;
}

export const SkillTranslatorView: React.FC<SkillTranslatorViewProps> = ({
  assessment,
  onUpdateSkills,
  onNavigateTab,
  onContinue
}) => {
  const presets = skillTranslatorService.getAllPresets();
  const [selectedPresetId, setSelectedPresetId] = useState<string>(presets[0].id);
  const [customInput, setCustomInput] = useState('');
  const [customResult, setCustomResult] = useState<CustomTranslationResult | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [savedSuccessMessage, setSavedSuccessMessage] = useState<string | null>(null);

  const activePreset: SkillTranslationPreset = presets.find(p => p.id === selectedPresetId) || presets[0];

  const handleTranslateCustom = (textToTranslate?: string) => {
    const text = (textToTranslate !== undefined ? textToTranslate : customInput).trim();
    if (!text) return;
    setIsTranslating(true);
    setTimeout(() => {
      const result = skillTranslatorService.translateCustomExperience(text);
      setCustomResult(result);
      setIsTranslating(false);
    }, 450);
  };

  const handleApplyPresetToInput = (preset: SkillTranslationPreset) => {
    setSelectedPresetId(preset.id);
    setCustomInput(preset.context);
    handleTranslateCustom(preset.context);
  };

  const handleAddSkillsToProfile = (skillsToAdd: string[]) => {
    const combined = Array.from(new Set([...assessment.currentSkills, ...skillsToAdd]));
    onUpdateSkills(combined);
    setSavedSuccessMessage(`Added ${skillsToAdd.length} transferable skills to your active assessment!`);
    setTimeout(() => setSavedSuccessMessage(null), 4000);
  };

  const samplePrompts = [
    {
      label: 'Customer Support Escalations',
      text: 'Handled 50+ customer support calls and tickets daily, calmed angry users threatening to cancel accounts, searched technical knowledge bases, and filed bug reports with engineering.'
    },
    {
      label: 'Junior CS Graduate / Coursework',
      text: 'Built university group projects in React and Node.js, solved algorithmic assignments, debugged compiler errors, and used Git for version control, but worried about AI coding tools replacing entry developers.'
    },
    {
      label: 'Manual QA / Regression Tester',
      text: 'Executed manual test scripts across Chrome and Safari, documented edge-case bug steps in Jira, checked form validations, and verified developer bug fixes before production deploys.'
    },
    {
      label: 'Financial Spreadsheets & Bookkeeping',
      text: 'Extracted invoice numbers from PDF receipts into Excel, wrote VLOOKUP formulas, reconciled monthly bank statements, and drafted budget variance reports for management.'
    },
    {
      label: 'High School Teacher / Lesson Planner',
      text: 'Designed weekly lesson curriculum from state standards, graded 35 student essays weekly with rubric feedback, managed classroom focus, and adapted explanations for students falling behind.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* 1. Header / Core Philosophy */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs font-semibold shadow-2xs">
          <BrainCircuit className="w-3.5 h-3.5 text-indigo-600" />
          <span>Step 4: Experience Value Discovery</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
          The Skill Translator
        </h1>

        <p className="text-base sm:text-lg text-stone-700 italic font-serif-heading">
          "Discover the value you already have. Bridge the gap to where work is going."
        </p>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          You are not starting from scratch. Routine execution is being automated, but your past 
          responsibilities contain high-value human judgment, empathy, and systems thinking. 
          Translate your past duties into emerging AI-era capabilities and identify exact bridge gaps.
        </p>
      </div>

      {/* Success Notification Banner */}
      {savedSuccessMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-medium text-emerald-900 flex items-center justify-between gap-3 animate-in fade-in shadow-xs">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{savedSuccessMessage}</span>
          </div>
          <button
            onClick={() => onNavigateTab('skill_gap')}
            className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            View in Skill Gap Matrix →
          </button>
        </div>
      )}

      {/* 2. Interactive Custom Experience Translator */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200/80">
          <div>
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Translate Your Past Experience</span>
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Paste your resume bullet points, job description, or typical daily duties:
            </p>
          </div>

          <div className="text-xs text-stone-500 flex items-center gap-1">
            <span className="font-medium text-stone-700">Active Role:</span>
            <span className="px-2 py-0.5 rounded bg-stone-100 font-semibold text-stone-800">{assessment.role}</span>
          </div>
        </div>

        {/* Quick-Prompt Sample Chips */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
            Or test with a representative real-world baseline:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCustomInput(p.text);
                  handleTranslateCustom(p.text);
                }}
                className="px-2.5 py-1 rounded-lg text-xs bg-stone-100/80 hover:bg-stone-200/80 text-stone-700 transition-colors border border-stone-200/60"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input Area */}
        <div className="space-y-3">
          <textarea
            id="skill-translator-input"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            rows={3}
            placeholder="e.g., Handled client billing disputes, conducted weekly standup meetings, wrote automated unit tests, or coordinated classroom learning modules..."
            className="w-full p-4 rounded-2xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-stone-900 shadow-2xs leading-relaxed"
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Decomposes tasks into latent competencies, emerging AI titles & bridge gaps</span>
            </div>

            <button
              id="skill-translator-run-btn"
              onClick={() => handleTranslateCustom()}
              disabled={isTranslating || !customInput.trim()}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-white font-medium text-xs sm:text-sm transition-all shadow-2xs flex items-center justify-center gap-2"
            >
              {isTranslating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Deconstructing Experience...</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Translate to AI-Era Capabilities</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Translation Output Decomposition Card */}
        {customResult && (
          <div className="mt-6 p-6 rounded-2xl bg-indigo-50/40 border border-indigo-200/90 shadow-2xs space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-indigo-100">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700">
                  DECONSTRUCTION ANALYSIS COMPLETE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                  Your Hidden Value & AI-Era Strategic Identity
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-stone-600">Transferability Score:</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  {customResult.transferabilityScore}% Transferable
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Column 1: Latent Competencies */}
              <div className="p-4 rounded-xl bg-white border border-indigo-100 shadow-2xs space-y-2">
                <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block">
                  1. Latent Human Competencies
                </span>
                <p className="text-[11px] text-stone-500">
                  The psychological and systems abilities hidden inside your past work:
                </p>
                <ul className="space-y-1.5 pt-1">
                  {customResult.latentCompetencies.map((comp, i) => (
                    <li key={i} className="text-xs text-stone-800 flex items-start gap-1.5">
                      <span className="text-indigo-500 mt-0.5 font-bold">•</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Modern Translation */}
              <div className="p-4 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-2">
                <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block">
                  2. Emerging AI-Era Identity
                </span>
                <div className="text-xs font-bold text-purple-950">
                  {customResult.modernAITranslation}
                </div>
                <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                  <strong className="text-stone-800">The Human Edge: </strong>
                  {customResult.humanAdvantageFactor}
                </div>
              </div>

              {/* Column 3: Priority Bridge Gaps */}
              <div className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-2xs space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                    3. Specific Bridge Gaps
                  </span>
                  <p className="text-[11px] text-stone-500">
                    Targeted tools to turn this experience into maximum leverage:
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {customResult.recommendedBridgeSkills.map((gap, i) => (
                      <li key={i} className="text-xs text-stone-800 flex items-start gap-1.5">
                        <span className="text-amber-500 mt-0.5 font-bold">→</span>
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <button
                    id="add-custom-skills-btn"
                    onClick={() => handleAddSkillsToProfile([
                      ...customResult.latentCompetencies,
                      ...customResult.recommendedBridgeSkills
                    ])}
                    className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Sync Skills to My Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Curated Career Transition Case Library */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Curated Transition Blueprints
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Explore how 8 distinct professions and fresher backgrounds translate into high-leverage roles.
            </p>
          </div>

          <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
            8 Archetypes Available
          </span>
        </div>

        {/* Preset Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {presets.map((preset) => {
            const isSelected = preset.id === activePreset.id;
            return (
              <button
                key={preset.id}
                id={`select-preset-${preset.id}`}
                onClick={() => setSelectedPresetId(preset.id)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-indigo-500 shadow-xs ring-2 ring-indigo-500/20'
                    : 'bg-white/70 hover:bg-white border-stone-200/80 text-stone-700'
                }`}
              >
                <div className="text-[10px] font-semibold text-indigo-700 uppercase tracking-wider truncate mb-0.5">
                  {preset.category}
                </div>
                <div className="text-xs font-bold text-stone-900 truncate">
                  {preset.pastRoleOrExperience}
                </div>
                <div className="text-[10px] text-stone-500 truncate mt-1 flex items-center gap-1">
                  <span>→ {preset.modernAITranslation.emergingRoleTitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Preset Inspection Canvas */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  {activePreset.category}
                </span>
                <span className="text-xs text-stone-300">•</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {activePreset.transferabilityIndex} Transferability
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mt-1">
                {activePreset.pastRoleOrExperience}
              </h3>
              
              <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
                {activePreset.context}
              </p>
            </div>

            <button
              onClick={() => handleAddSkillsToProfile(activePreset.extractedSkills)}
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all shadow-2xs flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-300" />
              <span>Add These Transferable Skills</span>
            </button>
          </div>

          {/* Latent Value Summary Card */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">The Hidden Value You Already Possess:</strong>
              <span>{activePreset.latentValueSummary}</span>
            </div>
          </div>

          {/* Detailed Deconstruction 3-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Prior Tasks to Competencies */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-stone-500" />
                <span>Underlying Competencies</span>
              </div>
              <div className="space-y-2.5">
                {activePreset.underlyingCompetencies.map((comp, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs">
                    <strong className="text-stone-900 font-semibold block mb-0.5">{comp.name}</strong>
                    <span className="text-stone-600 text-[11px] leading-relaxed">{comp.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emerging AI Role */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>AI-Era Translation</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2">
                <span className="text-xs font-bold text-purple-950 block">
                  {activePreset.modernAITranslation.emergingRoleTitle}
                </span>
                <p className="text-[11px] text-stone-700 leading-relaxed">
                  {activePreset.modernAITranslation.strategicValue}
                </p>
              </div>
              <div className="text-[11px] text-stone-600 pt-1">
                <strong className="text-stone-800">Why Your Experience Matters: </strong>
                {activePreset.modernAITranslation.whyExperienceMatters}
              </div>
            </div>

            {/* Bridge Gaps to Complete */}
            <div className="p-5 rounded-2xl bg-white border border-indigo-100 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Specific Bridge Gaps</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  Acquire these technical/operational fluencies to unlock the translation:
                </p>
                <div className="space-y-1.5">
                  {activePreset.bridgeGaps.map((gap, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-950 flex items-start gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={() => onNavigateTab('learning_path')}
                  className="w-full py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <span>Review Closing Projects in Learning Path</span>
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
          onClick={() => onNavigateTab('human_edge')}
          className="text-xs font-medium text-stone-600 hover:text-stone-900"
        >
          ← Back to Human Advantage
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
            id="skill-translator-continue-to-gap-btn"
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>Examine Skill Gap Matrix</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

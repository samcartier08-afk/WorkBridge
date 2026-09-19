import React, { useState } from 'react';
import { AssessmentData, WorkspaceScenario } from '../types';
import { WORKSPACE_SCENARIOS } from '../data/workspaceScenarios';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  Copy,
  PenTool,
  RotateCcw
} from 'lucide-react';

interface WorkspaceViewProps {
  assessment: AssessmentData;
  onContinue: () => void;
}

type WorkspaceStep = 'task' | 'ai_draft' | 'human_review' | 'improved_result';

export const WorkspaceView: React.FC<WorkspaceViewProps> = ({
  assessment,
  onContinue
}) => {
  // Find scenario matching user's role, or fallback to first
  const initialScenario = WORKSPACE_SCENARIOS.find(s => s.roleId === assessment.roleId) || WORKSPACE_SCENARIOS[0];
  const [activeScenario, setActiveScenario] = useState<WorkspaceScenario>(initialScenario);
  const [currentStep, setCurrentStep] = useState<WorkspaceStep>('human_review');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Local checklist state for the active scenario
  const [checklist, setChecklist] = useState(activeScenario.humanReview.checklist);

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleScenarioChange = (scenario: WorkspaceScenario) => {
    setActiveScenario(scenario);
    setChecklist(scenario.humanReview.checklist);
    setIsCustomMode(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const STEPS: { id: WorkspaceStep; label: string; sub: string }[] = [
    { id: 'task', label: '1. TASK', sub: 'Intent & Context' },
    { id: 'ai_draft', label: '2. AI DRAFT', sub: 'Raw Synthetic Output' },
    { id: 'human_review', label: '3. HUMAN REVIEW', sub: 'Verification & Taste' },
    { id: 'improved_result', label: '4. IMPROVED RESULT', sub: 'Elevated High-Craft' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Step 5: Collaborative Workbench</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
          AI + Human Workspace Demonstration
        </h1>
        <p className="text-sm text-stone-600 mt-1.5 max-w-2xl">
          Observe how the four-stage cycle transforms commoditized synthetic drafts into trusted, high-craft professional artifacts.
        </p>
      </div>

      {/* Scenario Selector & Custom Toggle */}
      <div className="glass-card rounded-2xl p-4 border border-stone-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-stone-500">Domain Scenario:</span>
          {WORKSPACE_SCENARIOS.map(sc => (
            <button
              key={sc.id}
              id={`scenario-btn-${sc.id}`}
              onClick={() => handleScenarioChange(sc)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeScenario.id === sc.id && !isCustomMode
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200'
              }`}
            >
              {sc.domain.split('&')[0].trim()}
            </button>
          ))}
          <button
            onClick={() => setIsCustomMode(!isCustomMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              isCustomMode
                ? 'bg-indigo-600 text-white'
                : 'bg-white hover:bg-stone-50 text-indigo-600 border border-indigo-200'
            }`}
          >
            <PenTool className="w-3 h-3" />
            <span>Custom Prompt Sandbox</span>
          </button>
        </div>

        <div className="text-xs text-stone-500 font-medium">
          Domain: <strong className="text-stone-800">{activeScenario.domain}</strong>
        </div>
      </div>

      {/* 4-Stage Glass Stepper */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {STEPS.map((step, idx) => {
          const isActive = currentStep === step.id;
          return (
            <button
              key={step.id}
              id={`workspace-step-${step.id}`}
              onClick={() => setCurrentStep(step.id)}
              className={`p-3.5 rounded-2xl text-left border transition-all relative ${
                isActive
                  ? 'bg-white border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                  : 'bg-white/70 hover:bg-white border-stone-200 text-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-stone-400">STAGE 0{idx + 1}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
              </div>
              <div className={`text-xs font-bold tracking-wider ${isActive ? 'text-stone-900' : 'text-stone-700'}`}>
                {step.label}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">{step.sub}</p>
            </button>
          );
        })}
      </div>

      {/* Custom Mode Input (If Toggled) */}
      {isCustomMode && (
        <div className="glass-card rounded-2xl p-6 border border-indigo-200 bg-indigo-50/20 space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
              <PenTool className="w-4 h-4 text-indigo-600" />
              <span>Interactive Task Simulator</span>
            </h3>
            <span className="text-xs text-stone-500">Test how human review elevates your real work</span>
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5">
              Enter a real task or prompt you currently work on:
            </label>
            <textarea
              rows={3}
              value={customPrompt}
              onChange={e => setCustomPrompt(e.target.value)}
              placeholder="e.g. Draft a project update email explaining a 2-week delay to an executive sponsor without creating panic..."
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          <div className="text-[11px] text-stone-500">
            Click below through the 4 steps to inspect how the human reviewer checks tone, adds missing context, and elevates execution.
          </div>
        </div>
      )}

      {/* Primary Demonstration Canvas */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
        {/* Stage 1: TASK */}
        {currentStep === 'task' && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Stage 1: Intent Framing</span>
                <h3 className="text-xl font-semibold text-stone-900 mt-0.5">{activeScenario.title}</h3>
              </div>
              <button
                onClick={() => setCurrentStep('ai_draft')}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-medium flex items-center gap-1.5"
              >
                <span>Generate AI Draft</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                <span className="font-semibold text-stone-800 uppercase tracking-wider text-[11px]">User Prompt / Request:</span>
                <p className="text-stone-900 font-mono bg-stone-50 p-3 rounded-lg border border-stone-200/60 leading-relaxed text-xs">
                  "{isCustomMode && customPrompt ? customPrompt : activeScenario.task.prompt}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/60 space-y-1">
                  <span className="font-semibold text-stone-800 text-xs">Core Strategic Intent:</span>
                  <p className="text-stone-600 text-xs leading-relaxed">{activeScenario.task.intent}</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/60 space-y-1">
                  <span className="font-semibold text-stone-800 text-xs">Unstated Operational Context:</span>
                  <p className="text-stone-600 text-xs leading-relaxed">{activeScenario.task.context}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 2: AI DRAFT */}
        {currentStep === 'ai_draft' && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Stage 2: Raw Generative Draft</span>
                <h3 className="text-xl font-semibold text-stone-900 mt-0.5">Fast, Syntactically Fluent, but Vulnerable</h3>
              </div>
              <button
                onClick={() => setCurrentStep('human_review')}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-medium flex items-center gap-1.5"
              >
                <span>Proceed to Human Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Code / Text Output Display */}
            <div className="relative">
              <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 text-xs font-mono overflow-x-auto leading-relaxed max-h-[320px] whitespace-pre-wrap">
                {activeScenario.aiDraft.output}
              </pre>
              <button
                onClick={() => handleCopy(activeScenario.aiDraft.output)}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Pros & Fatal Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                <span className="font-semibold text-emerald-900 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  What the AI did well (Speed Multiplier):
                </span>
                <ul className="space-y-1.5 text-stone-700">
                  {activeScenario.aiDraft.pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/70 space-y-2">
                <span className="font-semibold text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Fatal Weaknesses ("AI Slop" & Blind Spots):
                </span>
                <ul className="space-y-1.5 text-stone-700">
                  {activeScenario.aiDraft.weaknesses.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: HUMAN REVIEW */}
        {currentStep === 'human_review' && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Stage 3: The Human Verification Layer
                </span>
                <h3 className="text-xl font-semibold text-stone-900 mt-0.5">
                  Injecting Judgment, Taste & Context
                </h3>
              </div>
              <button
                onClick={() => setCurrentStep('improved_result')}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-medium flex items-center gap-1.5"
              >
                <span>View Improved Result</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Critique Notes */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 leading-relaxed">
              <strong className="text-stone-900 font-semibold block mb-1">Human Evaluator Diagnosis:</strong>
              {activeScenario.humanReview.critiqueNotes}
            </div>

            {/* Interactive Review Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Verification & Elevation Checklist (Click to toggle):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checklist.map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      item.checked
                        ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950'
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      item.checked ? 'bg-indigo-600 text-white' : 'border border-stone-300'
                    }`}>
                      {item.checked && <Check className="w-3.5 h-3.5" />}
                    </span>
                    <div className="text-xs space-y-0.5">
                      <div className="font-semibold text-stone-900">{item.label}</div>
                      <p className="text-[11px] text-stone-500 leading-snug">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Human Interventions */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 text-xs">
              <span className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                Applied Human Interventions:
              </span>
              <ul className="space-y-1.5 text-stone-700">
                {activeScenario.humanReview.interventions.map((inv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{inv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Stage 4: IMPROVED RESULT */}
        {currentStep === 'improved_result' && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Stage 4: Elevated Craft Artifact</span>
                <h3 className="text-xl font-semibold text-stone-900 mt-0.5">The Indispensable Human+AI Multiplier</h3>
              </div>
              <button
                onClick={() => setCurrentStep('task')}
                className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restart Cycle</span>
              </button>
            </div>

            {/* Improved Output Display */}
            <div className="relative">
              <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 text-xs font-mono overflow-x-auto leading-relaxed max-h-[380px] whitespace-pre-wrap border border-stone-800 shadow-inner">
                {activeScenario.improvedResult.output}
              </pre>
              <button
                onClick={() => handleCopy(activeScenario.improvedResult.output)}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied' : 'Copy Result'}</span>
              </button>
            </div>

            {/* Human Value Added & Craft Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <span className="font-semibold text-emerald-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Irreplaceable Human Value Added:
                </span>
                <ul className="space-y-1.5 text-stone-700">
                  {activeScenario.improvedResult.humanValueAdded.map((v, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  Quantified Craft Metrics:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {activeScenario.improvedResult.craftMetrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-100">
                      <span className="text-stone-600 font-medium">{m.label}:</span>
                      <span className="font-mono font-bold text-indigo-700">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <button
          onClick={() => onContinue()}
          id="workspace-continue-to-paths-btn"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group ml-auto"
        >
          <span>Explore AI-Enabled Career Paths</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

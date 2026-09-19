import React, { useState } from 'react';
import { ActiveTab, EmployerDepartmentAudit } from '../types';
import { employerService } from '../services/employerService';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Download, 
  Sparkles, 
  Briefcase,
  AlertTriangle,
  ArrowUpRight,
  Calculator
} from 'lucide-react';

interface EmployerViewProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

export const EmployerView: React.FC<EmployerViewProps> = ({ onNavigateTab }) => {
  const departments = employerService.getDepartmentAudits();
  const [selectedDeptId, setSelectedDeptId] = useState<string>(departments[0].id);
  const [teamSizeInput, setTeamSizeInput] = useState<number>(35);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const activeDept: EmployerDepartmentAudit = 
    departments.find(d => d.id === selectedDeptId) || departments[0];

  const roiMetrics = employerService.calculateTransitionROI(teamSizeInput);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* 1. Executive Framing Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-semibold shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-indigo-300" />
          <span>Workbridge Enterprise: Workforce Transition & Internal Mobility</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
          Transition Existing Teams into Emerging AI Roles
        </h1>

        <p className="text-base sm:text-lg text-stone-700 italic font-serif-heading">
          "Don't retrench your institutional memory. Reskill the employees who already understand your business."
        </p>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Replacing employees through severance and external recruiting costs upwards of $58,000 per seat 
          and destroys culture. Workbridge maps department vulnerability, isolates routine tasks, 
          and bridges your current staff into high-leverage AI orchestrators.
        </p>
      </div>

      {/* 2. Interactive Workforce Transition ROI Calculator */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <h2 className="text-lg font-bold text-stone-900">
                Workforce Transition ROI & Cost-Benefit Model
              </h2>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Compare the cost of external replacement vs. structured internal Workbridge transition:
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200/80">
            <span className="text-xs text-emerald-900 font-bold">Institutional Memory Retained:</span>
            <span className="text-xs font-extrabold text-emerald-700">98%</span>
          </div>
        </div>

        {/* Team Size Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="team-size-slider" className="font-semibold text-stone-800">
              Department / Team Headcount to Transition:
            </label>
            <span className="font-extrabold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg text-sm">
              {teamSizeInput} Employees
            </span>
          </div>
          <input
            type="range"
            id="team-size-slider"
            min={5}
            max={150}
            step={5}
            value={teamSizeInput}
            onChange={(e) => setTeamSizeInput(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-mono">
            <span>5 seats (Single pod)</span>
            <span>50 seats (Mid-sized dept)</span>
            <span>150 seats (Enterprise division)</span>
          </div>
        </div>

        {/* Dynamic ROI Metrics 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* External Replacement Cost */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
            <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">
              Traditional Churn & Hiring
            </span>
            <div className="text-2xl font-black text-rose-950">
              ${roiMetrics.averageExternalReplacementCost * teamSizeInput >= 1000000 
                ? `${((roiMetrics.averageExternalReplacementCost * teamSizeInput) / 1000000).toFixed(2)}M`
                : `${Math.round((roiMetrics.averageExternalReplacementCost * teamSizeInput) / 1000)}k`}
            </div>
            <p className="text-[11px] text-rose-800 leading-snug">
              Severance packages + 22% recruiter fees + 4-month onboarding productivity lag.
            </p>
          </div>

          {/* Workbridge Transition Cost */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-1">
            <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider block">
              Workbridge Internal Reskilling
            </span>
            <div className="text-2xl font-black text-indigo-950">
              ${Math.round((roiMetrics.averageInternalReskillingCost * teamSizeInput) / 1000)}k
            </div>
            <p className="text-[11px] text-indigo-800 leading-snug">
              6-8 week sprint + AI tooling licenses + verified capstone benchmark evaluations.
            </p>
          </div>

          {/* Net Capital Saved */}
          <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-300 space-y-1">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
              Net Capital Saved by Retaining
            </span>
            <div className="text-2xl font-black text-emerald-900">
              ${roiMetrics.projectedSavings >= 1000000
                ? `${(roiMetrics.projectedSavings / 1000000).toFixed(2)}M`
                : `${Math.round(roiMetrics.projectedSavings / 1000)}k`}
            </div>
            <p className="text-[11px] text-emerald-800 leading-snug font-medium">
              Immediate bottom-line EBITDA preservation while boosting team trust and output.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Department Vulnerability & Augmentation Radar */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Departmental Workforce Audits & Transition Blueprints
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Select a functional organization to inspect routine vulnerability ratios and emerging target roles:
            </p>
          </div>

          <button
            onClick={() => setShowExportModal(true)}
            className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
          >
            <Download className="w-3.5 h-3.5 text-stone-500" />
            <span>Export Transition Blueprint (PDF/JSON)</span>
          </button>
        </div>

        {/* Department Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {departments.map((dept) => {
            const isSelected = dept.id === activeDept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isSelected ? 'text-indigo-300' : 'text-stone-400'}`}>
                  {dept.headcount} Team Members
                </div>
                <div className="text-xs font-bold truncate">
                  {dept.departmentName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Department Detail Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Department Audit
              </div>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
                {activeDept.departmentName}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Audited cohort of {activeDept.headcount} existing full-time contributors.
              </p>
            </div>

            {/* Tri-Bar Distribution for Department */}
            <div className="w-full md:w-80 space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold text-stone-600">
                <span>Routine Exposure: {activeDept.automationExposureIndex}%</span>
                <span>Augmentation: {activeDept.augmentationLeverageIndex}%</span>
              </div>
              <div className="h-3.5 w-full bg-stone-100 rounded-full overflow-hidden flex p-0.5 border border-stone-200">
                <div 
                  style={{ width: `${activeDept.automationExposureIndex}%` }} 
                  className="bg-amber-400/90 h-full rounded-l-full" 
                  title={`Routine: ${activeDept.automationExposureIndex}%`}
                />
                <div 
                  style={{ width: `${activeDept.augmentationLeverageIndex - activeDept.automationExposureIndex}%` }} 
                  className="bg-indigo-500/90 h-full" 
                  title={`Augment: ${activeDept.augmentationLeverageIndex}%`}
                />
                <div 
                  style={{ width: `${100 - activeDept.augmentationLeverageIndex}%` }} 
                  className="bg-emerald-500/90 h-full rounded-r-full" 
                  title={`Human Critical: ${100 - activeDept.augmentationLeverageIndex}%`}
                />
              </div>
              <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                <span>AI-READY</span>
                <span>AI + HUMAN</span>
                <span>HUMAN-CRITICAL</span>
              </div>
            </div>
          </div>

          {/* Department Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Top Routine Vulnerabilities */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Routine Tasks Being Automated</span>
              </div>
              <p className="text-[11px] text-stone-500">
                Tasks currently consuming 40%+ of department hours that should be delegated:
              </p>
              <ul className="space-y-2 pt-1">
                {activeDept.topRoutineVulnerabilities.map((vuln, i) => (
                  <li key={i} className="text-xs text-stone-800 flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{vuln}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emerging Target Roles */}
            <div className="p-5 rounded-2xl bg-white border border-indigo-100 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Internal Target Transition Roles</span>
              </div>
              <div className="space-y-3">
                {activeDept.targetAIEnabledRoles.map((role, i) => (
                  <div key={i} className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-1">
                    <div className="text-[10px] text-stone-500 line-through">
                      {role.currentTitle}
                    </div>
                    <div className="text-xs font-bold text-indigo-950 flex items-center justify-between">
                      <span>→ {role.emergingTitle}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-600 pt-1 border-t border-indigo-100/60">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-indigo-600" />
                        {role.transitionWeeks} weeks
                      </span>
                      <span className="font-bold text-emerald-700">
                        Saves {role.savingsVsHiring}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reskilling Curriculum Preview */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-purple-600" />
                  <span>Cohort Reskilling Curriculum</span>
                </div>
                <div className="space-y-1.5">
                  {activeDept.reskillingCurriculumPreview.map((week, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-purple-50/40 border border-purple-100 text-[11px] text-purple-950 leading-relaxed">
                      {week}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <button
                  onClick={() => alert(`Starting transition cohort planning for ${activeDept.departmentName}!\n\nTarget enrollment: ${activeDept.headcount} team members.\nEstimated transition duration: 6 weeks.\nProjected retention: 98%.\n\nA dedicated organizational advisor will reach out to help implement your customized Workbridge internal mobility bridge.`)}
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Users className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Initiate Department Transition Cohort</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Blueprint Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl max-w-lg w-full p-6 bg-white border border-stone-300 shadow-xl space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-bold text-stone-900 text-base">
                Workbridge Transition Blueprint Export
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-stone-600 space-y-2">
              <p>
                The <strong>Workbridge AI Workforce Transition Executive Summary</strong> includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-700">
                <li>Departmental automation exposure benchmarks for 5 divisions</li>
                <li>Financial ROI model showing ${Math.round(roiMetrics.projectedSavings / 1000)}k net savings for {teamSizeInput} employees</li>
                <li>8-Week weekly micro-sprint curriculum for internal reskilling</li>
                <li>Zero-fear internal communication and change management templates</li>
              </ul>
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end gap-2">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Blueprint downloaded! Check your downloads folder for "Workbridge_Enterprise_Transition_Blueprint.json"');
                  setShowExportModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
              >
                Download Executive Blueprint
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <button
          onClick={() => onNavigateTab('dashboard')}
          className="text-xs font-medium text-stone-600 hover:text-stone-900"
        >
          ← Return to Individual Adaptation Dashboard
        </button>

        <button
          onClick={() => onNavigateTab('assessment')}
          className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all shadow-2xs"
        >
          Take Individual Assessment
        </button>
      </div>
    </div>
  );
};

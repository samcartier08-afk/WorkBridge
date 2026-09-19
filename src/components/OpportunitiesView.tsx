import React, { useState, useMemo } from 'react';
import { AssessmentData, ActiveTab, JobOpportunity } from '../types';
import { jobOpportunitiesService } from '../services/jobOpportunitiesService';
import { INDIA_AI_MARKET_STATS } from '../data/opportunitiesData';
import { 
  Briefcase, 
  Sparkles, 
  Search, 
  MapPin, 
  DollarSign, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Terminal, 
  ChevronRight,
  TrendingUp,
  Building2,
  FileText,
  Clock,
  Download
} from 'lucide-react';

interface OpportunitiesViewProps {
  assessment: AssessmentData;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({
  assessment,
  onNavigateTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState<string>('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All'); // 'All' | 'India' | 'Global'
  const [selectedIndiaHub, setSelectedIndiaHub] = useState<string>('All');
  const [currencyMode, setCurrencyMode] = useState<'INR' | 'USD'>('INR');
  const [savedJobs, setSavedJobs] = useState<string[]>(() => jobOpportunitiesService.getSavedJobIds());
  const [showApiSchema, setShowApiSchema] = useState(false);

  const rawOpportunities = useMemo(() => {
    return jobOpportunitiesService.getOpportunities(assessment);
  }, [assessment]);

  const filteredOpportunities = useMemo(() => {
    return rawOpportunities.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.indiaHub && job.indiaHub.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.aiStackUsed.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesExp = 
        selectedExperience === 'All' || 
        job.experienceLevel.toLowerCase().includes(selectedExperience.toLowerCase());

      const matchesMode = 
        selectedWorkMode === 'All' || 
        job.workMode.toLowerCase() === selectedWorkMode.toLowerCase();

      const matchesRegion = 
        selectedRegion === 'All' ||
        (selectedRegion === 'India' && job.region === 'India') ||
        (selectedRegion === 'Global' && job.region !== 'India');

      const matchesHub = 
        selectedIndiaHub === 'All' ||
        (job.indiaHub && job.indiaHub.toLowerCase().includes(selectedIndiaHub.toLowerCase()));

      return matchesSearch && matchesExp && matchesMode && matchesRegion && matchesHub;
    });
  }, [rawOpportunities, searchQuery, selectedExperience, selectedWorkMode, selectedRegion, selectedIndiaHub]);

  const handleToggleSave = (jobId: string) => {
    jobOpportunitiesService.toggleSaveJob(jobId);
    setSavedJobs(jobOpportunitiesService.getSavedJobIds());
  };

  const apiSchema = jobOpportunitiesService.getFutureAPIConnectorSchema();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* 1. Header / Context */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold shadow-2xs">
          <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
          <span>Stage 8: Verified AI-Enabled Job Market & India Tech Hubs</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight">
          Emerging AI-Enabled Opportunities
        </h1>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Explore requisitions across top Indian tech hubs (Bengaluru, Hyderabad, Pune, Gurugram, Mumbai, Chennai) 
          and global enterprises. Match percentages are dynamically calibrated against your verified portfolio.
        </p>

        {/* ATS API Schema Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setShowApiSchema(!showApiSchema)}
            className="text-indigo-600 hover:text-indigo-800 font-medium text-xs underline flex items-center gap-1"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{showApiSchema ? 'Hide ATS API Schema' : 'Inspect ATS & Aggregator API Schema'}</span>
          </button>
        </div>
      </div>

      {/* India AI Market Stats Intelligence Widget */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-stone-900 to-stone-950 text-stone-200 border border-stone-800 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-tight text-white uppercase">
              India AI Workforce Intelligence (NASSCOM & GCC Pulse 2025/2026)
            </h2>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
            Bengaluru • Hyderabad • Pune • NCR • Mumbai • Chennai
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {INDIA_AI_MARKET_STATS.map((stat, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-1.5">
              <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">{stat.metric}</div>
              <div className="text-base sm:text-lg font-bold text-white tracking-tight">{stat.value}</div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-emerald-400 font-bold">{stat.trend}</span>
                <span className="text-stone-400 truncate max-w-[120px]">{stat.source}</span>
              </div>
              <p className="text-[11px] text-stone-300 leading-snug pt-1 border-t border-stone-700/60">
                {stat.insight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Future API Connector Schema Drawer */}
      {showApiSchema && (
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 border border-stone-800 font-mono text-xs space-y-3 shadow-md animate-in fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Future Job Aggregator API Service Contract (Adzuna / LinkedIn / ATS)</span>
            </span>
            <span className="text-[10px] text-stone-400">Schema v1.0.0</span>
          </div>
          <pre className="overflow-x-auto text-[11px] text-stone-300 leading-relaxed">
            {JSON.stringify(apiSchema, null, 2)}
          </pre>
          <div className="text-[11px] text-stone-400 pt-1">
            * This typed contract allows Workbridge AI to seamlessly poll and ingest live external employer requisitions via authenticated webhook or batch API.
          </div>
        </div>
      )}

      {/* 2. Filter & Search Controls */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-4">
        {/* Row 1: Search & Region Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="opportunities-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, city (Bengaluru), stack (Cursor)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl text-xs bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-stone-900 shadow-2xs"
            />
          </div>

          {/* Market / Region Toggle */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 font-medium">Market:</span>
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              {[
                { id: 'All', label: 'All Markets' },
                { id: 'India', label: '🇮🇳 India Ecosystem' },
                { id: 'Global', label: '🌐 Global / US' }
              ].map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    selectedRegion === reg.id
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>

            {/* Currency Preference Toggle */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setCurrencyMode('INR')}
                className={`px-2.5 py-1 rounded-lg font-mono font-bold text-xs ${currencyMode === 'INR' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-stone-600'}`}
                title="Display in Indian Lakhs Per Annum (LPA)"
              >
                ₹ LPA
              </button>
              <button
                onClick={() => setCurrencyMode('USD')}
                className={`px-2.5 py-1 rounded-lg font-mono font-bold text-xs ${currencyMode === 'USD' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-stone-600'}`}
                title="Display in US Dollars ($)"
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: India Hubs & Experience & Mode */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100 text-xs">
          {/* India Tech Hub Filter (Visible when looking at India or All) */}
          {selectedRegion !== 'Global' && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-stone-500 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>India Hubs:</span>
              </span>
              <div className="flex flex-wrap items-center gap-1">
                {['All', 'Bengaluru', 'Hyderabad', 'Pune', 'NCR', 'Mumbai', 'Chennai'].map((hub) => (
                  <button
                    key={hub}
                    onClick={() => setSelectedIndiaHub(hub)}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors ${
                      selectedIndiaHub === hub
                        ? 'bg-indigo-100 text-indigo-800 font-semibold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {hub}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {/* Experience Filter */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              {['All', 'Fresher / Entry', 'Mid-Level', 'Senior / Lead'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedExperience(lvl)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedExperience === lvl
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Work Mode Filter */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              {['All', 'Remote', 'Hybrid', 'On-site'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedWorkMode(mode)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedWorkMode === mode
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
          <span>Showing {filteredOpportunities.length} opportunities matching your profile parameters</span>
          <span className="font-semibold text-stone-700">{savedJobs.length} Roles Bookmarked</span>
        </div>
      </div>

      {/* 3. Opportunities List */}
      <div className="space-y-4">
        {filteredOpportunities.map((job) => {
          const isSaved = savedJobs.includes(job.id);
          const matchPercent = job.matchScore || 70;
          const displaySalary = currencyMode === 'INR' && job.inrSalaryRange ? job.inrSalaryRange : job.salaryRange;

          return (
            <div
              key={job.id}
              className={`glass-card rounded-2xl p-5 sm:p-6 border transition-all space-y-4 ${
                matchPercent >= 80 
                  ? 'border-emerald-200/90 shadow-2xs' 
                  : 'border-stone-200/90 shadow-2xs'
              }`}
            >
              {/* Job Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-stone-700">{job.company}</span>
                    <span className="text-stone-300">•</span>
                    <span className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                      {job.companyType}
                    </span>
                    <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      {job.experienceLevel}
                    </span>
                    {job.region === 'India' && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                        <span>🇮🇳 India Hub:</span>
                        <span>{job.indiaHub}</span>
                      </span>
                    )}
                    {job.marketDemandTrend && (
                      <span className="text-[10px] font-medium text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {job.marketDemandTrend}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-bold text-stone-900">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-800">{displaySalary}</span>
                    </span>
                  </div>
                </div>

                {/* Match Score & Bookmark Action */}
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="text-xs font-bold text-stone-700">Skill Match:</span>
                      <span className={`text-sm font-extrabold px-2.5 py-0.5 rounded-full ${
                        matchPercent >= 80
                          ? 'bg-emerald-100 text-emerald-800'
                          : matchPercent >= 65
                          ? 'bg-indigo-100 text-indigo-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {matchPercent}%
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {job.matchedSkills?.length || 0} of {job.requiredSkills.length} skills matched
                    </span>
                  </div>

                  <button
                    id={`bookmark-job-${job.id}`}
                    onClick={() => handleToggleSave(job.id)}
                    className={`p-2 rounded-xl border transition-colors ${
                      isSaved
                        ? 'bg-purple-50 border-purple-300 text-purple-700'
                        : 'bg-white border-stone-200 text-stone-400 hover:text-stone-700'
                    }`}
                    title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                  >
                    {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-stone-600 leading-relaxed">
                {job.summary}
              </p>

              {/* AI Stack & Human Edge Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs">
                  <div className="flex items-center gap-1.5 text-indigo-900 font-semibold mb-1">
                    <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>AI Copilots & Tech Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {job.aiStackUsed.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-[11px] font-mono text-indigo-900 border border-indigo-200/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs">
                  <div className="flex items-center gap-1.5 text-purple-900 font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                    <span>Human Edge Requirement:</span>
                  </div>
                  <p className="text-[11px] text-stone-700 leading-snug">
                    {job.humanEdgeFactor}
                  </p>
                </div>
              </div>

              {/* Skills Match Breakdown */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-800">Skill Portfolio Comparison:</span>
                  <span className="text-[11px] text-stone-500">{job.bridgeAdvice}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Matched Skills */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block">
                      ✓ Skills You Have Verified ({job.matchedSkills?.length || 0}):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {job.matchedSkills?.map((sk, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 text-[11px] border border-emerald-200 font-medium">
                          {sk}
                        </span>
                      ))}
                      {(job.matchedSkills?.length || 0) === 0 && (
                        <span className="text-[11px] text-stone-400 italic">None yet matched in assessment</span>
                      )}
                    </div>
                  </div>

                  {/* Missing Gaps */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-wider block">
                      → Gaps to Close ({job.missingGaps?.length || 0}):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {job.missingGaps?.map((gap, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 text-[11px] border border-amber-200 font-medium">
                          {gap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="text-[11px] text-stone-500">
                  Target Role: <strong>{job.title}</strong> • {job.company}
                </div>

                <div className="flex items-center gap-2">
                  {job.missingGaps && job.missingGaps.length > 0 && (
                    <button
                      onClick={() => onNavigateTab('learning_path')}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>Bridge Gaps in Sprints</span>
                      <ArrowRight className="w-3 h-3 text-stone-400" />
                    </button>
                  )}

                  <button
                    onClick={() => alert(`Application Readiness Check for ${job.title} at ${job.company}:\n\nYour match score is ${matchPercent}%.\n\nRecommended next step: Complete the project assignments in the Learning Path to generate a verified GitHub proof-of-work link before applying!`)}
                    className="px-4 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Simulate Application Readiness</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-stone-200 text-xs text-stone-500">
            No opportunities found matching your search and filter criteria. Try clearing search filters.
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
        <button
          onClick={() => onNavigateTab('learning_path')}
          className="text-xs font-medium text-stone-600 hover:text-stone-900"
        >
          ← Back to Learning & Project Sprints
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('dashboard')}
            id="opportunities-continue-to-dash-btn"
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>Proceed to Adaptation Dashboard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

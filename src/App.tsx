import React, { useState, useEffect } from 'react';
import { ActiveTab, AssessmentData, UserRoleType, UserPersona } from './types';
import { loadAssessment, saveAssessment, defaultAssessment } from './utils/storage';
import { ROLE_PRESETS } from './data/roles';
import { Navbar } from './components/Navbar';
import { LandingView } from './components/LandingView';
import { AssessmentView } from './components/AssessmentView';
import { AIImpactView } from './components/AIImpactView';
import { HumanEdgeView } from './components/HumanEdgeView';
import { SkillGapView } from './components/SkillGapView';
import { CareerBridgeView } from './components/CareerBridgeView';
import { LearningPathView } from './components/LearningPathView';
import { WorkspaceView } from './components/WorkspaceView';
import { CareerPathsView } from './components/CareerPathsView';
import { DashboardView } from './components/DashboardView';
import { SkillTranslatorView } from './components/SkillTranslatorView';
import { OpportunitiesView } from './components/OpportunitiesView';
import { EmployerView } from './components/EmployerView';
import { Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('landing');
  const [assessment, setAssessment] = useState<AssessmentData>(() => loadAssessment());

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleAssessmentSubmit = (updatedData: AssessmentData) => {
    setAssessment(updatedData);
    saveAssessment(updatedData);
    setActiveTab('ai_impact');
  };

  const handleSelectPersona = (persona: UserPersona) => {
    let updatedRole = assessment.role;
    let updatedGoal = assessment.careerGoal;
    let updatedRoleId: UserRoleType = assessment.roleId;

    if (persona === 'student') {
      updatedRole = `${assessment.studentProfile?.degree || 'B.Tech'} Student in ${assessment.studentProfile?.specialization || 'Computer Science'}`;
      updatedGoal = 'Secure high-impact AI-augmented Software Engineer campus offer in Bangalore / Hyderabad';
      updatedRoleId = 'software_engineer';
    } else if (persona === 'professional') {
      updatedRole = 'Software Engineer (3–5 Years)';
      updatedGoal = 'Evolve from standard maintenance coder to high-leverage AI Solutions Architect';
      updatedRoleId = 'software_engineer';
    } else if (persona === 'career_changer') {
      updatedRole = 'Financial Operations Analyst (Pivoting to AI)';
      updatedGoal = 'Pivot into Fintech AI Workflow Orchestrator without compensation penalty';
      updatedRoleId = 'financial_analyst';
    }

    const updated: AssessmentData = {
      ...assessment,
      userPersona: persona,
      role: updatedRole,
      roleId: updatedRoleId,
      careerGoal: updatedGoal
    };

    setAssessment(updated);
    saveAssessment(updated);
    setActiveTab('assessment');
  };

  const handleSelectRolePreset = (presetId: string) => {
    const preset = ROLE_PRESETS.find(p => p.id === presetId);
    if (preset) {
      const updated: AssessmentData = {
        ...assessment,
        roleId: preset.id as UserRoleType,
        role: preset.title,
        industry: preset.industry,
        currentSkills: [...preset.typicalSkills],
        careerGoal: preset.suggestedGoal,
        targetRoleTitle: preset.targetRoleTitle
      };
      setAssessment(updated);
      saveAssessment(updated);
      setActiveTab('career_bridge');
    }
  };

  const handleSetTargetRole = (newTargetTitle: string) => {
    const updated = {
      ...assessment,
      targetRoleTitle: newTargetTitle
    };
    setAssessment(updated);
    saveAssessment(updated);
  };

  const handleReset = () => {
    if (window.confirm('Reset assessment to defaults? Your custom changes will be refreshed.')) {
      setAssessment(defaultAssessment);
      saveAssessment(defaultAssessment);
      localStorage.removeItem('workbridge_completed_weeks');
      localStorage.removeItem('workbridge_saved_skills');
      localStorage.removeItem('workbridge_target_path');
      setActiveTab('landing');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-stone-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        assessment={assessment}
        onReset={handleReset}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'landing' && (
          <LandingView
            onStartAssessment={() => setActiveTab('assessment')}
            onSelectRolePreset={handleSelectRolePreset}
            onSelectPersona={handleSelectPersona}
            setActiveTab={setActiveTab}
            assessment={assessment}
          />
        )}

        {activeTab === 'assessment' && (
          <AssessmentView
            initialData={assessment}
            onSaveAndContinue={handleAssessmentSubmit}
          />
        )}

        {activeTab === 'ai_impact' && (
          <AIImpactView
            assessment={assessment}
            onContinue={() => setActiveTab('human_advantage')}
          />
        )}

        {(activeTab === 'human_edge' || activeTab === 'human_advantage') && (
          <HumanEdgeView
            assessment={assessment}
            onContinue={() => setActiveTab('skill_translator')}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'skill_translator' && (
          <SkillTranslatorView
            assessment={assessment}
            onUpdateSkills={(newSkills) => {
              const updated = {
                ...assessment,
                currentSkills: Array.from(new Set([...assessment.currentSkills, ...newSkills]))
              };
              setAssessment(updated);
              saveAssessment(updated);
            }}
            onNavigateTab={setActiveTab}
            onContinue={() => setActiveTab('skill_gap')}
          />
        )}

        {activeTab === 'skill_gap' && (
          <SkillGapView
            assessment={assessment}
            onContinue={() => setActiveTab('career_bridge')}
          />
        )}

        {activeTab === 'career_bridge' && (
          <CareerBridgeView
            assessment={assessment}
            onNavigateTab={setActiveTab}
          />
        )}

        {(activeTab === 'learning_path' || activeTab === 'learning_projects') && (
          <LearningPathView
            assessment={assessment}
            onContinue={() => setActiveTab('opportunities')}
          />
        )}

        {activeTab === 'opportunities' && (
          <OpportunitiesView
            assessment={assessment}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'workspace' && (
          <WorkspaceView
            assessment={assessment}
            onContinue={() => setActiveTab('career_paths')}
          />
        )}

        {activeTab === 'career_paths' && (
          <CareerPathsView
            assessment={assessment}
            onSetTargetRole={handleSetTargetRole}
            onContinue={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView
            assessment={assessment}
            setActiveTab={setActiveTab}
            onUpdateAssessment={(updated) => {
              setAssessment(updated);
              saveAssessment(updated);
            }}
          />
        )}

        {activeTab === 'employer' && (
          <EmployerView
            onNavigateTab={setActiveTab}
          />
        )}
      </main>

      {/* Calm, Human-Centered Footer */}
      <footer className="border-t border-stone-200/80 bg-white/60 backdrop-blur-sm py-8 mt-16 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-stone-900 text-white flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-indigo-300" />
            </div>
            <span className="font-semibold text-stone-800">Workbridge AI</span>
            <span className="text-stone-300">|</span>
            <span className="italic font-serif-heading text-stone-600">
              "AI is changing work. Let's change with it."
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <span>Human-In-The-Loop Framework</span>
            <span>•</span>
            <button
              onClick={() => setActiveTab('workspace')}
              className="text-indigo-600 hover:underline font-medium"
            >
              Test Workspace Demo
            </button>
            <span>•</span>
            <button
              onClick={handleReset}
              className="hover:text-stone-800"
            >
              Reset Session
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

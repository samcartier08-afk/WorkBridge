import { EMPLOYER_DEPARTMENT_AUDITS } from '../data/employerData';
import { EmployerDepartmentAudit, EmployerTransitionMetrics } from '../types';

export const employerService = {
  getDepartmentAudits(): EmployerDepartmentAudit[] {
    return EMPLOYER_DEPARTMENT_AUDITS;
  },

  calculateTransitionROI(teamSize: number): EmployerTransitionMetrics {
    // Industry benchmarks for tech/knowledge workers:
    // Severance, recruiter placement fee (20-25% of salary), onboarding loss = ~$55,000 to $65,000
    const avgReplacementCost = 58000;
    // Internal Workbridge 6-8 week sprint (tooling + mentorship + assessment) = ~$4,200
    const avgReskillingCost = 4200;
    const netPerEmployee = avgReplacementCost - avgReskillingCost;

    return {
      totalEmployees: teamSize,
      averageExternalReplacementCost: avgReplacementCost,
      averageInternalReskillingCost: avgReskillingCost,
      projectedSavings: teamSize * netPerEmployee,
      retainedKnowledgeScore: 98 // percentage of institutional knowledge retained vs lost in churn
    };
  }
};

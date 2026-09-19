import { MOCK_JOB_OPPORTUNITIES } from '../data/opportunitiesData';
import { JobOpportunity, AssessmentData } from '../types';

const STORAGE_SAVED_JOBS = 'workbridge_saved_job_ids';

/**
 * Service layer for Job Opportunities & AI Workforce matching.
 * Structured to cleanly connect to real-world job aggregation APIs (e.g. Adzuna,
 * LinkedIn Jobs API, Greenhouse/Lever ATS endpoints, or custom enterprise scrapers).
 */
export const jobOpportunitiesService = {
  /**
   * Fetch all opportunities, annotated with match score and skill gaps against user assessment
   */
  getOpportunities(assessment: AssessmentData): JobOpportunity[] {
    const savedIds = this.getSavedJobIds();
    const userSkills = assessment.currentSkills.map(s => s.toLowerCase());

    return MOCK_JOB_OPPORTUNITIES.map(job => {
      const required = job.requiredSkills;
      const matched = required.filter(req => 
        userSkills.some(userSk => userSk.includes(req.toLowerCase()) || req.toLowerCase().includes(userSk))
      );
      const missing = required.filter(req => !matched.includes(req));

      // Calculate match percentage (baseline score weighted between matched skills and user domain match)
      const isRoleRelated = 
        job.title.toLowerCase().includes(assessment.role.toLowerCase()) ||
        assessment.role.toLowerCase().includes(job.title.toLowerCase()) ||
        job.requiredSkills.some(rs => userSkills.some(us => us.includes(rs.toLowerCase())));

      let calculatedScore = Math.round((matched.length / Math.max(required.length, 1)) * 100);
      if (isRoleRelated && calculatedScore < 60) {
        calculatedScore = Math.min(68, calculatedScore + 25);
      }
      if (calculatedScore < 45) {
        calculatedScore = 45 + Math.round(matched.length * 10);
      }
      calculatedScore = Math.min(96, Math.max(35, calculatedScore));

      let bridgeAdvice = 'Mastering the identified missing tools will raise your application match to 90%+.';
      if (missing.length > 0) {
        bridgeAdvice = `Focus on acquiring "${missing[0]}" in the next 2-week learning sprint to qualify for interview screening.`;
      } else {
        bridgeAdvice = 'Exceptional skill alignment. Your profile is ready for immediate referral submission.';
      }

      return {
        ...job,
        matchScore: calculatedScore,
        matchedSkills: matched,
        missingGaps: missing,
        bridgeAdvice,
        isSaved: savedIds.includes(job.id)
      };
    }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  },

  getSavedJobIds(): string[] {
    try {
      const stored = localStorage.getItem(STORAGE_SAVED_JOBS);
      return stored ? JSON.parse(stored) : ['opp_eng_01'];
    } catch {
      return ['opp_eng_01'];
    }
  },

  toggleSaveJob(jobId: string): boolean {
    try {
      const current = this.getSavedJobIds();
      let updated: string[];
      let isNowSaved = false;
      if (current.includes(jobId)) {
        updated = current.filter(id => id !== jobId);
        isNowSaved = false;
      } else {
        updated = [...current, jobId];
        isNowSaved = true;
      }
      localStorage.setItem(STORAGE_SAVED_JOBS, JSON.stringify(updated));
      return isNowSaved;
    } catch {
      return false;
    }
  },

  /**
   * Structure schema documentation for future external API integration
   */
  getFutureAPIConnectorSchema() {
    return {
      version: '1.0.0',
      description: 'Standardized Workbridge AI Job Aggregator Schema for ATS & External Job Boards',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/opportunities/search',
          queryParams: {
            roleQuery: 'string (e.g. "Software Engineer")',
            skills: 'string[] (e.g. ["React", "AI Coding", "API Review"])',
            experienceLevel: 'fresher | early | mid | senior',
            workMode: 'remote | hybrid | on-site',
            minMatchPercentage: 'number (0-100)'
          },
          externalIntegrationsSupported: [
            'Adzuna Jobs Search API v1',
            'LinkedIn Talent Solutions API',
            'Greenhouse Harvest API',
            'Lever Postings API'
          ]
        }
      ]
    };
  }
};

export const getJobOpportunities = (assessment: AssessmentData): JobOpportunity[] => {
  return jobOpportunitiesService.getOpportunities(assessment);
};

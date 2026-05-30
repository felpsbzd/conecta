import { Professional } from '../../../types/professional.types';
import { Job } from '../../../types/job.types';
import { Company } from '../../../types/company.types';
import { MatchResult } from '../../../types/match.types';

export function calculateMatch(professional: Professional, job: Job, company: Company): MatchResult {
  const matchedSkills = professional.skills.filter(skill =>
    job.requirements.map(r => r.toLowerCase()).includes(skill.toLowerCase())
  );

  const score = Math.round((matchedSkills.length / job.requirements.length) * 100);

  return {
    professional,
    job,
    company,
    matchedSkills,
    score,
  };
}

export function findAllMatches(professional: Professional, jobs: Job[], companies: Company[]): MatchResult[] {
  return jobs
    .map(job => {
      const company = companies.find(c => c.id === job.companyId)!;
      return calculateMatch(professional, job, company);
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
}
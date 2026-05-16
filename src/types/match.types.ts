import { Professional } from "./professional.types";
import { Job } from "./job.types";
import { Company } from "./company.types";
export interface MatchResult {
    professional : Professional;
    job: Job;
    company: Company;
    matchedSkills: string[];
    score: number;
}
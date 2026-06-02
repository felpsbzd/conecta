import { Professional } from "../types/professional.types";
import { Job } from "../types/job.types";
import { MatchResult } from "../types/match.types";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  ProfessionalProfile: undefined;
  ProfessionalRegistration: undefined;
  CompanyRegistration: undefined;
  MatchResults: {
    professional: Professional;
    jobs: Job[];
  };
  JobDetail: {
    matchResult: MatchResult;
  };
};

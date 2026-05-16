import { Professional } from "../types/professional.types";
import { Job } from "../types/job.types";

export type RootStackParamList = {
    Home: undefined;
    ProfessionalRegistration: undefined;
    CompanyRegistration: undefined;
    MatchResults: { professional: Professional; jobs: Job[]; };
};
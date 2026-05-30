import AsyncStorage from '@react-native-async-storage/async-storage';
import { Company } from '../../../types/company.types';
import { Job } from '../../../types/job.types';

const COMPANIES_KEY = 'companies';
const JOBS_KEY = 'jobs';

export async function saveCompany(company: Company): Promise<void> {
  const existing = await getCompanies();
  const updated = [...existing, company];
  await AsyncStorage.setItem(COMPANIES_KEY, JSON.stringify(updated));
}

export async function getCompanies(): Promise<Company[]> {
  const data = await AsyncStorage.getItem(COMPANIES_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveJob(job: Job): Promise<void> {
  const existing = await getJobs();
  const updated = [...existing, job];
  await AsyncStorage.setItem(JOBS_KEY, JSON.stringify(updated));
}

export async function getJobs(): Promise<Job[]> {
  const data = await AsyncStorage.getItem(JOBS_KEY);
  return data ? JSON.parse(data) : [];
}
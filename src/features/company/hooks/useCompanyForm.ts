import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../../context/AppContext';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { saveCompany, saveJob } from '../services/company.service';
import { Company } from '../../../types/company.types';
import { Job } from '../../../types/job.types';

type CompanyFormNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CompanyRegistration'>;

export function useCompanyForm() {
  const { dispatch } = useAppContext();
  const navigation = useNavigation<CompanyFormNavigationProp>();

  const [companyName, setCompanyName] = useState('Tech Corp');
  const [jobTitle, setJobTitle] = useState('Desenvolvedor Full Stack');
  const [requirements, setRequirements] = useState<string[]>(['Java', 'TypeScript']);
  const [currentRequirement, setCurrentRequirement] = useState('');
  const [error, setError] = useState('');

  function handleAddRequirement() {
    if (currentRequirement.trim() === '') return;
    setRequirements(prev => [...prev, currentRequirement.trim()]);
    setCurrentRequirement('');
  }

  function handleRemoveRequirement(index: number) {
    setRequirements(prev => prev.filter((_, i) => i !== index));
  }

 async function handleSubmit() {
  if (companyName.trim() === '') {
    setError('Please enter the company name.');
    return;
  }
  if (jobTitle.trim() === '') {
    setError('Please enter the job title.');
    return;
  }
  if (requirements.length === 0) {
    setError('Please add at least one requirement.');
    return;
  }

  setError('');
  const company: Company = {
    id: Date.now().toString(),
    name: companyName,
  };

  const job: Job = {
    id: (Date.now() + 1).toString(),
    companyId: company.id,
    title: jobTitle,
    requirements,
  };

  await saveCompany(company);
  await saveJob(job);
  dispatch({ type: 'SET_COMPANY', payload: company });
  navigation.navigate('Welcome');
}
return {
    companyName, setCompanyName,
    jobTitle, setJobTitle,
    requirements,
    currentRequirement, setCurrentRequirement,
    handleAddRequirement,
    handleRemoveRequirement,
    handleSubmit,
    error,
  };
}
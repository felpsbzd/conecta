import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../../context/AppContext';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { saveProfessional } from '../services/professional.service';
import { Professional } from '../../../types/professional.types';

type ProfessionalFormNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfessionalRegistration'>;

export function useProfessionalForm() {
  const { dispatch } = useAppContext();
  const navigation = useNavigation<ProfessionalFormNavigationProp>();
  const [name, setName] = useState('Felipe Silva');
  const [profession, setProfession] = useState('Desenvolvedor');
  const [skills, setSkills] = useState<string[]>(['Java', 'TypeScript', 'React']);
  const [currentSkill, setCurrentSkill] = useState('');
  const [error, setError] = useState('');

  function handleAddSkill() {
    if (currentSkill.trim() === '') return;
    setSkills(prev => [...prev, currentSkill.trim()]);
    setCurrentSkill('');
  }

  function handleRemoveSkill(index: number) {
    setSkills(prev => prev.filter((_, i) => i !== index));
  }



async function handleSubmit() {
  if (name.trim() === '') {
    setError('Please enter your name.');
    return;
  }
  if (profession.trim() === '') {
    setError('Please enter your profession.');
    return;
  }
  if (skills.length === 0) {
    setError('Please add at least one skill.');
    return;
  }

  setError('');
  const professional: Professional = {
    id: Date.now().toString(),
    name,
    profession,
    skills,
  };

  await saveProfessional(professional);
  dispatch({ type: 'SET_PROFESSIONAL', payload: professional });
  navigation.navigate('MatchResults', { professional, jobs: [] });
}


  return {
    name, setName,
  profession, setProfession,
  skills,
  currentSkill, setCurrentSkill,
  handleAddSkill,
  handleRemoveSkill,
  handleSubmit,
  error,
  };
}
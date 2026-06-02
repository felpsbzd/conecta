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
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
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
    setError('Informe seu nome.');
    return;
  }
  if (profession.trim() === '') {
    setError('Informe sua profissão.');
    return;
  }
  if (skills.length === 0) {
    setError('Adicione pelo menos uma habilidade.');
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
  navigation.navigate('Home');
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

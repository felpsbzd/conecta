import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { Alert } from 'react-native';

type JobDetailRouteProp = NativeStackScreenProps<RootStackParamList, 'JobDetail'>['route'];
type JobDetailNavigationProp = NativeStackNavigationProp<RootStackParamList, 'JobDetail'>;

export function useJobDetail() {
  const route = useRoute<JobDetailRouteProp>();
  const navigation = useNavigation<JobDetailNavigationProp>();
  const { matchResult } = route.params;
  const matchedSkillNames = matchResult.matchedSkills.map(skill => skill.toLowerCase());
  const requirements = matchResult.job.requirements.map(requirement => ({
    name: requirement,
    matched: matchedSkillNames.includes(requirement.toLowerCase()),
  }));
  const isPerfectMatch = matchResult.score === 100;

  function handleApply() {
    Alert.alert(
      'Interesse Enviado! ',
      `Seu interesse na vaga de ${matchResult.job.title} na empresa ${matchResult.company.name} foi registrado. Em breve entraremos em contato!`,
      [{ text: 'OK', onPress: () => navigation.navigate('Welcome') }]
    );
  }

  return {
    matchResult,
    handleApply,
    isPerfectMatch,
    requirements,
  };
}

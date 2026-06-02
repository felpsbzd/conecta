import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../../context/AppContext';
import { RootStackParamList } from '../../../navigation/navigation.types';

type ProfileNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfessionalProfile'>;

export function useProfessionalProfile() {
  const { state } = useAppContext();
  const navigation = useNavigation<ProfileNavigationProp>();

  function handleFindJobs() {
    if (!state.professional) return;
    navigation.navigate('MatchResults', {
      professional: state.professional,
      jobs: [],
    });
  }

  return {
    professional: state.professional,
    handleFindJobs,
  };
}

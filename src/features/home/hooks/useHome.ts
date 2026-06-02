import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../../context/AppContext';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { UserType } from '../../../types/user.types';
import { clearStoredSession } from '../services/appStorage.service';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function useHome() {
  const { state, dispatch } = useAppContext();
  const navigation = useNavigation<HomeNavigationProp>();
  const isProfessional = state.userType === UserType.PROFESSIONAL;
  const displayName = isProfessional ? state.professional?.name : state.company?.name;
  const professional = state.professional;

  async function handleSwitchAccount() {
    await clearStoredSession();
    dispatch({ type: 'RESET' });
    navigation.replace('Welcome');
  }

  function handleFindJobs() {
    if (!professional) return;
    navigation.navigate('MatchResults', {
      professional,
      jobs: [],
    });
  }

  function handleOpenProfile() {
    navigation.navigate('ProfessionalProfile');
  }

  function handleCreateJob() {
    navigation.navigate('CompanyRegistration');
  }

  return {
    displayName,
    handleCreateJob,
    handleFindJobs,
    handleOpenProfile,
    handleSwitchAccount,
    isProfessional,
  };
}

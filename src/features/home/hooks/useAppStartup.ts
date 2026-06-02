import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { getProfessionals } from '../../professional/services/professional.service';
import { getCompanies } from '../../company/services/company.service';
import { useAppContext } from '../../../context/AppContext';
import { UserType } from '../../../types/user.types';
import { consumeStartupSkip } from '../services/appStorage.service';

type StartupNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useAppStartup() {
  const navigation = useNavigation<StartupNavigationProp>();
  const { dispatch } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const shouldSkipStartup = await consumeStartupSkip();

      if (shouldSkipStartup) {
        return;
      }

      const professionals = await getProfessionals();
      const companies = await getCompanies();

      if (professionals.length > 0) {
        dispatch({ type: 'SET_USER_TYPE', payload: UserType.PROFESSIONAL });
        dispatch({ type: 'SET_PROFESSIONAL', payload: professionals[0] });
        navigation.replace('Home');
      } else if (companies.length > 0) {
        dispatch({ type: 'SET_USER_TYPE', payload: UserType.COMPANY });
        dispatch({ type: 'SET_COMPANY', payload: companies[0] });
        navigation.replace('Home');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}

import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { MatchResult } from '../../../types/match.types';
import { findAllMatches } from '../services/matchEngine.service';
import { getJobs } from '../../company/services/company.service';
import { getCompanies } from '../../company/services/company.service';

type MatchResultsRouteProp = NativeStackScreenProps<RootStackParamList, 'MatchResults'>['route'];
type MatchResultsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MatchResults'>;

export function useMatchResults() {
  const route = useRoute<MatchResultsRouteProp>();
  const navigation = useNavigation<MatchResultsNavigationProp>();
  const { professional } = route.params;

  const [results, setResults] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      const jobs = await getJobs();
      const companies = await getCompanies();
      const matches = findAllMatches(professional, jobs, companies);
      setResults(matches);
      setLoading(false);
    }

    loadMatches();
  }, []);

  function handleOpenJob(matchResult: MatchResult) {
    navigation.navigate('JobDetail', { matchResult });
  }

  return { results, loading, professional, handleOpenJob };
}

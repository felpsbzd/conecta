import AsyncStorage from '@react-native-async-storage/async-storage';
import { Professional } from '../../../types/professional.types';

const PROFESSIONALS_KEY = 'professionals';

export async function saveProfessional(professional: Professional): Promise<void> {
  const existing = await getProfessionals();
  const updated = [...existing, professional];
  await AsyncStorage.setItem(PROFESSIONALS_KEY, JSON.stringify(updated));
}

export async function getProfessionals(): Promise<Professional[]> {
  const data = await AsyncStorage.getItem(PROFESSIONALS_KEY);
  return data ? JSON.parse(data) : [];
}
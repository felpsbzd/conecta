import AsyncStorage from '@react-native-async-storage/async-storage';

export async function clearStoredSession(): Promise<void> {
  await AsyncStorage.clear();
}

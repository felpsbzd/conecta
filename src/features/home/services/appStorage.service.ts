import AsyncStorage from '@react-native-async-storage/async-storage';

const SKIP_STARTUP_KEY = 'skipStartupOnce';

export async function requestAccountSwitch(): Promise<void> {
  await AsyncStorage.setItem(SKIP_STARTUP_KEY, 'true');
}

export async function consumeStartupSkip(): Promise<boolean> {
  const shouldSkip = await AsyncStorage.getItem(SKIP_STARTUP_KEY);

  if (shouldSkip !== 'true') {
    return false;
  }

  await AsyncStorage.removeItem(SKIP_STARTUP_KEY);
  return true;
}

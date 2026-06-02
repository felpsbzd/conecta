import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import{RootStackParamList} from './navigation.types';
import WelcomeScreen from '../features/home/screens/WelcomeScreen';
import ProfessionalRegistrationScreen from '../features/professional/screens/ProfessionalRegistrationScreen';
import CompanyRegistrationScreen from '../features/company/screens/CompanyRegistrationScreen';
import MatchResultsScreen from '../features/match/screens/MatchResultsScreen';
import JobDetailScreen from '../features/match/screens/JobDetailScreen';
import HomeScreen from '../features/home/screens/HomeScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfessionalRegistration" component={ProfessionalRegistrationScreen} />
        <Stack.Screen name="CompanyRegistration" component={CompanyRegistrationScreen} />
        <Stack.Screen name="MatchResults" component={MatchResultsScreen} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

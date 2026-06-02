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
import ProfessionalProfileScreen from '../features/professional/screens/ProfessionalProfileScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#F8FAFC' },
          headerTintColor: '#0F172A',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#F8FAFC' },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Boas-vindas' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="ProfessionalProfile" component={ProfessionalProfileScreen} options={{ title: 'Meu Perfil' }} />
        <Stack.Screen name="ProfessionalRegistration" component={ProfessionalRegistrationScreen} options={{ title: 'Cadastro Profissional' }} />
        <Stack.Screen name="CompanyRegistration" component={CompanyRegistrationScreen} options={{ title: 'Cadastro da Empresa' }} />
        <Stack.Screen name="MatchResults" component={MatchResultsScreen} options={{ title: 'Vagas Compatíveis' }} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} options={{ title: 'Detalhes da Vaga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

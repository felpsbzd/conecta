import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppContext } from '../../../context/AppContext';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { UserType } from '../../../types/user.types';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function HomeScreen() {
  const { state } = useAppContext();
  const navigation = useNavigation<HomeNavigationProp>();

  const isProfessional = state.userType === UserType.PROFESSIONAL;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Olá, {isProfessional ? state.professional?.name : state.company?.name}! 👋
      </Text>
      <Text style={styles.subtitle}>
        {isProfessional ? 'Encontre vagas compatíveis com seu perfil' : 'Gerencie suas vagas abertas'}
      </Text>

      {isProfessional ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MatchResults', {
            professional: state.professional!,
            jobs: [],
          })}
        >
          <Text style={styles.buttonText}>Buscar Vagas 🔍</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, styles.companyButton]}
          onPress={() => navigation.navigate('CompanyRegistration')}
        >
          <Text style={styles.buttonText}>Publicar Nova Vaga ➕</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Welcome')}>
        <Text style={styles.logoutText}>Trocar de conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  companyButton: {
    backgroundColor: '#16A34A',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 48,
    left: 24,
    right: 24,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  logoutText: {
    color: '#666',
    fontSize: 16,
  },
});
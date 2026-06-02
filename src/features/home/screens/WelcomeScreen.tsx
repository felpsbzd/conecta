import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useWelcome } from '../hooks/useWelcome';
import { useAppStartup } from '../hooks/useAppStartup';
export default function WelcomeScreen() {
  const { handleProfessionalPress, handleCompanyPress } = useWelcome();
  useAppStartup();

  return (
    <View style={styles.container}>
      <View style={styles.brandCard}>
        <Text style={styles.label}>Match profissional</Text>
        <Text style={styles.title}>ConectaPro</Text>
        <Text style={styles.subtitle}>Conecte talentos, empresas e oportunidades em poucos passos.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleProfessionalPress}>
        <Text style={styles.buttonText}>Sou profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.companyButton]} onPress={handleCompanyPress}>
        <Text style={styles.buttonText}>Sou empresa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  brandCard: {
    backgroundColor: '#0F172A',
    borderRadius: 8,
    marginBottom: 28,
    padding: 24,
  },
  label: {
    color: '#93C5FD',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 23,
  },
  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  companyButton: {
    backgroundColor: '#16A34A',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

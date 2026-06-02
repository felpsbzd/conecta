import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useHome } from '../hooks/useHome';
export default function HomeScreen() {
  const { handleProfessionalPress, handleCompanyPress } = useHome();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConectaPro</Text>
      <Text style={styles.subtitle}>Conecte profissionais com oportunidades</Text>
      <TouchableOpacity style={styles.button} onPress={handleProfessionalPress}>
        <Text style={styles.buttonText}>Sou um Profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.companyButton]} onPress={handleCompanyPress}>
        <Text style={styles.buttonText}>Sou uma Empresa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
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
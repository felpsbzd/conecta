import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useHome } from '../hooks/useHome';

export default function HomeScreen() {
  const {
    displayName,
    handleCreateJob,
    handleFindJobs,
    handleOpenProfile,
    handleSwitchAccount,
    isProfessional,
  } = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.kicker}>ConectaPro</Text>
        <Text style={styles.greeting}>Olá, {displayName}.</Text>
        <Text style={styles.subtitle}>
          {isProfessional
            ? 'Veja seu perfil e encontre vagas com maior compatibilidade.'
            : 'Publique oportunidades e conecte sua empresa a bons candidatos.'}
        </Text>
      </View>

      <View style={styles.actions}>
        {isProfessional ? (
          <>
            <TouchableOpacity style={styles.primaryButton} onPress={handleFindJobs}>
              <Text style={styles.primaryButtonText}>Buscar vagas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleOpenProfile}>
              <Text style={styles.secondaryButtonText}>Meu perfil</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.primaryButton} onPress={handleCreateJob}>
            <Text style={styles.primaryButtonText}>Publicar nova vaga</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleSwitchAccount}>
        <Text style={styles.logoutText}>Trocar de conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  hero: {
    backgroundColor: '#0F172A',
    borderRadius: 8,
    padding: 22,
    marginTop: 18,
    marginBottom: 24,
  },
  kicker: {
    color: '#93C5FD',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 23,
  },
  actions: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#BFDBFE',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '800',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 48,
    left: 24,
    right: 24,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoutText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '700',
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useProfessionalProfile } from '../hooks/useProfessionalProfile';

export default function ProfessionalProfileScreen() {
  const { professional, handleFindJobs } = useProfessionalProfile();

  if (!professional) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyTitle}>Perfil não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Profissional</Text>
        <Text style={styles.name}>{professional.name}</Text>
        <Text style={styles.profession}>{professional.profession}</Text>
      </View>

      <Text style={styles.sectionTitle}>Habilidades cadastradas</Text>
      <FlatList
        data={professional.skills}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={styles.skillRow}
        renderItem={({ item }) => (
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleFindJobs}>
        <Text style={styles.buttonText}>Buscar vagas compatíveis</Text>
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
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  emptyTitle: {
    color: '#334155',
    fontSize: 18,
    fontWeight: '700',
  },
  headerCard: {
    backgroundColor: '#0F172A',
    borderRadius: 8,
    padding: 20,
    marginBottom: 28,
  },
  label: {
    color: '#93C5FD',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },
  profession: {
    color: '#CBD5E1',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  skillRow: {
    gap: 10,
  },
  skillBadge: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  skillText: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});

import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useMatchResults } from '../hooks/useMatchResults';
import { MatchResult } from '../../../types/match.types';

export default function MatchResultsScreen() {
  const { results, loading, professional, handleOpenJob } = useMatchResults();
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas para {professional.name}</Text>
      <Text style={styles.subtitle}>{results.length} vaga{results.length !== 1 ? 's' : ''} encontrada{results.length !== 1 ? 's' : ''}</Text>

      {results.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Nenhuma vaga encontrada ainda.</Text>
          <Text style={styles.emptySubtext}>Tente adicionar mais habilidades!</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }: { item: MatchResult }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleOpenJob(item)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.jobTitle}>{item.job.title}</Text>
                <View style={[styles.scoreBadge, item.score === 100 ? styles.perfectBadge : styles.defaultBadge]}>
                  <Text style={styles.scoreText}>{item.score}%</Text>
                </View>
              </View>
              <Text style={styles.companyName}>{item.company.name}</Text>
              <Text style={styles.matchedLabel}>Habilidades compatíveis:</Text>
              <View style={styles.skillsRow}>
                {item.matchedSkills.map((skill, i) => (
                  <View key={i} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          )}
        />
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  scoreBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  defaultBadge: {
    backgroundColor: '#2563EB',
  },
  perfectBadge: {
    backgroundColor: '#16A34A',
  },
  scoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  matchedLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  skillText: {
    color: '#1D4ED8',
    fontSize: 13,
  },
});

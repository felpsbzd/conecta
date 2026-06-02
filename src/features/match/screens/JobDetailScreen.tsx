import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useJobDetail } from '../hooks/useJobDetail';

export default function JobDetailScreen() {
  const { matchResult, handleApply, isPerfectMatch, requirements } = useJobDetail();
  const { job, company, matchedSkills, score } = matchResult;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.companyName}>{company.name}</Text>
        <View style={[styles.scoreBadge, isPerfectMatch ? styles.perfectBadge : styles.defaultBadge]}>
          <Text style={styles.scoreText}>{score}% compatível</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos da Vaga</Text>
        {requirements.map((requirement) => (
          <View
            key={requirement.name}
            style={[
              styles.requirementItem,
              requirement.matched ? styles.matchedRequirement : styles.unmatchedRequirement,
            ]}
          >
            <Text style={styles.requirementText}>{requirement.name}</Text>
            <Text style={requirement.matched ? styles.matchedIcon : styles.unmatchedIcon}>
              {requirement.matched ? '✓' : '×'}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suas Habilidades Compatíveis</Text>
        <View style={styles.skillsRow}>
          {matchedSkills.map((skill, i) => (
            <View key={i} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyText}>Tenho Interesse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  jobTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
  },
  scoreBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  defaultBadge: { backgroundColor: '#2563EB' },
  perfectBadge: { backgroundColor: '#16A34A' },
  scoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  requirementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    backgroundColor: '#F8FAFC',
    marginBottom: 8,
  },
  matchedRequirement: { borderLeftColor: '#16A34A' },
  unmatchedRequirement: { borderLeftColor: '#EF4444' },
  requirementText: { fontSize: 16 },
  matchedIcon: {
    color: '#16A34A',
    fontWeight: 'bold',
  },
  unmatchedIcon: {
    color: '#EF4444',
    fontWeight: 'bold',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillText: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#16A34A',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 48,
  },
  applyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

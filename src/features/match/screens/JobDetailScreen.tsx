import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useJobDetail } from '../hooks/useJobDetail';

export default function JobDetailScreen() {
  const { matchResult, handleApply } = useJobDetail();
  const { job, company, matchedSkills, score } = matchResult;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.companyName}>{company.name}</Text>
        <View style={[styles.scoreBadge, { backgroundColor: score === 100 ? '#16A34A' : '#2563EB' }]}>
          <Text style={styles.scoreText}>{score}% compatível</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos da Vaga</Text>
        {job.requirements.map((req, i) => {
          const matched = matchedSkills.map(s => s.toLowerCase()).includes(req.toLowerCase());
          return (
            <View key={i} style={[styles.requirementItem, { borderLeftColor: matched ? '#16A34A' : '#EF4444' }]}>
              <Text style={styles.requirementText}>{req}</Text>
              <Text style={{ color: matched ? '#16A34A' : '#EF4444', fontWeight: 'bold' }}>
                {matched ? '✓' : '✗'}
              </Text>
            </View>
          );
        })}
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
    padding: 24,
    paddingTop: 48,
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
  requirementText: {
    fontSize: 16,
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
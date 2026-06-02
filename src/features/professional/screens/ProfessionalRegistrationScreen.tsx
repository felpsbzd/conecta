import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useProfessionalForm } from '../hooks/useProfessionalForm';

export default function ProfessionalRegistrationScreen() {
  const {
    name, setName,
    profession, setProfession,
    skills,
    currentSkill, setCurrentSkill,
    handleAddSkill,
    handleRemoveSkill,
    handleSubmit,
    error,
  } = useProfessionalForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Profissional</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua profissão"
        value={profession}
        onChangeText={setProfession}
      />

      <View style={styles.skillRow}>
        <TextInput
          style={[styles.input, styles.skillInput]}
          placeholder="Adicionar habilidade"
          value={currentSkill}
          onChangeText={setCurrentSkill}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddSkill}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={skills}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveSkill(index)}>
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Encontrar Vagas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  skillRow: {
    flexDirection: 'row',
    gap: 8,
  },
  skillInput: {
    flex: 1,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#2563EB',
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 16,
  },
  removeText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
  color: '#EF4444',
  fontSize: 14,
  marginBottom: 8,
  textAlign: 'center',
},
  submitButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
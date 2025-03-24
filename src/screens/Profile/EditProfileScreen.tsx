import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Alex Dupont');
  const [email, setEmail] = useState('alex.dupont@example.com');
  const [avatar, setAvatar] = useState('A');

  const handleSave = () => {
    // Simuler la sauvegarde
    Alert.alert(
      'Profil mis à jour',
      'Vos informations ont été mises à jour avec succès.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{avatar}</Text>
          </View>
          <TouchableOpacity style={styles.changeAvatarButton}>
            <Text style={styles.changeAvatarText}>Changer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nom</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.sectionTitle}>Langues parlées</Text>

          <View style={styles.languageItem}>
            <Text style={styles.languageFlag}>🇫🇷</Text>
            <View style={styles.languageInfo}>
              <Text style={styles.languageName}>Français</Text>
              <Text style={styles.languageLevel}>Natif</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Ionicons name='close-circle' size={24} color='#ef4444' />
            </TouchableOpacity>
          </View>

          <View style={styles.languageItem}>
            <Text style={styles.languageFlag}>🇬🇧</Text>
            <View style={styles.languageInfo}>
              <Text style={styles.languageName}>Anglais</Text>
              <Text style={styles.languageLevel}>Avancé</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Ionicons name='close-circle' size={24} color='#ef4444' />
            </TouchableOpacity>
          </View>

          <View style={styles.languageItem}>
            <Text style={styles.languageFlag}>🇪🇸</Text>
            <View style={styles.languageInfo}>
              <Text style={styles.languageName}>Espagnol</Text>
              <Text style={styles.languageLevel}>Intermédiaire</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Ionicons name='close-circle' size={24} color='#ef4444' />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name='add-circle' size={20} color='#4F46E5' />
            <Text style={styles.addButtonText}>Ajouter une langue</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  changeAvatarButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
  },
  changeAvatarText: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
  },
  languageLevel: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#4F46E5',
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  addButtonText: {
    color: '#4F46E5',
    marginLeft: 8,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;

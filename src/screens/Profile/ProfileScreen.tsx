import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }) => {
  // Données de profil simulées
  const profileData = {
    name: 'Alex Dupont',
    email: 'alex.dupont@example.com',
    avatar: 'A',
    languages: [
      { name: 'Français', level: 'Natif', flag: '🇫🇷' },
      { name: 'Anglais', level: 'Avancé', flag: '🇬🇧' },
      { name: 'Espagnol', level: 'Intermédiaire', flag: '🇪🇸' },
    ],
    stats: {
      calls: 12,
      messages: 143,
      hours: 8,
    },
    streak: 7,
    achievements: [
      { id: '1', name: 'Premier appel', icon: 'call', completed: true },
      {
        id: '2',
        name: '10 jours consécutifs',
        icon: 'calendar',
        completed: false,
      },
      { id: '3', name: 'Apprendre 100 mots', icon: 'book', completed: true },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{profileData.avatar}</Text>
          </View>
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.email}>{profileData.email}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('edit-profile')}
          >
            <Text style={styles.editButtonText}>Modifier le profil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Langues</Text>
          <View style={styles.languageList}>
            {profileData.languages.map((language, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.languageFlag}>{language.flag}</Text>
                <View>
                  <Text style={styles.languageName}>{language.name}</Text>
                  <Text style={styles.languageLevel}>{language.level}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statistiques</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profileData.stats.calls}</Text>
              <Text style={styles.statLabel}>Appels</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {profileData.stats.messages}
              </Text>
              <Text style={styles.statLabel}>Messages</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profileData.stats.hours}</Text>
              <Text style={styles.statLabel}>Heures</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Réussites</Text>
          {profileData.achievements.map((achievement) => (
            <View key={achievement.id} style={styles.achievementItem}>
              <View
                style={[
                  styles.achievementIcon,
                  achievement.completed
                    ? styles.achievementCompleted
                    : styles.achievementIncomplete,
                ]}
              >
                <Ionicons
                  name={achievement.icon}
                  size={24}
                  color={achievement.completed ? '#fff' : '#4F46E5'}
                />
              </View>
              <Text style={styles.achievementName}>{achievement.name}</Text>
              {achievement.completed && (
                <Ionicons name='checkmark-circle' size={24} color='#4F46E5' />
              )}
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('settings')}
        >
          <Ionicons name='settings-outline' size={24} color='#4F46E5' />
          <Text style={styles.settingsText}>Paramètres</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#4F46E5',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  languageList: {
    gap: 12,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
  },
  languageFlag: {
    fontSize: 24,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
  },
  languageLevel: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
    width: '30%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementCompleted: {
    backgroundColor: '#4F46E5',
  },
  achievementIncomplete: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4F46E5',
  },
  achievementName: {
    fontSize: 16,
    flex: 1,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    marginBottom: 30,
    gap: 8,
  },
  settingsText: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: '500',
  },
});

export default ProfileScreen;

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = ({ navigation }) => {
  // États pour les paramètres
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [automaticUpdates, setAutomaticUpdates] = useState(true);

  // Simuler la déconnexion
  const handleLogout = () => {
    Alert.alert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Déconnecter',
        style: 'destructive',
        onPress: () => {
          // Rediriger vers l'écran de connexion
          navigation.reset({
            index: 0,
            routes: [{ name: 'auth' }],
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Apparence</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons
                name='moon-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.settingName}>Mode sombre</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#d1d5db', true: '#4F46E5' }}
              thumbColor='#fff'
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons
                name='notifications-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.settingName}>Notifications push</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#d1d5db', true: '#4F46E5' }}
              thumbColor='#fff'
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons
                name='volume-medium-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.settingName}>Sons</Text>
            </View>
            <Switch
              value={sounds}
              onValueChange={setSounds}
              trackColor={{ false: '#d1d5db', true: '#4F46E5' }}
              thumbColor='#fff'
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Général</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons
                name='refresh-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.settingName}>Mises à jour automatiques</Text>
            </View>
            <Switch
              value={automaticUpdates}
              onValueChange={setAutomaticUpdates}
              trackColor={{ false: '#d1d5db', true: '#4F46E5' }}
              thumbColor='#fff'
            />
          </View>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              Alert.alert('Confidentialité', 'Paramètres de confidentialité')
            }
          >
            <View style={styles.menuItemContent}>
              <Ionicons
                name='lock-closed-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.menuItemText}>Confidentialité</Text>
            </View>
            <Ionicons name='chevron-forward' size={20} color='#999' />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              Alert.alert('À propos', 'ConverseWithMe version 1.0.0')
            }
          >
            <View style={styles.menuItemContent}>
              <Ionicons
                name='information-circle-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.menuItemText}>À propos</Text>
            </View>
            <Ionicons name='chevron-forward' size={20} color='#999' />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => Alert.alert('Aide', "Centre d'aide et support")}
          >
            <View style={styles.menuItemContent}>
              <Ionicons
                name='help-circle-outline'
                size={24}
                color='#333'
                style={styles.settingIcon}
              />
              <Text style={styles.menuItemText}>Aide et support</Text>
            </View>
            <Ionicons name='chevron-forward' size={20} color='#999' />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name='log-out-outline' size={20} color='#ef4444' />
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 12,
  },
  settingName: {
    fontSize: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: '#fef2f2',
    borderRadius: 8,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#ef4444',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  versionText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginBottom: 30,
  },
});

export default SettingsScreen;

import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  Divider,
  List,
  Surface,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = ({ navigation }) => {
  const theme = useTheme();
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
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.container}>
        <Surface style={styles.section} elevation={0}>
          <Text variant='titleMedium' style={styles.sectionTitle}>
            Apparence
          </Text>

          <List.Item
            title='Mode sombre'
            left={(props) => <List.Icon {...props} icon='moon-outline' />}
            right={() => (
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                color={theme.colors.primary}
              />
            )}
          />
        </Surface>

        <Divider />

        <Surface style={styles.section} elevation={0}>
          <Text variant='titleMedium' style={styles.sectionTitle}>
            Notifications
          </Text>

          <List.Item
            title='Notifications push'
            left={(props) => <List.Icon {...props} icon='bell-outline' />}
            right={() => (
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                color={theme.colors.primary}
              />
            )}
          />

          <List.Item
            title='Sons'
            left={(props) => <List.Icon {...props} icon='volume-medium' />}
            right={() => (
              <Switch
                value={sounds}
                onValueChange={setSounds}
                color={theme.colors.primary}
              />
            )}
          />
        </Surface>

        <Divider />

        <Surface style={styles.section} elevation={0}>
          <Text variant='titleMedium' style={styles.sectionTitle}>
            Général
          </Text>

          <List.Item
            title='Mises à jour automatiques'
            left={(props) => <List.Icon {...props} icon='refresh' />}
            right={() => (
              <Switch
                value={automaticUpdates}
                onValueChange={setAutomaticUpdates}
                color={theme.colors.primary}
              />
            )}
          />

          <TouchableRipple
            onPress={() =>
              Alert.alert('Confidentialité', 'Paramètres de confidentialité')
            }
          >
            <List.Item
              title='Confidentialité'
              left={(props) => <List.Icon {...props} icon='lock' />}
              right={(props) => <List.Icon {...props} icon='chevron-right' />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() =>
              Alert.alert('À propos', 'ConverseWithMe version 1.0.0')
            }
          >
            <List.Item
              title='À propos'
              left={(props) => <List.Icon {...props} icon='information' />}
              right={(props) => <List.Icon {...props} icon='chevron-right' />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => Alert.alert('Aide', "Centre d'aide et support")}
          >
            <List.Item
              title='Aide et support'
              left={(props) => <List.Icon {...props} icon='help-circle' />}
              right={(props) => <List.Icon {...props} icon='chevron-right' />}
            />
          </TouchableRipple>
        </Surface>

        <Button
          mode='contained'
          icon='logout'
          onPress={handleLogout}
          style={styles.logoutButton}
          buttonColor='#fef2f2'
          textColor='#ef4444'
        >
          Déconnexion
        </Button>

        <Text variant='bodySmall' style={styles.versionText}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  logoutButton: {
    marginBottom: 20,
  },
  versionText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginBottom: 20,
  },
});

export default SettingsScreen;

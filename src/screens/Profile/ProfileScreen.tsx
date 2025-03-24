import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  List,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }) => {
  const theme = useTheme();

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
      { id: '1', name: 'Premier appel', icon: 'phone', completed: true },
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
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.container}>
        <Surface style={styles.header} elevation={0}>
          <Avatar.Text
            size={100}
            label={profileData.avatar}
            color={theme.colors.onPrimary}
            style={{ backgroundColor: theme.colors.primary }}
          />
          <Text variant='headlineMedium' style={styles.name}>
            {profileData.name}
          </Text>
          <Text
            variant='bodyLarge'
            style={{ color: theme.colors.outline, marginBottom: 16 }}
          >
            {profileData.email}
          </Text>

          <Button
            mode='outlined'
            icon='account-edit'
            onPress={() => navigation.navigate('edit-profile')}
          >
            Modifier le profil
          </Button>
        </Surface>

        <Card style={styles.section}>
          <Card.Title title='Langues' />
          <Card.Content>
            {profileData.languages.map((language, index) => (
              <List.Item
                key={index}
                title={language.name}
                description={language.level}
                left={(props) => (
                  <Text {...props} style={styles.languageFlag}>
                    {language.flag}
                  </Text>
                )}
                style={{
                  backgroundColor: theme.colors.surfaceVariant,
                  marginBottom: 8,
                  borderRadius: 8,
                }}
              />
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.section}>
          <Card.Title
            title='Statistiques'
            right={(props) => (
              <IconButton
                {...props}
                icon='chevron-right'
                onPress={() => navigation.navigate('stats')}
              />
            )}
          />
          <Card.Content>
            <View style={styles.statsContainer}>
              <Surface style={styles.statItem} elevation={0}>
                <Text
                  variant='headlineMedium'
                  style={{ color: theme.colors.primary }}
                >
                  {profileData.stats.calls}
                </Text>
                <Text variant='bodyMedium'>Appels</Text>
              </Surface>

              <Surface style={styles.statItem} elevation={0}>
                <Text
                  variant='headlineMedium'
                  style={{ color: theme.colors.primary }}
                >
                  {profileData.stats.messages}
                </Text>
                <Text variant='bodyMedium'>Messages</Text>
              </Surface>

              <Surface style={styles.statItem} elevation={0}>
                <Text
                  variant='headlineMedium'
                  style={{ color: theme.colors.primary }}
                >
                  {profileData.stats.hours}
                </Text>
                <Text variant='bodyMedium'>Heures</Text>
              </Surface>
            </View>

            <Button
              mode='outlined'
              icon='chart-bar'
              onPress={() => navigation.navigate('stats')}
              style={{ marginTop: 12 }}
            >
              Voir statistiques détaillées
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.section}>
          <Card.Title title='Réussites' />
          <Card.Content>
            {profileData.achievements.map((achievement) => (
              <List.Item
                key={achievement.id}
                title={achievement.name}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon={achievement.icon}
                    mode={achievement.completed ? 'contained' : 'outlined'}
                    iconColor={
                      achievement.completed
                        ? theme.colors.onPrimary
                        : theme.colors.primary
                    }
                    containerColor={
                      achievement.completed ? theme.colors.primary : undefined
                    }
                  />
                )}
                right={(props) =>
                  achievement.completed && (
                    <IconButton
                      {...props}
                      icon='check-circle'
                      iconColor={theme.colors.primary}
                    />
                  )
                }
                style={{
                  backgroundColor: theme.colors.surfaceVariant,
                  marginBottom: 8,
                  borderRadius: 8,
                }}
              />
            ))}
          </Card.Content>
        </Card>

        <Button
          mode='contained-tonal'
          icon='cog-outline'
          onPress={() => navigation.navigate('settings')}
          style={styles.settingsButton}
        >
          Paramètres
        </Button>
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
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  section: {
    marginBottom: 16,
  },
  languageFlag: {
    fontSize: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    width: '30%',
  },
  settingsButton: {
    marginBottom: 24,
  },
});

export default ProfileScreen;

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  roleplay: undefined;
  notification: undefined;
  stats: undefined;
};

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text variant='headlineMedium' style={styles.headerTitle}>
            Bienvenue sur ConverseWithMe
          </Text>
          <Text variant='bodyLarge' style={styles.headerSubtitle}>
            Améliorez vos compétences linguistiques avec nos outils interactifs
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <Text variant='titleLarge' style={styles.sectionTitle}>
            Fonctionnalités
          </Text>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={50}
                icon='account-voice'
                style={{ backgroundColor: theme.colors.primaryContainer }}
                color={theme.colors.primary}
              />
              <View style={styles.cardTextContent}>
                <Text variant='titleMedium' style={styles.cardTitle}>
                  RolePlay Conversationnel
                </Text>
                <Text variant='bodyMedium' style={styles.cardDescription}>
                  Pratiquez vos compétences de conversation dans des scénarios
                  de la vie réelle avec des personnages virtuels.
                </Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button
                mode='contained'
                onPress={() => navigation.navigate('roleplay')}
              >
                Commencer
              </Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={50}
                icon='text-box-outline'
                style={{ backgroundColor: theme.colors.primaryContainer }}
                color={theme.colors.primary}
              />
              <View style={styles.cardTextContent}>
                <Text variant='titleMedium' style={styles.cardTitle}>
                  Chat avec IA
                </Text>
                <Text variant='bodyMedium' style={styles.cardDescription}>
                  Discutez librement avec notre assistant IA pour pratiquer
                  votre conversation dans différentes langues.
                </Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode='contained' onPress={() => {}}>
                Bientôt disponible
              </Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={50}
                icon='microphone'
                style={{ backgroundColor: theme.colors.primaryContainer }}
                color={theme.colors.primary}
              />
              <View style={styles.cardTextContent}>
                <Text variant='titleMedium' style={styles.cardTitle}>
                  Correction de Prononciation
                </Text>
                <Text variant='bodyMedium' style={styles.cardDescription}>
                  Améliorez votre accent et votre prononciation avec notre outil
                  d'analyse vocale.
                </Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode='contained' onPress={() => {}}>
                Bientôt disponible
              </Button>
            </Card.Actions>
          </Card>
        </View>

        <View style={styles.statsContainer}>
          <Text variant='titleLarge' style={styles.sectionTitle}>
            Vos statistiques
          </Text>
          <Card style={styles.statsCard}>
            <Card.Content>
              <Text variant='titleMedium'>
                Connectez-vous pour suivre vos progrès
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: '#666',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  featuresContainer: {
    marginBottom: 24,
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTextContent: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#666',
  },
  statsContainer: {
    marginBottom: 24,
  },
  statsCard: {
    marginHorizontal: 16,
  },
});

export default Home;

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  Text,
  useTheme,
} from 'react-native-paper';
import { Character, ScenarioType } from '../../types/roleplay';

type CharacterSelectProps = {
  scenario: ScenarioType;
  onSelectCharacter: (character: Character) => void;
  onBack: () => void;
};

const CharacterSelect: React.FC<CharacterSelectProps> = ({
  scenario,
  onSelectCharacter,
  onBack,
}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <IconButton icon='arrow-left' size={24} onPress={onBack} />
        <Text variant='titleLarge' style={styles.headerTitle}>
          Sélection du personnage
        </Text>
      </View>

      <View style={styles.scenarioInfo}>
        <Text variant='headlineMedium' style={styles.scenarioTitle}>
          {scenario.title}
        </Text>
        <Text variant='bodyLarge' style={styles.scenarioDescription}>
          {scenario.description}
        </Text>
      </View>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant='titleMedium' style={styles.infoTitle}>
            À propos de ce scénario
          </Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text variant='bodyMedium' style={styles.infoLabel}>
                Difficulté:
              </Text>
              <Text variant='bodyMedium'>{scenario.difficulty}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text variant='bodyMedium' style={styles.infoLabel}>
                Durée:
              </Text>
              <Text variant='bodyMedium'>{scenario.duration}</Text>
            </View>
            {scenario.topics && (
              <View style={[styles.infoItem, styles.fullWidth]}>
                <Text variant='bodyMedium' style={styles.infoLabel}>
                  Sujets:
                </Text>
                <Text variant='bodyMedium'>{scenario.topics.join(', ')}</Text>
              </View>
            )}
          </View>
        </Card.Content>
      </Card>

      <Text variant='titleLarge' style={styles.charactersTitle}>
        Choisissez un personnage
      </Text>

      {scenario.characters?.map((character) => (
        <Card
          key={character.id}
          style={styles.characterCard}
          onPress={() => onSelectCharacter(character)}
        >
          <Card.Content style={styles.characterCardContent}>
            <View style={styles.characterHeader}>
              <Avatar.Image size={60} source={{ uri: character.avatar }} />
              <View style={styles.characterInfo}>
                <Text variant='titleMedium' style={styles.characterName}>
                  {character.name}
                </Text>
                <Text variant='bodyMedium' style={styles.characterRole}>
                  {character.role}
                </Text>
              </View>
            </View>
            <Divider style={styles.divider} />
            <Text variant='bodyMedium' style={styles.characterDescription}>
              {character.description}
            </Text>
            <Button
              mode='contained'
              onPress={() => onSelectCharacter(character)}
              style={styles.selectButton}
            >
              Sélectionner
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  scenarioInfo: {
    marginBottom: 24,
  },
  scenarioTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scenarioDescription: {
    color: '#666',
  },
  infoCard: {
    marginBottom: 24,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoItem: {
    flexDirection: 'row',
    width: '50%',
    marginBottom: 8,
  },
  fullWidth: {
    width: '100%',
  },
  infoLabel: {
    color: '#666',
    marginRight: 8,
  },
  charactersTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  characterCard: {
    marginBottom: 16,
  },
  characterCardContent: {
    paddingVertical: 16,
  },
  characterHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  characterInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  characterName: {
    fontWeight: 'bold',
  },
  characterRole: {
    color: '#666',
  },
  divider: {
    marginBottom: 16,
  },
  characterDescription: {
    marginBottom: 16,
  },
  selectButton: {
    marginTop: 8,
  },
});

export default CharacterSelect;

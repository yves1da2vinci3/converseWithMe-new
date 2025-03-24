import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Card, Chip, Text, useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScenarioType } from '../../types/roleplay';
import { categories } from '../../utils/roleplayData';

type ScenarioSelectorProps = {
  scenarios: ScenarioType[];
  onSelectScenario: (scenario: ScenarioType) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
  scenarios,
  onSelectScenario,
  selectedCategory,
  onCategoryChange,
}) => {
  const theme = useTheme();

  const filteredScenarios =
    selectedCategory === 'popular'
      ? scenarios.filter((scenario) => scenario.popular)
      : selectedCategory === 'beginner'
      ? scenarios.filter((scenario) => scenario.difficulty.includes('Débutant'))
      : selectedCategory === 'intermediate'
      ? scenarios.filter((scenario) =>
          scenario.difficulty.includes('Intermédiaire')
        )
      : selectedCategory === 'advanced'
      ? scenarios.filter((scenario) => scenario.difficulty.includes('Avancé'))
      : selectedCategory === 'travel'
      ? scenarios.filter((scenario) => scenario.category === 'travel')
      : selectedCategory === 'business'
      ? scenarios.filter((scenario) => scenario.category === 'business')
      : selectedCategory === 'everyday'
      ? scenarios.filter((scenario) => scenario.category === 'everyday')
      : scenarios;

  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.title}>
        Scénarios de conversation
      </Text>

      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Chip
              selected={selectedCategory === item.id}
              onPress={() => onCategoryChange(item.id)}
              style={[
                styles.chip,
                selectedCategory === item.id && {
                  backgroundColor: theme.colors.primaryContainer,
                },
              ]}
              textStyle={
                selectedCategory === item.id
                  ? { color: theme.colors.onPrimaryContainer }
                  : {}
              }
            >
              {item.name}
            </Chip>
          )}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <FlatList
        data={filteredScenarios}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => onSelectScenario(item)}
            mode='outlined'
          >
            <Card.Content style={styles.cardContent}>
              <Avatar.Icon
                size={40}
                icon={item.icon}
                style={{ backgroundColor: theme.colors.primaryContainer }}
                color={theme.colors.primary}
              />
              <Text variant='titleMedium' style={styles.cardTitle}>
                {item.title}
              </Text>
              <Text variant='bodySmall' style={styles.cardDescription}>
                {item.description}
              </Text>

              <View style={styles.cardFooter}>
                <Chip compact style={styles.difficultyChip}>
                  {item.difficulty}
                </Chip>
                <Text variant='bodySmall' style={styles.duration}>
                  {item.duration}
                </Text>
              </View>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={styles.scenariosList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Aucun scénario trouvé dans cette catégorie.
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesList: {
    paddingRight: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  scenariosList: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 6,
    maxWidth: wp('44%'),
  },
  cardContent: {
    paddingVertical: 12,
  },
  cardTitle: {
    marginTop: 8,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginBottom: 12,
    color: '#666',
    minHeight: 60,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  difficultyChip: {
    height: 24,
  },
  duration: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
  },
});

export default ScenarioSelector;

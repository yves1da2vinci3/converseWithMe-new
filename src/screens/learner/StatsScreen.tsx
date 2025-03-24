import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  ProgressBar,
  SegmentedButtons,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Largeur de l'écran pour les graphiques
const screenWidth = Dimensions.get('window').width - 40;

// Données fictives pour les statistiques
// Dans une véritable application, ces données viendraient du backend
const weeklyActivityData = [
  { day: 'Lun', minutes: 45 },
  { day: 'Mar', minutes: 30 },
  { day: 'Mer', minutes: 60 },
  { day: 'Jeu', minutes: 20 },
  { day: 'Ven', minutes: 45 },
  { day: 'Sam', minutes: 75 },
  { day: 'Dim', minutes: 15 },
];

const languageProgressData = [
  { language: 'Français', level: 75 },
  { language: 'Anglais', level: 60 },
  { language: 'Espagnol', level: 30 },
  { language: 'Allemand', level: 15 },
];

const activitiesBreakdownData = [
  { name: 'Appels', value: 35, color: '#4F46E5' },
  { name: 'Messages', value: 25, color: '#6366F1' },
  { name: 'Roleplay', value: 20, color: '#818CF8' },
  { name: 'Exercices', value: 20, color: '#A5B4FC' },
];

const monthlyProgressData = [
  { month: 'Jan', value: 20 },
  { month: 'Fév', value: 35 },
  { month: 'Mar', value: 30 },
  { month: 'Avr', value: 40 },
  { month: 'Mai', value: 45 },
  { month: 'Juin', value: 55 },
];

const StatsScreen = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('week');
  const { width } = useWindowDimensions();
  const [chartWidth, setChartWidth] = useState(
    Dimensions.get('window').width - 40
  );

  // Mettre à jour la largeur du graphique lorsque la taille de l'écran change
  useEffect(() => {
    setChartWidth(width - 40);
  }, [width]);

  // Données statistiques clés
  const stats = {
    totalTime: '14h 30m',
    streak: 7,
    lessonsCompleted: 28,
    vocabularyLearned: 345,
  };

  // Trouve la valeur maximale dans les données d'activité pour calculer les proportions
  const maxActivityValue = Math.max(
    ...weeklyActivityData.map((item) => item.minutes)
  );

  // Calcul du total des activités pour le graphique en anneau
  const totalActivities = activitiesBreakdownData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text variant='headlineMedium' style={styles.title}>
          Statistiques
        </Text>

        <Card style={styles.keyStatsCard}>
          <Card.Content style={styles.keyStatsContainer}>
            <View style={styles.statItem}>
              <Text
                variant='headlineMedium'
                style={{ color: theme.colors.primary }}
              >
                {stats.totalTime}
              </Text>
              <Text variant='bodyMedium'>Temps total</Text>
            </View>
            <View style={styles.statItem}>
              <Text
                variant='headlineMedium'
                style={{ color: theme.colors.primary }}
              >
                {stats.streak}
              </Text>
              <Text variant='bodyMedium'>Jours consécutifs</Text>
            </View>
            <View style={styles.statItem}>
              <Text
                variant='headlineMedium'
                style={{ color: theme.colors.primary }}
              >
                {stats.lessonsCompleted}
              </Text>
              <Text variant='bodyMedium'>Leçons</Text>
            </View>
            <View style={styles.statItem}>
              <Text
                variant='headlineMedium'
                style={{ color: theme.colors.primary }}
              >
                {stats.vocabularyLearned}
              </Text>
              <Text variant='bodyMedium'>Mots appris</Text>
            </View>
          </Card.Content>
        </Card>

        <SegmentedButtons
          value={timeRange}
          onValueChange={setTimeRange}
          buttons={[
            { value: 'week', label: 'Semaine' },
            { value: 'month', label: 'Mois' },
            { value: 'year', label: 'Année' },
          ]}
          style={styles.segmentedButtons}
        />

        <Card style={styles.chartCard}>
          <Card.Title title='Activité quotidienne' />
          <Card.Content>
            <Text variant='bodyMedium' style={styles.chartDescription}>
              Minutes passées à apprendre par jour
            </Text>

            <View style={styles.barChartContainer}>
              {weeklyActivityData.map((item, index) => (
                <View key={index} style={styles.barItem}>
                  <View style={styles.barContainer}>
                    <View
                      style={[
                        styles.bar,
                        {
                          height: `${(item.minutes / maxActivityValue) * 100}%`,
                          backgroundColor: theme.colors.primary,
                        },
                      ]}
                    />
                  </View>
                  <Text variant='bodySmall'>{item.day}</Text>
                  <Text variant='labelSmall'>{item.minutes}m</Text>
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.chartCard}>
          <Card.Title title='Progression par langue' />
          <Card.Content>
            <Text variant='bodyMedium' style={styles.chartDescription}>
              Niveau atteint dans chaque langue
            </Text>
            <View style={styles.languageProgressContainer}>
              {languageProgressData.map((item, index) => (
                <View key={index} style={styles.languageProgressItem}>
                  <View style={styles.languageProgressHeader}>
                    <Text variant='bodyMedium'>{item.language}</Text>
                    <Text variant='bodyMedium'>{item.level}%</Text>
                  </View>
                  <ProgressBar
                    progress={item.level / 100}
                    color={theme.colors.primary}
                    style={styles.progressBar}
                  />
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>

        <View style={[styles.chartRow, width < 600 && styles.chartColumn]}>
          <Card
            style={[
              styles.chartCard,
              width >= 600 ? styles.halfChart : styles.fullChart,
            ]}
          >
            <Card.Title
              title='Répartition des activités'
              titleVariant='titleMedium'
            />
            <Card.Content>
              <View style={styles.pieChartContainer}>
                <View style={styles.pieChart}>
                  {activitiesBreakdownData.map((item, index) => {
                    // Calcul de l'angle pour chaque section
                    const startAngle =
                      activitiesBreakdownData
                        .slice(0, index)
                        .reduce((sum, current) => sum + current.value, 0) * 3.6;
                    const angle = item.value * 3.6; // 360 degrés / 100 = 3.6 degrés par pourcentage

                    return (
                      <View
                        key={index}
                        style={[
                          styles.pieSlice,
                          {
                            backgroundColor: item.color,
                            transform: [{ rotate: `${startAngle}deg` }],
                            zIndex: activitiesBreakdownData.length - index,
                          },
                        ]}
                      />
                    );
                  })}
                  <View style={styles.pieCenter} />
                </View>
                <View style={styles.pieLegend}>
                  {activitiesBreakdownData.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                      <View
                        style={[
                          styles.legendColor,
                          { backgroundColor: item.color },
                        ]}
                      />
                      <Text variant='bodySmall'>
                        {item.name} ({item.value}%)
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Card.Content>
          </Card>

          <Card
            style={[
              styles.chartCard,
              width >= 600 ? styles.halfChart : styles.fullChart,
            ]}
          >
            <Card.Title
              title='Progression mensuelle'
              titleVariant='titleMedium'
            />
            <Card.Content>
              <View style={styles.lineChartContainer}>
                {monthlyProgressData.map((item, index) => {
                  const nextItem = monthlyProgressData[index + 1];
                  if (!nextItem) return null;

                  return (
                    <View key={index} style={styles.lineSegmentContainer}>
                      <View style={styles.linePoints}>
                        <View style={styles.linePoint} />
                        {index === 0 && (
                          <Text variant='labelSmall' style={styles.lineLabel}>
                            {item.month}
                          </Text>
                        )}
                      </View>
                      <View
                        style={[
                          styles.lineSegment,
                          {
                            transform: [
                              {
                                rotate: `${
                                  Math.atan2(
                                    nextItem.value - item.value,
                                    1 // Largeur fixe entre points
                                  ) *
                                  (180 / Math.PI)
                                }deg`,
                              },
                            ],
                            width: chartWidth / 10,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      />
                      <View style={styles.linePoints}>
                        <View style={styles.linePoint} />
                        <Text variant='labelSmall' style={styles.lineLabel}>
                          {nextItem.month}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.recommendationsCard}>
          <Card.Title title='Recommandations' />
          <Card.Content>
            <Text variant='bodyMedium' style={styles.recommendationText}>
              Basé sur vos statistiques, nous recommandons :
            </Text>
            <View style={styles.recommendation}>
              <Avatar.Icon
                size={36}
                icon='book'
                style={{ backgroundColor: theme.colors.primary }}
              />
              <Text variant='bodyMedium' style={{ marginLeft: 16 }}>
                Pratiquer plus régulièrement l'allemand
              </Text>
            </View>
            <Divider style={{ marginVertical: 12 }} />
            <View style={styles.recommendation}>
              <Avatar.Icon
                size={36}
                icon='headphones'
                style={{ backgroundColor: theme.colors.primary }}
              />
              <Text variant='bodyMedium' style={{ marginLeft: 16 }}>
                Augmenter les exercices d'écoute en espagnol
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Button
          mode='contained-tonal'
          icon='download'
          style={styles.exportButton}
          onPress={() => {
            // Fonctionnalité d'exportation des données
          }}
        >
          Exporter mes statistiques
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  keyStatsCard: {
    marginBottom: 16,
    elevation: 2,
    borderRadius: 8,
  },
  keyStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 16,
    padding: 8,
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  chartCard: {
    marginBottom: 16,
    elevation: 2,
    borderRadius: 8,
  },
  chartDescription: {
    marginBottom: 8,
    color: '#666',
  },
  // Styles pour le graphique à barres
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
    marginTop: 16,
  },
  barItem: {
    alignItems: 'center',
    width: '12%',
  },
  barContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  // Styles pour les barres de progression
  languageProgressContainer: {
    marginTop: 8,
  },
  languageProgressItem: {
    marginBottom: 16,
  },
  languageProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  // Styles pour le graphique en secteurs
  pieChartContainer: {
    alignItems: 'center',
    padding: 10,
  },
  pieChart: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  pieSlice: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 60,
    left: 0,
    top: 0,
  },
  pieCenter: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  pieLegend: {
    marginTop: 16,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  // Styles pour le graphique linéaire
  lineChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    paddingTop: 20,
  },
  lineSegmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineSegment: {
    height: 2,
  },
  linePoints: {
    alignItems: 'center',
  },
  linePoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4F46E5',
  },
  lineLabel: {
    marginTop: 4,
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartColumn: {
    flexDirection: 'column',
  },
  halfChart: {
    width: '48%',
  },
  fullChart: {
    width: '100%',
  },
  recommendationsCard: {
    marginBottom: 16,
    elevation: 2,
    borderRadius: 8,
  },
  recommendationText: {
    marginBottom: 16,
  },
  recommendation: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 4,
  },
  exportButton: {
    marginTop: 8,
    borderRadius: 8,
  },
});

export default StatsScreen;

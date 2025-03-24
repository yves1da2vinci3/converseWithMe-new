import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  List,
  MD3Colors,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  CallDetail: {
    tutorId: string;
  };
};

type CallDetailRouteProp = RouteProp<RootStackParamList, 'CallDetail'>;

type CallDetailNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Tutor = {
  id: string;
  name: string;
  avatar: string;
  language: string;
  flag: string;
  level: string;
  specialties: string[];
  rating: number;
  available: boolean;
  bio?: string;
  education?: string;
  teachingExperience?: string;
  schedule?: ScheduleItem[];
};

type ScheduleItem = {
  day: string;
  slots: string[];
};

// Liste des tuteurs (normalement on récupèrerait ça d'une API)
const tutors: Tutor[] = [
  {
    id: 'sarah',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    language: 'Anglais (UK)',
    flag: '🇬🇧',
    level: 'Tous niveaux',
    specialties: ['Conversation', 'Prononciation', 'Grammaire'],
    rating: 4.9,
    available: true,
    bio: "Professeur d'anglais certifiée avec plus de 5 ans d'expérience. J'aime enseigner d'une manière interactive et amusante. J'adapte mon style d'enseignement aux besoins spécifiques de chaque élève.",
    education: 'Master en Linguistique Appliquée, Université de Cambridge',
    teachingExperience:
      "5 ans en tant que professeur d'anglais en ligne et 2 ans dans des écoles de langues",
    schedule: [
      {
        day: 'Lundi',
        slots: ['10:00 - 12:00', '14:00 - 16:00', '18:00 - 20:00'],
      },
      { day: 'Mardi', slots: ['09:00 - 11:00', '15:00 - 17:00'] },
      { day: 'Mercredi', slots: ['11:00 - 13:00', '16:00 - 18:00'] },
      { day: 'Jeudi', slots: ['10:00 - 12:00', '14:00 - 16:00'] },
      { day: 'Vendredi', slots: ['09:00 - 11:00', '13:00 - 15:00'] },
    ],
  },
  {
    id: 'miguel',
    name: 'Miguel Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    language: 'Espagnol',
    flag: '🇪🇸',
    level: 'Débutant, Intermédiaire',
    specialties: ['Vocabulaire', 'Conversation quotidienne'],
    rating: 4.7,
    available: true,
    bio: "Originaire de Madrid, j'enseigne l'espagnol depuis 3 ans. J'adore aider mes élèves à découvrir la richesse de la culture hispanophone tout en apprenant la langue.",
    education: 'Licence en Langues Étrangères, Université de Madrid',
    teachingExperience:
      "3 ans d'enseignement en ligne, spécialisé dans l'espagnol conversationnel",
    schedule: [
      { day: 'Lundi', slots: ['11:00 - 13:00', '16:00 - 18:00'] },
      { day: 'Mercredi', slots: ['10:00 - 12:00', '15:00 - 17:00'] },
      { day: 'Vendredi', slots: ['09:00 - 11:00', '14:00 - 16:00'] },
    ],
  },
  {
    id: 'lucie',
    name: 'Lucie Dubois',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    language: 'Français',
    flag: '🇫🇷',
    level: 'Intermédiaire, Avancé',
    specialties: ['Expressions idiomatiques', 'Culture'],
    rating: 4.8,
    available: true,
    bio: "Passionnée de littérature française, j'enseigne ma langue maternelle depuis plus de 4 ans. J'aime particulièrement aider mes élèves à saisir les subtilités de la langue et de la culture française.",
    education: 'Master en Lettres Modernes, Université de la Sorbonne',
    teachingExperience: "4 ans d'enseignement du français langue étrangère",
    schedule: [
      { day: 'Mardi', slots: ['10:00 - 12:00', '15:00 - 17:00'] },
      { day: 'Jeudi', slots: ['11:00 - 13:00', '16:00 - 18:00'] },
      { day: 'Samedi', slots: ['09:00 - 11:00', '14:00 - 16:00'] },
    ],
  },
];

const CallDetailScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<CallDetailNavigationProp>();
  const route = useRoute<CallDetailRouteProp>();
  const [selectedTab, setSelectedTab] = useState<'profile' | 'schedule'>(
    'profile'
  );

  // Rechercher le tuteur en fonction de l'ID passé en paramètre
  const tutor = tutors.find((t) => t.id === route.params?.tutorId) || tutors[0];

  const handleStartVideoCall = () => {
    // Logique pour démarrer un appel vidéo
    console.log(`Démarrage d'un appel vidéo avec ${tutor.name}`);
  };

  const handleStartAudioCall = () => {
    // Logique pour démarrer un appel audio
    console.log(`Démarrage d'un appel audio avec ${tutor.name}`);
  };

  const renderSpecialties = () => {
    return (
      <View style={styles.specialtiesContainer}>
        {tutor.specialties.map((specialty, index) => (
          <Chip
            key={index}
            style={styles.specialtyChip}
            textStyle={{ fontSize: 12 }}
          >
            {specialty}
          </Chip>
        ))}
      </View>
    );
  };

  const renderScheduleItem = ({ item }: { item: ScheduleItem }) => (
    <List.Item
      title={item.day}
      description={() => (
        <View style={styles.slotsContainer}>
          {item.slots.map((slot, index) => (
            <Chip
              key={index}
              style={styles.slotChip}
              textStyle={{ fontSize: 12 }}
              onPress={() => console.log(`Réservation pour ${slot}`)}
            >
              {slot}
            </Chip>
          ))}
        </View>
      )}
      left={(props) => <List.Icon {...props} icon='calendar' />}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon='arrow-left'
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text variant='titleLarge' style={styles.headerTitle}>
          Détails du tuteur
        </Text>
        <IconButton icon='heart-outline' size={24} />
      </View>

      <ScrollView>
        <Card style={styles.tutorCard}>
          <Card.Content>
            <View style={styles.tutorHeader}>
              <Avatar.Image
                size={80}
                source={{ uri: tutor.avatar }}
                style={styles.avatar}
              />
              <View style={styles.tutorInfo}>
                <Text variant='headlineSmall' style={styles.tutorName}>
                  {tutor.name}
                </Text>
                <View style={styles.languageContainer}>
                  <Text variant='bodyLarge'>
                    {tutor.flag} {tutor.language}
                  </Text>
                </View>
                <View style={styles.ratingContainer}>
                  <IconButton
                    icon='star'
                    size={16}
                    iconColor={MD3Colors.error50}
                    style={styles.starIcon}
                  />
                  <Text variant='bodyMedium'>{tutor.rating}</Text>
                </View>
              </View>
            </View>

            <Text variant='bodyLarge' style={styles.levelText}>
              Niveaux: {tutor.level}
            </Text>

            <Text variant='titleMedium' style={styles.sectionTitle}>
              Spécialités
            </Text>
            {renderSpecialties()}
          </Card.Content>
        </Card>

        <View style={styles.tabsContainer}>
          <Button
            mode={selectedTab === 'profile' ? 'contained' : 'outlined'}
            onPress={() => setSelectedTab('profile')}
            style={styles.tabButton}
          >
            Profil
          </Button>
          <Button
            mode={selectedTab === 'schedule' ? 'contained' : 'outlined'}
            onPress={() => setSelectedTab('schedule')}
            style={styles.tabButton}
          >
            Horaires
          </Button>
        </View>

        {selectedTab === 'profile' ? (
          <Card style={styles.contentCard}>
            <Card.Content>
              <Text variant='titleMedium' style={styles.sectionTitle}>
                À propos
              </Text>
              <Text variant='bodyMedium' style={styles.bioText}>
                {tutor.bio}
              </Text>

              <Divider style={styles.divider} />

              <List.Item
                title='Formation'
                description={tutor.education}
                left={(props) => <List.Icon {...props} icon='school' />}
              />
              <List.Item
                title="Expérience d'enseignement"
                description={tutor.teachingExperience}
                left={(props) => <List.Icon {...props} icon='briefcase' />}
              />
            </Card.Content>
          </Card>
        ) : (
          <Card style={styles.contentCard}>
            <Card.Content>
              <Text variant='titleMedium' style={styles.sectionTitle}>
                Horaires disponibles
              </Text>
              <Text variant='bodySmall' style={styles.scheduleNote}>
                Sélectionnez un créneau horaire pour réserver une session
              </Text>

              <FlatList
                data={tutor.schedule}
                renderItem={renderScheduleItem}
                keyExtractor={(item) => item.day}
                scrollEnabled={false}
              />
            </Card.Content>
          </Card>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          mode='outlined'
          icon='phone'
          style={[styles.callButton, { borderColor: theme.colors.primary }]}
          contentStyle={styles.buttonContent}
          onPress={handleStartAudioCall}
        >
          Audio
        </Button>
        <Button
          mode='contained'
          icon='video'
          style={styles.callButton}
          contentStyle={styles.buttonContent}
          onPress={handleStartVideoCall}
        >
          Vidéo
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  tutorCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  tutorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  avatar: {
    marginRight: 16,
  },
  tutorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  tutorName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    margin: 0,
    padding: 0,
  },
  levelText: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  specialtyChip: {
    margin: 4,
    height: 30,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  contentCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bioText: {
    lineHeight: 22,
    marginBottom: 16,
  },
  divider: {
    marginVertical: 16,
  },
  scheduleNote: {
    color: '#666',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  slotChip: {
    margin: 4,
    height: 36,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  callButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    flexWrap: 'wrap',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
    minWidth: 120,
  },
});

export default CallDetailScreen;

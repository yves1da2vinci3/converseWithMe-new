import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Searchbar,
  SegmentedButtons,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallModeInterface from '../../../components/calls/CallModeInterface';

// Types
type Language = {
  id: string;
  name: string;
  flag: string;
};

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
};

type CallsStackParamList = {
  calls: undefined;
  CallDetail: {
    tutorId: string;
  };
};

type CallsScreenProps = {
  navigation: NativeStackNavigationProp<CallsStackParamList, 'calls'>;
};

// Données statiques pour les langues et tuteurs
const languages: Language[] = [
  { id: 'all', name: 'Toutes', flag: '🌍' },
  { id: 'english', name: 'Anglais', flag: '🇬🇧' },
  { id: 'spanish', name: 'Espagnol', flag: '🇪🇸' },
  { id: 'french', name: 'Français', flag: '🇫🇷' },
  { id: 'german', name: 'Allemand', flag: '🇩🇪' },
  { id: 'italian', name: 'Italien', flag: '🇮🇹' },
];

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
  },
  {
    id: 'hans',
    name: 'Hans Mueller',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    language: 'Allemand',
    flag: '🇩🇪',
    level: 'Tous niveaux',
    specialties: ['Grammaire', 'Vocabulaire professionnel'],
    rating: 4.6,
    available: false,
  },
  {
    id: 'maria',
    name: 'Maria Rossi',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    language: 'Italien',
    flag: '🇮🇹',
    level: 'Débutant, Intermédiaire',
    specialties: ['Conversation', 'Prononciation'],
    rating: 4.8,
    available: true,
  },
];

const CallsScreen = ({ navigation }: CallsScreenProps) => {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [inCallMode, setInCallMode] = useState(false);
  const [callType, setCallType] = useState<'audio' | 'video'>('video');
  const [currentTutor, setCurrentTutor] = useState<Tutor | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  const startCall = (tutor: Tutor, type: 'audio' | 'video') => {
    setCurrentTutor(tutor);
    setCallType(type);
    setInCallMode(true);
  };

  const endCall = () => {
    setInCallMode(false);
    setCurrentTutor(null);
  };

  const filteredTutors = tutors.filter(
    (tutor) =>
      (selectedLanguage === 'all' ||
        tutor.language.toLowerCase().includes(selectedLanguage)) &&
      (searchQuery === '' ||
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.language.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterValue === 'all' ||
        (filterValue === 'available' && tutor.available))
  );

  const navigateToTutorDetail = (tutorId: string) => {
    navigation.navigate('CallDetail', { tutorId });
  };

  const renderLanguageItem = ({ item }: { item: Language }) => (
    <Button
      mode={selectedLanguage === item.id ? 'contained' : 'outlined'}
      style={styles.languageButton}
      contentStyle={styles.languageButtonContent}
      onPress={() => setSelectedLanguage(item.id)}
    >
      {item.flag} {item.name}
    </Button>
  );

  const renderTutorCard = ({ item }: { item: Tutor }) => (
    <Card
      style={[styles.tutorCard, !item.available && styles.unavailableTutorCard]}
      onPress={() => navigateToTutorDetail(item.id)}
    >
      <Card.Content>
        <View style={styles.tutorHeader}>
          <Avatar.Image source={{ uri: item.avatar }} size={60} />
          <View style={styles.tutorInfo}>
            <Text variant='titleMedium' style={styles.tutorName}>
              {item.name}
            </Text>
            <Text variant='bodyMedium'>
              {item.flag} {item.language}
            </Text>
            <View style={styles.ratingContainer}>
              <IconButton
                icon='star'
                size={16}
                iconColor={theme.colors.primary}
                style={styles.starIcon}
              />
              <Text>{item.rating}</Text>
            </View>
          </View>
        </View>

        <Divider style={styles.divider} />

        <Text variant='bodySmall' style={styles.levelText}>
          {item.level}
        </Text>

        <View style={styles.specialtiesContainer}>
          {item.specialties.map((specialty, index) => (
            <Chip key={index} style={styles.specialtyChip}>
              {specialty}
            </Chip>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <Button
            mode='outlined'
            icon='phone'
            style={styles.callButton}
            onPress={() => startCall(item, 'audio')}
            disabled={!item.available}
          >
            Audio
          </Button>
          <Button
            mode='contained'
            icon='video'
            style={styles.callButton}
            onPress={() => startCall(item, 'video')}
            disabled={!item.available}
          >
            Vidéo
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      {inCallMode && currentTutor ? (
        <CallModeInterface
          tutor={currentTutor}
          callType={callType}
          onEndCall={endCall}
          language={currentTutor.language}
        />
      ) : (
        <View style={styles.content}>
          <View style={styles.header}>
            <Text variant='headlineMedium' style={styles.title}>
              Appels
            </Text>
            <IconButton icon='cog-outline' size={24} />
          </View>

          <Searchbar
            placeholder='Rechercher un tuteur ou une langue'
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />

          <View style={styles.filterContainer}>
            <SegmentedButtons
              value={filterValue}
              onValueChange={setFilterValue}
              buttons={[
                {
                  value: 'all',
                  label: 'Tous',
                },
                {
                  value: 'available',
                  label: 'Disponibles',
                },
              ]}
              style={styles.filterButtons}
            />
          </View>

          <Text variant='titleMedium' style={styles.sectionTitle}>
            Langues
          </Text>

          <FlatList
            data={languages}
            renderItem={renderLanguageItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.languageList}
          />

          <Text variant='titleMedium' style={styles.sectionTitle}>
            Tuteurs disponibles
          </Text>

          <FlatList
            data={filteredTutors}
            renderItem={renderTutorCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.tutorsList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  searchBar: {
    marginBottom: 16,
    elevation: 0,
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterButtons: {
    marginBottom: 8,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  languageList: {
    paddingBottom: 16,
  },
  languageButton: {
    marginRight: 8,
    marginBottom: 8,
  },
  languageButtonContent: {
    paddingHorizontal: 12,
  },
  tutorsList: {
    paddingBottom: 20,
  },
  tutorCard: {
    marginBottom: 16,
  },
  unavailableTutorCard: {
    opacity: 0.6,
  },
  tutorHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tutorInfo: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'center',
  },
  tutorName: {
    fontWeight: 'bold',
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
  divider: {
    marginBottom: 12,
  },
  levelText: {
    marginBottom: 8,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  specialtyChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  callButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default CallsScreen;

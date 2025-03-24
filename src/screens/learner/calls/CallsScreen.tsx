import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

type CallsScreenProps = {
  navigation: NativeStackNavigationProp<any, 'calls'>;
};

// Données statiques pour les langues et tuteurs
const languages: Language[] = [
  { id: 'english', name: 'Anglais', flag: '🇬🇧' },
  { id: 'spanish', name: 'Espagnol', flag: '🇪🇸' },
  { id: 'french', name: 'Français', flag: '🇫🇷' },
  { id: 'german', name: 'Allemand', flag: '🇩🇪' },
  { id: 'italian', name: 'Italien', flag: '🇮🇹' },
];

const tutors: Tutor[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    avatar: 'S',
    language: 'Anglais (UK)',
    flag: '🇬🇧',
    level: 'Tous niveaux',
    specialties: ['Conversation', 'Prononciation', 'Grammaire'],
    rating: 4.9,
    available: true,
  },
  {
    id: 'miguel',
    name: 'Miguel',
    avatar: 'M',
    language: 'Espagnol',
    flag: '🇪🇸',
    level: 'Débutant, Intermédiaire',
    specialties: ['Vocabulaire', 'Conversation quotidienne'],
    rating: 4.7,
    available: true,
  },
  {
    id: 'lucie',
    name: 'Lucie',
    avatar: 'L',
    language: 'Français',
    flag: '🇫🇷',
    level: 'Intermédiaire, Avancé',
    specialties: ['Expressions idiomatiques', 'Culture'],
    rating: 4.8,
    available: true,
  },
  {
    id: 'hans',
    name: 'Hans',
    avatar: 'H',
    language: 'Allemand',
    flag: '🇩🇪',
    level: 'Tous niveaux',
    specialties: ['Grammaire', 'Vocabulaire professionnel'],
    rating: 4.6,
    available: false,
  },
  {
    id: 'maria',
    name: 'Maria',
    avatar: 'M',
    language: 'Italien',
    flag: '🇮🇹',
    level: 'Débutant, Intermédiaire',
    specialties: ['Conversation', 'Prononciation'],
    rating: 4.8,
    available: true,
  },
];

const CallsScreen = ({ navigation }: CallsScreenProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [callType, setCallType] = useState<'audio' | 'video'>('audio');
  const [activeCall, setActiveCall] = useState<Tutor | null>(null);

  const startCall = (tutor: Tutor, type: 'audio' | 'video') => {
    setActiveCall(tutor);
  };

  const endCall = () => {
    setActiveCall(null);
    Alert.alert(
      'Appel terminé',
      'La conversation a été enregistrée dans votre historique.'
    );
  };

  // Render call interface if active call exists
  if (activeCall) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                Alert.alert(
                  "Terminer l'appel",
                  'Êtes-vous sûr de vouloir quitter cet appel ?',
                  [
                    {
                      text: 'Annuler',
                      style: 'cancel',
                    },
                    {
                      text: 'Terminer',
                      onPress: endCall,
                    },
                  ]
                );
              }}
            >
              <Ionicons name='arrow-back' size={24} color='#000' />
              <Text style={styles.backButtonText}>Retour</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.callContainer}>
            <CallModeInterface
              tutor={activeCall}
              callType={callType}
              onEndCall={endCall}
              language={selectedLanguage.name}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Appels</Text>
          <Text style={styles.subtitle}>
            Pratiquez avec nos tuteurs IA natifs pour améliorer votre
            prononciation et votre fluidité
          </Text>
        </View>

        <View style={styles.languageSelector}>
          <Text style={styles.sectionTitle}>Choisissez une langue</Text>
          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.languageItem,
                  selectedLanguage.id === item.id && styles.selectedLanguage,
                ]}
                onPress={() => setSelectedLanguage(item)}
              >
                <Text style={styles.languageFlag}>{item.flag}</Text>
                <Text
                  style={[
                    styles.languageName,
                    selectedLanguage.id === item.id &&
                      styles.selectedLanguageText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.callTypeSelector}>
          <Text style={styles.sectionTitle}>Type d'appel</Text>
          <View style={styles.callTypeButtons}>
            <TouchableOpacity
              style={[
                styles.callTypeButton,
                callType === 'audio' && styles.selectedCallType,
              ]}
              onPress={() => setCallType('audio')}
            >
              <Ionicons
                name='call'
                size={24}
                color={callType === 'audio' ? '#fff' : '#4F46E5'}
              />
              <Text
                style={[
                  styles.callTypeText,
                  callType === 'audio' && styles.selectedCallTypeText,
                ]}
              >
                Audio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.callTypeButton,
                callType === 'video' && styles.selectedCallType,
              ]}
              onPress={() => setCallType('video')}
            >
              <Ionicons
                name='videocam'
                size={24}
                color={callType === 'video' ? '#fff' : '#4F46E5'}
              />
              <Text
                style={[
                  styles.callTypeText,
                  callType === 'video' && styles.selectedCallTypeText,
                ]}
              >
                Vidéo
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tutorsSection}>
          <Text style={styles.sectionTitle}>Tuteurs disponibles</Text>
          <FlatList
            data={tutors.filter((tutor) => tutor.available)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TutorCard
                tutor={item}
                callType={callType}
                onCallStart={() => startCall(item, callType)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

type TutorCardProps = {
  tutor: Tutor;
  callType: 'audio' | 'video';
  onCallStart: () => void;
};

const TutorCard = ({ tutor, callType, onCallStart }: TutorCardProps) => {
  return (
    <View style={styles.tutorCard}>
      <View style={styles.tutorInfo}>
        <View style={styles.tutorAvatar}>
          <Text style={styles.tutorAvatarText}>{tutor.avatar}</Text>
        </View>
        <View style={styles.tutorDetails}>
          <View style={styles.tutorNameRow}>
            <Text style={styles.tutorName}>{tutor.name}</Text>
            <Text style={styles.tutorFlag}>{tutor.flag}</Text>
          </View>
          <Text style={styles.tutorLanguage}>{tutor.language}</Text>
          <Text style={styles.tutorLevel}>{tutor.level}</Text>
          <View style={styles.tutorSpecialties}>
            {tutor.specialties.map((specialty, index) => (
              <View key={index} style={styles.specialtyTag}>
                <Text style={styles.specialtyText}>{specialty}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.tutorActions}>
        <TouchableOpacity style={styles.callButton} onPress={onCallStart}>
          <Ionicons
            name={callType === 'audio' ? 'call' : 'videocam'}
            size={20}
            color='#fff'
          />
          <Text style={styles.callButtonText}>
            {callType === 'audio' ? 'Appel audio' : 'Appel vidéo'}
          </Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={16} color='#FFCA28' />
          <Text style={styles.ratingText}>{tutor.rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  languageSelector: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  languageItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  selectedLanguage: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  languageFlag: {
    fontSize: 24,
    marginBottom: 4,
  },
  languageName: {
    fontSize: 14,
    color: '#333',
  },
  selectedLanguageText: {
    color: '#fff',
  },
  callTypeSelector: {
    marginBottom: 20,
  },
  callTypeButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  callTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4F46E5',
    gap: 8,
  },
  selectedCallType: {
    backgroundColor: '#4F46E5',
  },
  callTypeText: {
    fontSize: 16,
    color: '#4F46E5',
  },
  selectedCallTypeText: {
    color: '#fff',
  },
  tutorsSection: {
    flex: 1,
  },
  tutorCard: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  tutorInfo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tutorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tutorAvatarText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  tutorDetails: {
    flex: 1,
  },
  tutorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  tutorFlag: {
    fontSize: 18,
  },
  tutorLanguage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tutorLevel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  tutorSpecialties: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  specialtyTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  specialtyText: {
    fontSize: 12,
    color: '#4b5563',
  },
  tutorActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  backButtonContainer: {
    marginBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
  },
  callContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default CallsScreen;

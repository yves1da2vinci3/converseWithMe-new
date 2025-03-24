import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const botData = [
  {
    id: '1',
    name: 'Sarah',
    avatar: 'S',
    language: 'Anglais',
    description:
      "Professeur d'anglais britannique, spécialisée en conversation quotidienne",
    lastMessage: 'Quand voulez-vous pratiquer à nouveau?',
  },
  {
    id: '2',
    name: 'Miguel',
    avatar: 'M',
    language: 'Espagnol',
    description:
      "Instructeur d'espagnol, focus sur l'apprentissage du vocabulaire",
    lastMessage: 'Hola! ¿Cómo estás hoy?',
  },
  {
    id: '3',
    name: 'Lucie',
    avatar: 'L',
    language: 'Français',
    description: 'Guide de conversation pour intermédiaires et avancés',
    lastMessage: 'Bonjour! Prêt pour une nouvelle leçon?',
  },
  {
    id: '4',
    name: 'Hans',
    avatar: 'H',
    language: 'Allemand',
    description:
      'Expert en grammaire allemande et communication professionnelle',
    lastMessage: 'Guten Tag! Wie geht es Ihnen?',
  },
];

const ChatbotHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='arrow-back' size={24} color='#000' />
          </TouchableOpacity>
          <Text style={styles.title}>Assistants IA</Text>
          <View style={{ width: 24 }} />
        </View>

        <FlatList
          data={botData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.botCard}
              onPress={() => navigation.navigate('botchatRoom', { bot: item })}
            >
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{item.avatar}</Text>
              </View>
              <View style={styles.botInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.botName}>{item.name}</Text>
                  <Text style={styles.language}>{item.language}</Text>
                </View>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>
                <Text style={styles.lastMessage} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  botCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  botInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  botName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  language: {
    fontSize: 14,
    color: '#4F46E5',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default ChatbotHome;

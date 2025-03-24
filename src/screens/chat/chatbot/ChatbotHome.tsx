import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  IconButton,
  List,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
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
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Surface style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon='arrow-left'
            size={24}
            onPress={() => navigation.goBack()}
          />
          <Text variant='titleMedium' style={styles.title}>
            Assistants IA
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <Divider />

        <FlatList
          data={botData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableRipple
              onPress={() => navigation.navigate('botchatRoom', { bot: item })}
            >
              <List.Item
                title={
                  <View style={styles.nameRow}>
                    <Text variant='titleMedium' style={styles.botName}>
                      {item.name}
                    </Text>
                    <Text
                      variant='labelLarge'
                      style={[styles.language, { color: theme.colors.primary }]}
                    >
                      {item.language}
                    </Text>
                  </View>
                }
                description={() => (
                  <View>
                    <Text
                      variant='bodyMedium'
                      style={styles.description}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                    <Text
                      variant='bodySmall'
                      style={styles.lastMessage}
                      numberOfLines={1}
                    >
                      {item.lastMessage}
                    </Text>
                  </View>
                )}
                left={(props) => (
                  <Avatar.Text
                    size={50}
                    label={item.avatar}
                    color='white'
                    style={[
                      props.style,
                      { backgroundColor: theme.colors.primary },
                    ]}
                  />
                )}
                style={styles.botCard}
              />
            </TouchableRipple>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  title: {
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 0,
  },
  botCard: {
    paddingVertical: 8,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    width: '100%',
  },
  botName: {
    fontWeight: 'bold',
  },
  language: {
    fontWeight: '600',
  },
  description: {
    color: '#666',
    marginBottom: 4,
  },
  lastMessage: {
    color: '#999',
    fontStyle: 'italic',
  },
});

export default ChatbotHome;

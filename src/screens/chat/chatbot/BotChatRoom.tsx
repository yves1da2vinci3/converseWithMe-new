import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  Avatar,
  IconButton,
  Surface,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Type pour les messages
type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const BotChatRoom = ({ route, navigation }) => {
  const theme = useTheme();
  const { bot } = route.params;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Bonjour ! Je suis ${bot.name}, votre assistant pour pratiquer ${bot.language}. Comment puis-je vous aider aujourd'hui ?`,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  // Mettre à jour le titre de la navigation
  useEffect(() => {
    navigation.setOptions({
      title: bot.name,
      headerRight: () => (
        <Avatar.Text
          size={32}
          label={bot.avatar}
          color='white'
          style={{ backgroundColor: theme.colors.primary, marginRight: 10 }}
        />
      ),
    });
  }, [navigation, bot, theme.colors.primary]);

  // Simuler une réponse automatique
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponses = [
        "C'est une excellente question !",
        'Je comprends ce que vous voulez dire.',
        'Pouvez-vous développer un peu plus ?',
        'Essayons de pratiquer avec un exemple simple.',
        `En ${bot.language}, nous dirions cela différemment.`,
        "Votre prononciation s'améliore !",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  // Formatage de l'heure pour les messages
  const formatTime = (date: Date) => {
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Surface
              style={[
                styles.messageBubble,
                item.isUser
                  ? [
                      styles.userMessage,
                      { backgroundColor: theme.colors.primary },
                    ]
                  : styles.botMessage,
              ]}
              elevation={1}
            >
              <Text
                style={
                  item.isUser ? styles.messageTextUser : styles.messageText
                }
              >
                {item.text}
              </Text>
              <Text
                variant='labelSmall'
                style={item.isUser ? styles.timestampUser : styles.timestamp}
              >
                {formatTime(item.timestamp)}
              </Text>
            </Surface>
          )}
          contentContainerStyle={styles.messageList}
          inverted={false}
        />

        <Surface style={styles.inputContainer} elevation={4}>
          <TextInput
            style={styles.input}
            placeholder='Écrivez votre message...'
            value={inputText}
            onChangeText={setInputText}
            multiline
            mode='outlined'
            outlineStyle={{ borderRadius: 20 }}
            dense
          />
          <IconButton
            icon='send'
            size={24}
            iconColor='white'
            style={[
              styles.sendButton,
              { backgroundColor: theme.colors.primary },
            ]}
            onPress={handleSendMessage}
          />
        </Surface>
      </KeyboardAvoidingView>
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
  messageList: {
    padding: 16,
    paddingBottom: 16,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botMessage: {
    backgroundColor: '#e2e8f0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageTextUser: {
    fontSize: 16,
    color: '#fff',
  },
  timestamp: {
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timestampUser: {
    color: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 8,
  },
});

export default BotChatRoom;

import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Type pour les messages
type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const BotChatRoom = ({ route, navigation }) => {
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
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{bot.avatar}</Text>
        </View>
      ),
    });
  }, [navigation, bot]);

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
            <View
              style={[
                styles.messageBubble,
                item.isUser ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text
                style={
                  item.isUser ? styles.messageTextUser : styles.messageText
                }
              >
                {item.text}
              </Text>
              <Text
                style={item.isUser ? styles.timestampUser : styles.timestamp}
              >
                {formatTime(item.timestamp)}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.messageList}
          inverted={false}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Écrivez votre message...'
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Ionicons name='send' size={24} color='#fff' />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  container: {
    flex: 1,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
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
    backgroundColor: '#4F46E5',
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
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timestampUser: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default BotChatRoom;

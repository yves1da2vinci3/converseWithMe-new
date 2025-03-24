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

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const HumanChatRoom = ({ route, navigation }) => {
  const { contact } = route.params;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Bonjour ! Comment allez-vous aujourd'hui ?`,
      isUser: false,
      timestamp: new Date(Date.now() - 3600000), // 1 heure avant
    },
    {
      id: '2',
      text: 'Je vais bien, merci ! Pouvons-nous pratiquer un peu de conversation ?',
      isUser: true,
      timestamp: new Date(Date.now() - 3500000),
    },
    {
      id: '3',
      text: 'Bien sûr ! De quoi voulez-vous parler ?',
      isUser: false,
      timestamp: new Date(Date.now() - 3400000),
    },
  ]);
  const [inputText, setInputText] = useState('');

  // Mettre à jour le titre de la navigation
  useEffect(() => {
    navigation.setOptions({
      title: contact.name,
      headerRight: () => (
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{contact.avatar}</Text>
        </View>
      ),
    });
  }, [navigation, contact]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');
  };

  const formatTime = (date) => {
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
                item.isUser ? styles.userMessage : styles.contactMessage,
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
  contactMessage: {
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

export default HumanChatRoom;

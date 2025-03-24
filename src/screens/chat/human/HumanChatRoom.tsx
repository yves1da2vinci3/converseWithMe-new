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

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const HumanChatRoom = ({ route, navigation }) => {
  const theme = useTheme();
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
        <Avatar.Text
          size={32}
          label={contact.avatar}
          color='white'
          style={{ backgroundColor: theme.colors.primary, marginRight: 10 }}
        />
      ),
    });
  }, [navigation, contact, theme.colors.primary]);

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
            contentStyle={styles.inputContent}
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
  inputContent: {
    paddingVertical: 8,
    textAlignVertical: 'center',
  },
  sendButton: {
    marginLeft: 8,
  },
});

export default HumanChatRoom;

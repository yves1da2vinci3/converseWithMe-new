import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  Appbar,
  Avatar,
  Chip,
  Divider,
  IconButton,
  Surface,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Character, MessageType } from '../../types/roleplay';

type ChatInterfaceProps = {
  messages: MessageType[];
  selectedCharacter: Character;
  onSendMessage: (message: string) => void;
  onRestartConversation: () => void;
  onEndConversation: () => void;
  isProcessing: boolean;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  selectedCharacter,
  onSendMessage,
  onRestartConversation,
  onEndConversation,
  isProcessing,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const theme = useTheme();
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() && !isProcessing) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Simuler la reconnaissance vocale (à implémenter avec une vraie API)
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputValue("Comment puis-je vous aider aujourd'hui ?");
      }, 3000);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  const renderMessage = ({ item }: { item: MessageType }) => {
    const isUser = item.role === 'user';

    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.assistantMessage,
        ]}
      >
        {!isUser && (
          <Avatar.Image
            size={36}
            source={{ uri: selectedCharacter.avatar }}
            style={styles.avatar}
          />
        )}
        <Surface
          style={[
            styles.messageBubble,
            isUser
              ? { backgroundColor: theme.colors.primaryContainer }
              : { backgroundColor: theme.colors.surfaceVariant },
          ]}
        >
          <Text
            style={
              isUser ? styles.userMessageText : styles.assistantMessageText
            }
          >
            {item.content}
          </Text>
          <Text style={styles.timestamp}>
            {new Date(item.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </Surface>
        {isUser && <View style={styles.avatarPlaceholder} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Appbar.Header>
        <Appbar.BackAction onPress={onEndConversation} />
        <Avatar.Image size={40} source={{ uri: selectedCharacter.avatar }} />
        <Appbar.Content
          title={selectedCharacter.name}
          subtitle={selectedCharacter.role}
          titleStyle={styles.headerTitle}
        />
        <Appbar.Action
          icon={isSpeaking ? 'volume-high' : 'volume-off'}
          onPress={toggleSpeaking}
        />
        <Appbar.Action icon='refresh' onPress={onRestartConversation} />
      </Appbar.Header>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />

      <Divider />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            mode='outlined'
            value={inputValue}
            onChangeText={setInputValue}
            placeholder='Écrivez votre message...'
            style={styles.input}
            multiline
            maxLength={500}
            right={
              <TextInput.Icon
                icon={isRecording ? 'microphone-outline' : 'microphone'}
                onPress={toggleRecording}
                color={isRecording ? theme.colors.error : undefined}
              />
            }
            disabled={isProcessing}
            contentStyle={styles.inputContent}
            outlineStyle={{ borderRadius: 20 }}
          />
          <IconButton
            icon='send'
            mode='contained'
            size={24}
            onPress={handleSendMessage}
            style={styles.sendButton}
            disabled={inputValue.trim() === '' || isProcessing}
          />
        </View>
        {isProcessing && (
          <Chip icon='loading' style={styles.processingChip}>
            {selectedCharacter.name} est en train d'écrire...
          </Chip>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    marginLeft: 10,
  },
  messagesList: {
    padding: 16,
    paddingBottom: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '90%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
  },
  avatar: {
    marginRight: 8,
    alignSelf: 'flex-end',
  },
  avatarPlaceholder: {
    width: 36,
    marginLeft: 8,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    maxWidth: '85%',
    elevation: 1,
  },
  userMessageText: {
    color: '#000',
  },
  assistantMessageText: {
    color: '#000',
  },
  timestamp: {
    fontSize: 10,
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    maxHeight: 120,
    backgroundColor: 'transparent',
  },
  inputContent: {
    paddingVertical: 8,
    textAlignVertical: 'center',
  },
  sendButton: {
    marginLeft: 8,
    marginBottom: 8,
  },
  processingChip: {
    margin: 8,
    marginTop: 0,
    alignSelf: 'center',
  },
});

export default ChatInterface;

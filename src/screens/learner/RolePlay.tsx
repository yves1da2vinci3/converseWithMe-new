import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { v4 as uuidv4 } from 'uuid';
import CharacterSelect from '../../components/roleplay/CharacterSelect';
import ChatInterface from '../../components/roleplay/ChatInterface';
import ScenarioSelector from '../../components/roleplay/ScenarioSelector';
import {
  Character,
  ConversationState,
  MessageType,
  RoleplayScreen,
  ScenarioType,
} from '../../types/roleplay';
import { scenarios } from '../../utils/roleplayData';

const RolePlay = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    id: 'french',
    name: 'Français',
    flag: '🇫🇷',
  });
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [currentScreen, setCurrentScreen] = useState<RoleplayScreen>(
    RoleplayScreen.SELECT_SCENARIO
  );
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType | null>(
    null
  );
  const [conversation, setConversation] = useState<ConversationState>({
    messages: [],
    isProcessing: false,
    selectedCharacter: null,
  });

  const handleSelectScenario = (scenario: ScenarioType) => {
    setSelectedScenario(scenario);
    setCurrentScreen(RoleplayScreen.SELECT_CHARACTER);
  };

  const handleSelectCharacter = (character: Character) => {
    // Initialiser la conversation avec un message de bienvenue
    const initialMessage: MessageType = {
      id: uuidv4(),
      role: 'assistant',
      content: `Bonjour, je suis ${character.name}. ${character.role}. Comment puis-je vous aider aujourd'hui ?`,
      timestamp: new Date(),
    };

    setConversation({
      messages: [initialMessage],
      isProcessing: false,
      selectedCharacter: character,
    });

    setCurrentScreen(RoleplayScreen.CONVERSATION);
  };

  const handleSendMessage = (messageText: string) => {
    if (!conversation.selectedCharacter) return;

    // Ajouter le message de l'utilisateur
    const userMessage: MessageType = {
      id: uuidv4(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setConversation((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isProcessing: true,
    }));

    // Simuler une réponse de l'IA après un court délai
    setTimeout(() => {
      const responseOptions = [
        "Je comprends tout à fait votre point de vue. Pourriez-vous m'en dire plus ?",
        "C'est une excellente question. Si j'ai bien compris, vous voulez savoir...",
        'Merci pour ces informations. Dans ce cas, je vous suggère de...',
        "Bien sûr, je peux vous aider avec ça. Tout d'abord, il faut considérer...",
        "Intéressant ! Et qu'est-ce qui vous a amené à cette conclusion ?",
      ];

      const aiResponse: MessageType = {
        id: uuidv4(),
        role: 'assistant',
        content:
          responseOptions[Math.floor(Math.random() * responseOptions.length)],
        timestamp: new Date(),
      };

      setConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, aiResponse],
        isProcessing: false,
      }));
    }, 1500);
  };

  const handleRestartConversation = () => {
    if (conversation.selectedCharacter) {
      const initialMessage: MessageType = {
        id: uuidv4(),
        role: 'assistant',
        content: `Bonjour, je suis ${conversation.selectedCharacter.name}. ${conversation.selectedCharacter.role}. Comment puis-je vous aider aujourd'hui ?`,
        timestamp: new Date(),
      };

      setConversation((prev) => ({
        ...prev,
        messages: [initialMessage],
        isProcessing: false,
      }));
    }
  };

  const handleEndConversation = () => {
    setCurrentScreen(RoleplayScreen.SELECT_SCENARIO);
    setSelectedScenario(null);
    setConversation({
      messages: [],
      isProcessing: false,
      selectedCharacter: null,
    });
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case RoleplayScreen.SELECT_SCENARIO:
        return (
          <ScenarioSelector
            scenarios={scenarios}
            onSelectScenario={handleSelectScenario}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );

      case RoleplayScreen.SELECT_CHARACTER:
        if (!selectedScenario) return null;
        return (
          <CharacterSelect
            scenario={selectedScenario}
            onSelectCharacter={handleSelectCharacter}
            onBack={() => setCurrentScreen(RoleplayScreen.SELECT_SCENARIO)}
          />
        );

      case RoleplayScreen.CONVERSATION:
        if (!conversation.selectedCharacter) return null;
        return (
          <ChatInterface
            messages={conversation.messages}
            selectedCharacter={conversation.selectedCharacter}
            onSendMessage={handleSendMessage}
            onRestartConversation={handleRestartConversation}
            onEndConversation={handleEndConversation}
            isProcessing={conversation.isProcessing}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {renderCurrentScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default RolePlay;

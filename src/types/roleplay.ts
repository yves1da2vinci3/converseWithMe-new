export type Character = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
};

export type ScenarioType = {
  id: string;
  title: string;
  description: string;
  icon: string; // Nom d'icône pour React Native
  difficulty: string;
  duration: string;
  popular: boolean;
  characters?: Character[];
  topics?: string[];
  category?: string;
};

export type MessageType = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
};

export enum RoleplayScreen {
  SELECT_SCENARIO = 'select_scenario',
  SELECT_CHARACTER = 'select_character',
  CONVERSATION = 'conversation',
}

export type ConversationState = {
  messages: MessageType[];
  isProcessing: boolean;
  selectedCharacter: Character | null;
};

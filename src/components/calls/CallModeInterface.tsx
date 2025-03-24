import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

interface CallModeInterfaceProps {
  tutor: Tutor;
  callType: 'audio' | 'video';
  onEndCall: () => void;
  language: string;
}

const CallModeInterface: React.FC<CallModeInterfaceProps> = ({
  tutor,
  callType,
  onEndCall,
  language,
}) => {
  const [callDuration, setCallDuration] = useState(0);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [
      {
        text: `Bonjour ! Je suis ${tutor.name}, votre tuteur de ${tutor.language}. Comment puis-je vous aider aujourd'hui ?`,
        isUser: false,
      },
    ]
  );
  const [inputText, setInputText] = useState('');

  // Simuler la durée de l'appel
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formater la durée de l'appel (mm:ss)
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.callerInfo}>
          <Text style={styles.callerName}>{tutor.name}</Text>
          <Text style={styles.callerStatus}>
            {callType === 'video' ? 'Appel vidéo' : 'Appel audio'} ·{' '}
            {formatDuration(callDuration)}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        {callType === 'video' ? (
          <View style={styles.videoContainer}>
            <View style={styles.remoteVideo}>
              <Text style={styles.placeholderText}>{tutor.name}</Text>
            </View>
            <View style={styles.localVideo}>
              <Text style={styles.placeholderTextSmall}>Vous</Text>
            </View>
          </View>
        ) : (
          <View style={styles.audioContainer}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{tutor.avatar}</Text>
            </View>
            <Text style={styles.callerName}>{tutor.name}</Text>
            <Text style={styles.duration}>{formatDuration(callDuration)}</Text>
          </View>
        )}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name='mic' size={24} color='#fff' />
        </TouchableOpacity>

        {callType === 'video' && (
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name='videocam' size={24} color='#fff' />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.controlButton, styles.endCallButton]}
          onPress={onEndCall}
        >
          <Ionicons name='call' size={24} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name='volume-high' size={24} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name='chatbubble-ellipses' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  callerInfo: {
    alignItems: 'center',
  },
  callerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  callerStatus: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  remoteVideo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  localVideo: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 100,
    height: 150,
    backgroundColor: '#555',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 24,
  },
  placeholderTextSmall: {
    color: '#fff',
    fontSize: 16,
  },
  audioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#ef4444',
  },
});

export default CallModeInterface;

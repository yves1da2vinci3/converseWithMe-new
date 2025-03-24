import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Conversations</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('chatbotHome')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name='chatbubble-ellipses' size={40} color='#4F46E5' />
            </View>
            <Text style={styles.cardTitle}>Discuter avec un IA</Text>
            <Text style={styles.cardDescription}>
              Pratiquez avec nos assistants IA pour améliorer votre vocabulaire
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('chathumanHome')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name='people' size={40} color='#4F46E5' />
            </View>
            <Text style={styles.cardTitle}>Discuter avec des apprenants</Text>
            <Text style={styles.cardDescription}>
              Connectez-vous avec d'autres apprenants pour progresser ensemble
            </Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  iconContainer: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ChatHome;

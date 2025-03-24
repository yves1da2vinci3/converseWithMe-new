import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, TouchableRipple, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatHome = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text variant='headlineMedium' style={styles.title}>
          Conversations
        </Text>

        <View style={styles.cardsContainer}>
          <TouchableRipple
            onPress={() => navigation.navigate('chatbotHome')}
            borderless
            style={styles.ripple}
          >
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name='chatbubble-ellipses'
                    size={40}
                    color={theme.colors.primary}
                  />
                </View>
                <Text variant='titleMedium' style={styles.cardTitle}>
                  Discuter avec un IA
                </Text>
                <Text variant='bodyMedium' style={styles.cardDescription}>
                  Pratiquez avec nos assistants IA pour améliorer votre
                  vocabulaire
                </Text>
              </Card.Content>
            </Card>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => navigation.navigate('chathumanHome')}
            borderless
            style={styles.ripple}
          >
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name='people'
                    size={40}
                    color={theme.colors.primary}
                  />
                </View>
                <Text variant='titleMedium' style={styles.cardTitle}>
                  Discuter avec des apprenants
                </Text>
                <Text variant='bodyMedium' style={styles.cardDescription}>
                  Connectez-vous avec d'autres apprenants pour progresser
                  ensemble
                </Text>
              </Card.Content>
            </Card>
          </TouchableRipple>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  cardsContainer: {
    gap: 20,
  },
  ripple: {
    borderRadius: 12,
  },
  card: {
    borderRadius: 12,
  },
  iconContainer: {
    marginBottom: 16,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#666',
    lineHeight: 20,
  },
});

export default ChatHome;

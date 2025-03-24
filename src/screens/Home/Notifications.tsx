import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const notificationsData = [
  {
    id: '1',
    title: 'Nouvel appel disponible',
    message: 'Miguel est disponible pour un appel en espagnol',
    time: 'Il y a 5 min',
    read: false,
  },
  {
    id: '2',
    title: "Rappel d'exercice",
    message: "N'oubliez pas de pratiquer votre français aujourd'hui",
    time: 'Il y a 2h',
    read: false,
  },
  {
    id: '3',
    title: 'Progression hebdomadaire',
    message: 'Vous avez pratiqué 3 langues cette semaine. Excellent !',
    time: 'Hier',
    read: true,
  },
  {
    id: '4',
    title: 'Nouvel exercice ajouté',
    message: 'De nouveaux exercices de prononciation sont disponibles',
    time: 'Il y a 2 jours',
    read: true,
  },
];

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back' size={24} color='#000' />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.notificationItem,
              item.read ? styles.read : styles.unread,
            ]}
          >
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
            {!item.read && <View style={styles.unreadIndicator} />}
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  notificationItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unread: {
    backgroundColor: '#f0f4ff',
  },
  read: {
    backgroundColor: '#f5f5f5',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4F46E5',
    marginLeft: 8,
  },
});

export default Notifications;

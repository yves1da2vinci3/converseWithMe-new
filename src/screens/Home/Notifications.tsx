import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  Searchbar,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Types
type NotificationType = 'message' | 'call' | 'achievement' | 'system';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
  actionable?: boolean;
}

// Données de test
const notificationsData: Notification[] = [
  {
    id: '1',
    type: 'message',
    title: 'Nouveau message',
    message: 'Sarah vous a envoyé un message',
    time: 'Il y a 5 min',
    read: false,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    actionable: true,
  },
  {
    id: '2',
    type: 'call',
    title: 'Appel manqué',
    message: 'Vous avez manqué un appel de Miguel',
    time: 'Il y a 1 h',
    read: false,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    actionable: true,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Objectif atteint !',
    message: 'Vous avez maintenu une séquence de 7 jours',
    time: 'Il y a 3 h',
    read: true,
    actionable: false,
  },
  {
    id: '4',
    type: 'system',
    title: "Mise à jour de l'application",
    message: 'Une nouvelle version est disponible',
    time: 'Il y a 1 j',
    read: true,
    actionable: false,
  },
  {
    id: '5',
    type: 'message',
    title: 'Nouveau message',
    message: 'Lucie vous a envoyé un message',
    time: 'Il y a 2 j',
    read: true,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    actionable: true,
  },
];

const NotificationsScreen = ({ navigation }) => {
  const theme = useTheme();
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const filteredNotifications = notifications.filter(
    (notification) =>
      (filter === 'all' || (filter === 'unread' && !notification.read)) &&
      (searchQuery === '' ||
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getIconForType = (type: NotificationType) => {
    switch (type) {
      case 'message':
        return 'message-text';
      case 'call':
        return 'phone-missed';
      case 'achievement':
        return 'trophy';
      case 'system':
        return 'information';
      default:
        return 'bell';
    }
  };

  const getIconColorForType = (type: NotificationType) => {
    switch (type) {
      case 'message':
        return theme.colors.primary;
      case 'call':
        return '#ef4444';
      case 'achievement':
        return '#f59e0b';
      case 'system':
        return '#3b82f6';
      default:
        return theme.colors.primary;
    }
  };

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <TouchableRipple
      onPress={() => {
        markAsRead(item.id);
        // Navigation vers le détail selon le type
        if (item.actionable) {
          if (item.type === 'message') {
            // Navigation vers la conversation
          } else if (item.type === 'call') {
            // Navigation vers l'historique des appels
          }
        }
      }}
    >
      <Surface
        style={[
          styles.notificationItem,
          !item.read && { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <View style={styles.notificationHeader}>
          <View style={styles.notificationLeft}>
            {item.avatar ? (
              <Avatar.Image size={48} source={{ uri: item.avatar }} />
            ) : (
              <Avatar.Icon
                size={48}
                icon={getIconForType(item.type)}
                style={{ backgroundColor: getIconColorForType(item.type) }}
              />
            )}

            <View style={styles.notificationContent}>
              <Text
                variant='titleMedium'
                style={[
                  styles.notificationTitle,
                  !item.read && styles.unreadText,
                ]}
              >
                {item.title}
              </Text>
              <Text variant='bodyMedium' style={styles.notificationMessage}>
                {item.message}
              </Text>
              <Text variant='bodySmall' style={styles.notificationTime}>
                {item.time}
              </Text>
            </View>
          </View>

          {!item.read && <View style={styles.unreadIndicator} />}

          <IconButton
            icon='delete'
            size={20}
            onPress={() => deleteNotification(item.id)}
          />
        </View>
      </Surface>
    </TouchableRipple>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text variant='headlineMedium' style={styles.title}>
          Notifications
        </Text>
        <IconButton icon='check-all' size={24} onPress={markAllAsRead} />
      </View>

      <Searchbar
        placeholder='Rechercher dans les notifications'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      <View style={styles.filterContainer}>
        <Chip
          selected={filter === 'all'}
          onPress={() => setFilter('all')}
          style={styles.filterChip}
        >
          Toutes
        </Chip>
        <Chip
          selected={filter === 'unread'}
          onPress={() => setFilter('unread')}
          style={styles.filterChip}
        >
          Non lues
        </Chip>
      </View>

      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.notificationsList}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text variant='titleMedium'>Aucune notification</Text>
            <Text variant='bodyMedium'>
              Vous n'avez aucune notification{' '}
              {filter === 'unread' ? 'non lue' : ''} pour le moment.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    borderRadius: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  filterChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  notificationsList: {
    paddingBottom: 16,
  },
  notificationItem: {
    padding: 16,
    elevation: 1,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  notificationContent: {
    marginLeft: 16,
    flex: 1,
  },
  notificationTitle: {
    fontWeight: '600',
  },
  notificationMessage: {
    marginTop: 4,
  },
  notificationTime: {
    marginTop: 8,
    color: '#666',
  },
  unreadText: {
    fontWeight: 'bold',
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4F46E5',
    marginRight: 8,
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificationsScreen;

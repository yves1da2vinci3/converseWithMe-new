import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Badge,
  Divider,
  List,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Données simulées de conversations
const chatData = [
  {
    id: '1',
    name: 'Emma',
    avatar: 'E',
    language: 'Anglais',
    lastMessage: 'Hello! Are you free to practice tomorrow?',
    time: '10:30',
    unread: 2,
  },
  {
    id: '2',
    name: 'Carlos',
    avatar: 'C',
    language: 'Espagnol',
    lastMessage: '¡Hola! ¿Cómo va tu estudio?',
    time: '09:15',
    unread: 0,
  },
  {
    id: '3',
    name: 'Sophie',
    avatar: 'S',
    language: 'Français',
    lastMessage: 'Je serai disponible ce weekend.',
    time: 'Hier',
    unread: 0,
  },
  {
    id: '4',
    name: 'Markus',
    avatar: 'M',
    language: 'Allemand',
    lastMessage: 'Danke für deine Hilfe!',
    time: '15/06',
    unread: 0,
  },
];

const ChatHumanHome = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Surface style={styles.container}>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableRipple
              onPress={() =>
                navigation.navigate('humanchatRoom', { contact: item })
              }
            >
              <List.Item
                title={
                  <View style={styles.chatHeader}>
                    <Text variant='titleMedium' style={styles.name}>
                      {item.name}
                    </Text>
                    <Text variant='bodySmall' style={styles.time}>
                      {item.time}
                    </Text>
                  </View>
                }
                description={() => (
                  <View style={styles.chatFooter}>
                    <Text
                      variant='bodyMedium'
                      style={styles.lastMessage}
                      numberOfLines={1}
                    >
                      {item.lastMessage}
                    </Text>
                    {item.unread > 0 && (
                      <Badge
                        size={22}
                        style={{ backgroundColor: theme.colors.primary }}
                      >
                        {item.unread}
                      </Badge>
                    )}
                  </View>
                )}
                left={(props) => (
                  <Avatar.Text
                    size={50}
                    label={item.avatar}
                    color='white'
                    style={[
                      props.style,
                      { backgroundColor: theme.colors.primary },
                    ]}
                  />
                )}
                style={styles.chatItem}
              />
            </TouchableRipple>
          )}
          ItemSeparatorComponent={() => <Divider />}
          contentContainerStyle={styles.listContainer}
        />
      </Surface>
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
  listContainer: {
    flexGrow: 1,
  },
  chatItem: {
    padding: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#666',
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  lastMessage: {
    color: '#666',
    flex: 1,
    marginRight: 8,
  },
});

export default ChatHumanHome;

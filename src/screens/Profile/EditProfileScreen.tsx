import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  IconButton,
  List,
  Surface,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfileScreen = ({ navigation }) => {
  const theme = useTheme();
  const [name, setName] = useState('Alex Dupont');
  const [email, setEmail] = useState('alex.dupont@example.com');
  const [avatar, setAvatar] = useState('A');

  const handleSave = () => {
    // Simuler la sauvegarde
    Alert.alert(
      'Profil mis à jour',
      'Vos informations ont été mises à jour avec succès.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.container}>
        <Surface style={styles.avatarSection} elevation={0}>
          <Avatar.Text
            size={100}
            label={avatar}
            color={theme.colors.onPrimary}
            style={{ backgroundColor: theme.colors.primary }}
          />
          <Button
            mode='outlined'
            onPress={() => {}}
            style={styles.changeAvatarButton}
          >
            Changer
          </Button>
        </Surface>

        <View style={styles.formGroup}>
          <Text variant='labelLarge' style={styles.label}>
            Nom
          </Text>
          <TextInput
            mode='outlined'
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Text variant='labelLarge' style={styles.label}>
            Email
          </Text>
          <TextInput
            mode='outlined'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Text variant='titleMedium' style={styles.sectionTitle}>
            Langues parlées
          </Text>

          <List.Item
            title='Français'
            description='Natif'
            left={(props) => (
              <Text {...props} style={styles.languageFlag}>
                🇫🇷
              </Text>
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon='close-circle'
                iconColor={theme.colors.error}
                onPress={() => {}}
              />
            )}
            style={[
              styles.languageItem,
              { backgroundColor: theme.colors.surfaceVariant },
            ]}
          />

          <List.Item
            title='Anglais'
            description='Avancé'
            left={(props) => (
              <Text {...props} style={styles.languageFlag}>
                🇬🇧
              </Text>
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon='close-circle'
                iconColor={theme.colors.error}
                onPress={() => {}}
              />
            )}
            style={[
              styles.languageItem,
              { backgroundColor: theme.colors.surfaceVariant },
            ]}
          />

          <List.Item
            title='Espagnol'
            description='Intermédiaire'
            left={(props) => (
              <Text {...props} style={styles.languageFlag}>
                🇪🇸
              </Text>
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon='close-circle'
                iconColor={theme.colors.error}
                onPress={() => {}}
              />
            )}
            style={[
              styles.languageItem,
              { backgroundColor: theme.colors.surfaceVariant },
            ]}
          />

          <Button
            mode='outlined'
            icon='plus'
            onPress={() => {}}
            style={styles.addButton}
          >
            Ajouter une langue
          </Button>
        </View>

        <Button mode='contained' onPress={handleSave} style={styles.saveButton}>
          Enregistrer
        </Button>
      </ScrollView>
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
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  languageItem: {
    marginBottom: 12,
    borderRadius: 8,
  },
  languageFlag: {
    fontSize: 24,
  },
  addButton: {
    borderStyle: 'dashed',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  saveButton: {
    marginTop: 12,
    marginBottom: 30,
    paddingVertical: 6,
  },
});

export default EditProfileScreen;

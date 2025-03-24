import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any, 'login'>;
};

const Login = ({ navigation }: LoginScreenProps) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Dans un cas réel, nous ferions une vérification d'authentification ici
    // Pour l'instant, simulons une connexion réussie et naviguons vers l'écran principal
    navigation.reset({
      index: 0,
      routes: [{ name: 'main' }],
    });
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.container}>
        <Text variant='headlineLarge' style={styles.title}>
          ConverseWithMe
        </Text>
        <Text
          variant='titleMedium'
          style={{ marginBottom: 30, color: theme.colors.outline }}
        >
          Connectez-vous pour continuer
        </Text>

        <View style={styles.form}>
          <TextInput
            label='Email'
            mode='outlined'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.input}
          />

          <TextInput
            label='Mot de passe'
            mode='outlined'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            style={styles.input}
          />

          <Button mode='contained' onPress={handleLogin} style={styles.button}>
            Se connecter
          </Button>

          <Button
            mode='text'
            onPress={() => navigation.navigate('register')}
            style={styles.registerLink}
          >
            Vous n'avez pas de compte ? Inscrivez-vous ici
          </Button>
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
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,
  },
  registerLink: {
    marginTop: 20,
  },
});

export default Login;

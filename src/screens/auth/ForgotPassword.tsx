import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Card,
  HelperText,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  login: undefined;
  register: undefined;
  home: undefined;
};

type ForgotPasswordNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const ForgotPassword = () => {
  const theme = useTheme();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("L'email est requis");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Veuillez entrer un email valide');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      // Simuler l'envoi d'un email de récupération
      console.log('Demande de récupération envoyée à:', email);
      setIsSubmitted(true);
    }
  };

  const handleResend = () => {
    // Simuler l'envoi d'un nouvel email
    console.log('Nouvel email envoyé à:', email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.backButtonContainer}>
            <IconButton
              icon='arrow-left'
              size={24}
              onPress={() => navigation.navigate('login')}
            />
          </View>

          <View style={styles.header}>
            <Text variant='headlineMedium' style={styles.title}>
              Mot de passe oublié
            </Text>
            <Text variant='bodyMedium' style={styles.subtitle}>
              Entrez votre adresse email pour recevoir un lien de
              réinitialisation
            </Text>
          </View>

          {!isSubmitted ? (
            <View style={styles.formContainer}>
              <TextInput
                label='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode='outlined'
                keyboardType='email-address'
                autoCapitalize='none'
                error={!!emailError}
                left={<TextInput.Icon icon='email' />}
              />
              {emailError ? (
                <HelperText type='error' visible={!!emailError}>
                  {emailError}
                </HelperText>
              ) : null}

              <Button
                mode='contained'
                onPress={handleSubmit}
                style={styles.button}
                contentStyle={styles.buttonContent}
              >
                Envoyer le lien
              </Button>

              <View style={styles.loginContainer}>
                <Text variant='bodyMedium'>
                  Vous vous souvenez de votre mot de passe?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={styles.loginText}>Se connecter</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Card style={styles.successCard}>
              <Card.Content>
                <View style={styles.successIconContainer}>
                  <IconButton
                    icon='check-circle'
                    size={60}
                    iconColor={theme.colors.primary}
                  />
                </View>
                <Text variant='titleLarge' style={styles.successTitle}>
                  Email envoyé
                </Text>
                <Text variant='bodyMedium' style={styles.successText}>
                  Un lien de réinitialisation a été envoyé à {email}. Veuillez
                  vérifier votre boîte de réception.
                </Text>

                <Button
                  mode='text'
                  onPress={handleResend}
                  style={styles.resendButton}
                >
                  Renvoyer le lien
                </Button>

                <Button
                  mode='contained'
                  onPress={() => navigation.navigate('login')}
                  style={styles.backLoginButton}
                >
                  Retour à la connexion
                </Button>
              </Card.Content>
            </Card>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    gap: 4,
  },
  loginText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  successCard: {
    padding: 16,
    marginTop: 20,
  },
  successIconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  successTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  successText: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  resendButton: {
    marginBottom: 16,
  },
  backLoginButton: {
    borderRadius: 8,
  },
});

export default ForgotPassword;

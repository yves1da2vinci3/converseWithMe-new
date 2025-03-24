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
  Checkbox,
  Divider,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  home: undefined;
  login: undefined;
  register: undefined;
};

type RegisterNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Register = () => {
  const theme = useTheme();
  const navigation = useNavigation<RegisterNavigationProp>();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [secureTextEntry, setSecureTextEntry] = useState({
    password: true,
    confirmPassword: true,
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validation du nom complet
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis';
      isValid = false;
    } else {
      newErrors.fullName = '';
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password =
        'Le mot de passe doit contenir au moins 6 caractères';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      isValid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm() && termsAccepted) {
      // Logique d'inscription à implémenter
      console.log('Inscription réussie', formData);
      navigation.navigate('login');
    } else if (!termsAccepted) {
      // Alerte pour les termes et conditions
      console.log('Veuillez accepter les termes et conditions');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text variant='headlineMedium' style={styles.title}>
              Créer un compte
            </Text>
            <Text variant='bodyMedium' style={styles.subtitle}>
              Commencez votre voyage d'apprentissage linguistique
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              label='Nom complet'
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              style={styles.input}
              mode='outlined'
              error={!!errors.fullName}
              left={<TextInput.Icon icon='account' />}
            />
            {errors.fullName ? (
              <HelperText type='error' visible={!!errors.fullName}>
                {errors.fullName}
              </HelperText>
            ) : null}

            <TextInput
              label='Email'
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              style={styles.input}
              mode='outlined'
              keyboardType='email-address'
              autoCapitalize='none'
              error={!!errors.email}
              left={<TextInput.Icon icon='email' />}
            />
            {errors.email ? (
              <HelperText type='error' visible={!!errors.email}>
                {errors.email}
              </HelperText>
            ) : null}

            <TextInput
              label='Mot de passe'
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              secureTextEntry={secureTextEntry.password}
              style={styles.input}
              mode='outlined'
              error={!!errors.password}
              left={<TextInput.Icon icon='lock' />}
              right={
                <TextInput.Icon
                  icon={secureTextEntry.password ? 'eye-off' : 'eye'}
                  onPress={() =>
                    setSecureTextEntry({
                      ...secureTextEntry,
                      password: !secureTextEntry.password,
                    })
                  }
                />
              }
            />
            {errors.password ? (
              <HelperText type='error' visible={!!errors.password}>
                {errors.password}
              </HelperText>
            ) : null}

            <TextInput
              label='Confirmer le mot de passe'
              value={formData.confirmPassword}
              onChangeText={(text) =>
                setFormData({ ...formData, confirmPassword: text })
              }
              secureTextEntry={secureTextEntry.confirmPassword}
              style={styles.input}
              mode='outlined'
              error={!!errors.confirmPassword}
              left={<TextInput.Icon icon='lock-check' />}
              right={
                <TextInput.Icon
                  icon={secureTextEntry.confirmPassword ? 'eye-off' : 'eye'}
                  onPress={() =>
                    setSecureTextEntry({
                      ...secureTextEntry,
                      confirmPassword: !secureTextEntry.confirmPassword,
                    })
                  }
                />
              }
            />
            {errors.confirmPassword ? (
              <HelperText type='error' visible={!!errors.confirmPassword}>
                {errors.confirmPassword}
              </HelperText>
            ) : null}

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={termsAccepted ? 'checked' : 'unchecked'}
                onPress={() => setTermsAccepted(!termsAccepted)}
                color={theme.colors.primary}
              />
              <Text style={styles.termsText}>
                J'accepte les{' '}
                <Text
                  style={styles.termsLink}
                  onPress={() => console.log('Terms pressed')}
                >
                  termes et conditions
                </Text>
              </Text>
            </View>

            <Button
              mode='contained'
              onPress={handleRegister}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              S'inscrire
            </Button>

            <Divider style={styles.divider} />

            <View style={styles.loginContainer}>
              <Text variant='bodyMedium'>Vous avez déjà un compte?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.loginText}>Se connecter</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
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
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  termsText: {
    marginLeft: 8,
    fontSize: 14,
  },
  termsLink: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  divider: {
    marginVertical: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  loginText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
});

export default Register;

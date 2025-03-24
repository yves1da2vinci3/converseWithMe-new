import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, useTheme } from 'react-native-paper';
import { Colors } from './colors/constants';

// Extension de l'interface du thème de Paper
type AppTheme = typeof MD3LightTheme;

// Configuration des thèmes clair et sombre
export const useConfigTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Thème clair personnalisé
  const lightTheme: AppTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: Colors.primary,
      primaryContainer: Colors.primaryContainer,
      onPrimary: Colors.onPrimary,
      onPrimaryContainer: Colors.onPrimaryContainer,
      secondary: Colors.secondary,
      secondaryContainer: Colors.secondaryContainer,
      onSecondary: Colors.onSecondary,
      onSecondaryContainer: Colors.onSecondaryContainer,
      tertiary: Colors.tertiary,
      tertiaryContainer: Colors.tertiaryContainer,
      onTertiary: Colors.onTertiary,
      onTertiaryContainer: Colors.onTertiaryContainer,
      error: Colors.error,
      errorContainer: Colors.errorContainer,
      onError: Colors.onError,
      onErrorContainer: Colors.onErrorContainer,
      background: Colors.lightBackground,
      surface: Colors.lightSurface,
      onBackground: Colors.lightOnBackground,
      onSurface: Colors.lightOnSurface,
    },
  };

  // Thème sombre personnalisé
  const darkTheme: AppTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: Colors.primary,
      primaryContainer: Colors.primaryContainer,
      onPrimary: Colors.onPrimary,
      onPrimaryContainer: Colors.onPrimaryContainer,
      secondary: Colors.secondary,
      secondaryContainer: Colors.secondaryContainer,
      onSecondary: Colors.onSecondary,
      onSecondaryContainer: Colors.onSecondaryContainer,
      tertiary: Colors.tertiary,
      tertiaryContainer: Colors.tertiaryContainer,
      onTertiary: Colors.onTertiary,
      onTertiaryContainer: Colors.onTertiaryContainer,
      error: Colors.error,
      errorContainer: Colors.errorContainer,
      onError: Colors.onError,
      onErrorContainer: Colors.onErrorContainer,
      background: Colors.darkBackground,
      surface: Colors.darkSurface,
      onBackground: Colors.darkOnBackground,
      onSurface: Colors.darkOnSurface,
    },
  };

  return isDarkMode ? darkTheme : lightTheme;
};

export { useTheme };

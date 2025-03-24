import { Platform } from 'react-native';
import { MD3LightTheme } from 'react-native-paper';

export const fontConfig = {
  ...MD3LightTheme.fonts,
  customVariant: {
    fontFamily: Platform.select({
      web: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      android: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 16,
  },
  default: {
    fontFamily: Platform.select({
      web: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      android: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  displayLarge: {
    fontFamily: Platform.select({
      web: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      android: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
};

import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './AppNavigator';
import { useConfigTheme } from './src/theme';

export default function App() {
  const paperTheme = useConfigTheme();
  const [fontsLoaded, _] = useFonts({
    Inter_900Black,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <StatusBar style='auto' />
        <AppNavigator />
      </PaperProvider>
    </>
  );
}

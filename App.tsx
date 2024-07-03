import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import useConfigTheme from "./src/theme";
import AppNavigator from "./AppNavigator";
import { useFonts } from "expo-font";
import {
  Inter_900Black,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
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
        <StatusBar style="auto" />
        <AppNavigator />
      </PaperProvider>
    </>
  );
}

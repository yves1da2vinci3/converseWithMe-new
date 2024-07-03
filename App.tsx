import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import useConfigTheme from "./src/theme";
import AppNavigator from "./AppNavigator";
export default function App() {
  const paperTheme = useConfigTheme();
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <StatusBar style="auto" />
        <AppNavigator />
      </PaperProvider>
    </>
  );
}

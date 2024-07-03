import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import AppNNavigator from "./AppNavigator";
import useConfigTheme from "./src/theme";
export default function App() {
  const paperTheme = useConfigTheme();
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <StatusBar style="auto" />
        <AppNNavigator />
      </PaperProvider>
    </>
  );
}

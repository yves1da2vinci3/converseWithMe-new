import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import lightTheme from "./colors/lightTheme.json";
import darkTheme from "./colors/darkTheme.json";

const useConfigTheme = () => {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: darkTheme.colors }
      : { ...MD3LightTheme, colors: lightTheme.colors };
  return paperTheme;
};

export default useConfigTheme;

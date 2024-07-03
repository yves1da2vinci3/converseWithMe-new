import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import lightTheme from "./colors/lightTheme.json";
import darkTheme from "./colors/darkTheme.json";
import { Colors } from "./colors/constants";

const useConfigTheme = () => {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark"
      ? {
          ...MD3DarkTheme,
          colors: {
            ...MD3DarkTheme.colors,
            primary: Colors.primary,
            secondary: Colors.secondary,
            tertiary: Colors.tertiary,
            onPrimary: "white",
          },
        }
      : {
          ...MD3LightTheme,
          colors: {
            ...MD3DarkTheme.colors,
            primary: Colors.primary,
            secondary: Colors.secondary,
            tertiary: Colors.tertiary,
            onPrimary: "white",
          },
        };
  return paperTheme;
};

export default useConfigTheme;

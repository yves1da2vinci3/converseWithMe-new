import { useColorScheme } from "react-native";
import {
  MD3LightTheme,
  MD3DarkTheme,
  configureFonts,
} from "react-native-paper";
import { Colors } from "./colors/constants";
import { fontConfig } from "./fonts";

const useConfigTheme = () => {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark"
      ? {
          ...MD3DarkTheme,
          fonts: configureFonts({ config: fontConfig }),
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
          fonts: configureFonts({ config: fontConfig }),
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

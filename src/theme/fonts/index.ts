import { Platform } from "react-native";
import { MD3LightTheme } from "react-native-paper";
const fontConfig = {
    customVariant: {
      fontFamily: Platform.select({
        web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        ios: 'System',
        default: 'sans-serif',
      }),
      fontWeight: '400',
      letterSpacing: 0.5,
      lineHeight: 22,
      fontSize: 20,
    }
  };
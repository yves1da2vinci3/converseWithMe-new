import { Platform } from "react-native";
import { MD3LightTheme } from "react-native-paper";
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
    fontSize: 20,
  },
  default: {
  "fontFamily": "FontFamily",
  "fontWeight": "400",
  "letterSpacing": 0,
}
};


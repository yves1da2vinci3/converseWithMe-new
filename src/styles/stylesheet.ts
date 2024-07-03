import { StyleSheet } from "react-native";
import { Colors } from "../theme/colors/constants";
import { hp } from "../utils/responsive";

export const globalStyleSheet = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: "Inter_900Black",
    color: "primary",
  },
  button: {
    height: hp("7%"),
  },
  buttonLabel: {
    fontFamily: "Inter_900Black",
    fontWeight: "bold",
    
  },
  colorGold: {
    color: Colors.primary,
  },
  blacColor: {
    color: "black",
  },
});

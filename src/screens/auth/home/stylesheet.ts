import { StyleSheet } from "react-native";
import { wp } from "../../../utils/responsive";
import { Colors } from "../../../theme/colors/constants";

export const homeStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: wp("5%"),
  },
  text: {
    alignSelf : "flex-start",
    textAlign :"left",
    fontFamily: "Inter_900Black",
  },
  colorGold: {
    color: Colors.primary,
  },
});

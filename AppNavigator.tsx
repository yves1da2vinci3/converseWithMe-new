import { StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
export default function AppNavigator() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Button
        buttonColor={theme.colors.primary}
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
});

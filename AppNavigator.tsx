import { StyleSheet, View } from "react-native";
import { Avatar, Card, FAB, Text, useTheme } from "react-native-paper";
import { Button } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function AppNNavigator() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <Text> je dis que lol </Text>
      <FAB
        icon="plus"
        background={{
          color: theme.colors.tertiary,
        }}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding : 30
  },
});

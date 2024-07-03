import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/stacks/AuthStack";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="auth"
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

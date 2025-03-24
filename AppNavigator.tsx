import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/stacks/AuthStack';
import CallsStack from './src/navigation/stacks/CallsStack';
import ChatStack from './src/navigation/stacks/ChatStack';
import HomeStack from './src/navigation/stacks/HomeStack';
import ProfileStack from './src/navigation/stacks/ProfileStack';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'calls') {
              iconName = focused ? 'call' : 'call-outline';
            } else if (route.name === 'profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name='home'
          component={HomeStack}
          options={{ tabBarLabel: 'Accueil' }}
        />
        <Tab.Screen
          name='chat'
          component={ChatStack}
          options={{ tabBarLabel: 'Chat' }}
        />
        <Tab.Screen
          name='calls'
          component={CallsStack}
          options={{ tabBarLabel: 'Appels' }}
        />
        <Tab.Screen
          name='profile'
          component={ProfileStack}
          options={{ tabBarLabel: 'Profil' }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='auth'
          component={AuthStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='main'
          component={MainTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

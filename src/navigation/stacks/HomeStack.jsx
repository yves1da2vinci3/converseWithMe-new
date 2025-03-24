import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/Home/Home';
import Notifications from '../../screens/Home/Notifications';
import RolePlay from '../../screens/learner/RolePlay';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='stats'
        component={Home}
      />
      <Stack.Screen name='notification' component={Notifications} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='roleplay'
        component={RolePlay}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

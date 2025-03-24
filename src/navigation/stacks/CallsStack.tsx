import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CallsScreen from '../../screens/learner/calls/CallsScreen';

const CallsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='calls'
        component={CallsScreen}
      />
    </Stack.Navigator>
  );
};

export default CallsStack;

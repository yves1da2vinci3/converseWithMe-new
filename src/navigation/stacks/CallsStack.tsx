import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CallDetailScreen from '../../screens/learner/calls/CallDetailScreen';
import CallsScreen from '../../screens/learner/calls/CallsScreen';

type CallsStackParamList = {
  calls: undefined;
  CallDetail: {
    tutorId: string;
  };
};

const CallsStack = () => {
  const Stack = createNativeStackNavigator<CallsStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='calls'
        component={CallsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='CallDetail'
        component={CallDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CallsStack;

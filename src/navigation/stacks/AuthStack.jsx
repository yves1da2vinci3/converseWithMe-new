import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import Home from '../../screens/auth/home/Home';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='register' component={Register} />
      <Stack.Screen name='forgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

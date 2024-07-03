import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/auth/Login'
import Home from '../../screens/auth/Home'
import Register from '../../screens/auth/Register'

const AuthStack = () => {
    const Stack  = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
    <Stack.Screen name='home' component={Home}  />
    <Stack.Screen name='login' component={Login}  />
    <Stack.Screen name='register' component={Register}  />
    </Stack.Navigator>
  )
}

export default AuthStack
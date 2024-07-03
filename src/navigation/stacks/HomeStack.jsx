import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home/Home'
import Notifications from '../../screens/Home/Notifications'

const HomeStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown : false}} name='stats' component={Home} />
      <Stack.Screen name='notification' component={Notifications} />
    </Stack.Navigator>
  )
}

export default HomeStack
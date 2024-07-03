import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatHome from '../../screens/chat/ChatHome'
import BotChatRoom from '../../screens/chat/chatbot/BotChatRoom'
import ChatbotHome from '../../screens/chat/chatbot/ChatbotHome'
import ChatHumanHome from '../../screens/chat/human/ChatList'
import HumanChatRoom from '../../screens/chat/human/HumanChatRoom'

const ChatStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown : false }} >
      <Stack.Screen options={{ headerShown : false ,title : "" }} name='chatHome' component={ChatHome} />
      <Stack.Screen name='chatbotHome' component={ChatbotHome} />
      <Stack.Screen options={{ headerShown : true ,title : "" }} name='botchatRoom' component={BotChatRoom} />
      <Stack.Screen options={{headerShown: true,title:"Discussions"}} name='chathumanHome' component={ChatHumanHome} />
      <Stack.Screen options={{ headerShown : true ,title : "" }} name='humanchatRoom' component={HumanChatRoom} />
    </Stack.Navigator>
  )
}

export default ChatStack
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen.js'
import ChatListScreen from '../screens/ChatListScreen.js';
import ChatScreen from '../screens/ChatScreen.js';


const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return(
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{title: "Chat List"}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title: "Chat"}}/>
      </Stack.Navigator>
  );
}
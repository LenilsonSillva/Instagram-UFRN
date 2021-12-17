import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen.js';
import LoggedTabNavigator from './navigator/LoggedTabNavigator';


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LoggedTabNavigator" component="LoggedTabNavigator" options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
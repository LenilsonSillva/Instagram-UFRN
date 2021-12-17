import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'

const Tab = createBottomTabNavigator();

export default function LoggedTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStackNavigator" component="HomeStackNavigator"/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

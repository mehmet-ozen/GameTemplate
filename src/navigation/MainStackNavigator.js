import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='GameScreen' component={GameScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../home';
import { NavigationContainer } from '@react-navigation/native';
import Map from '../map';
import WeatherDetails from '../weather-details';
import Header from '../../components/common/header';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{
                header: (props) => <Header {...props}/>}}>
            <Stack.Screen name='home' component={Home} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='map' component={Map} options={{title:"Map"}}></Stack.Screen>
            <Stack.Screen name='details' component={WeatherDetails} options={{title:"Details"}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})
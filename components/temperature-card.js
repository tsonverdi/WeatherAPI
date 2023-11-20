import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/constants/colors'
import {
    useFonts,
    SmoochSans_100Thin,
    SmoochSans_200ExtraLight,
    SmoochSans_300Light,
    SmoochSans_400Regular,
    SmoochSans_500Medium,
    SmoochSans_600SemiBold,
    SmoochSans_700Bold,
    SmoochSans_800ExtraBold,
    SmoochSans_900Black,
  } from '@expo-google-fonts/smooch-sans';


const TemperatureCard = () => {
    let [fontsLoaded] = useFonts({
        SmoochSans_100Thin,
        SmoochSans_200ExtraLight,
        SmoochSans_300Light,
        SmoochSans_400Regular,
        SmoochSans_500Medium,
        SmoochSans_600SemiBold,
        SmoochSans_700Bold,
        SmoochSans_800ExtraBold,
        SmoochSans_900Black,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    
  return (
    <View style={styles.temperature}>
            <Text style={styles.degree}>30°</Text>
            <Text style={styles.weather}>sunny</Text>
      </View>
  )
}

export default TemperatureCard

const styles = StyleSheet.create({
    temperature:{
        marginTop:30,
        flexDirection:'row',
        alignItems:"baseline",
        justifyContent:"center",
        
    },
    degree:{
        fontSize:70,
        fontWeight:"bold",
        color:colors.color1,
        fontFamily:'SmoochSans_600SemiBold'
    },
    weather:{
        fontSize:24,
        color:colors.color1,
        fontFamily:'SmoochSans_600SemiBold'
    },
})
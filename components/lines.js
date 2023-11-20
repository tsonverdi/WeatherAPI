import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import colors from '../utils/constants/colors'
import Icon from '@expo/vector-icons/Ionicons'
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


const Lines = () => {
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
    <View style={styles.lines}>
          <View style={styles.content}>
              <Icon color={"white"} style={styles.icon} name="thunderstorm-outline" size={25}/>
              <Text style={styles.textStyle}>Thursday</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>20°/13°</Text>
            </View>
        </View>
  )
}

export default Lines

const styles = StyleSheet.create({
    content: {
        flexDirection:"row",
        alignItems:'center',
        gap:10
      },
      lines:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          marginBottom:17
       },
       textStyle:{
        fontSize:25,
        color:colors.color1,
        fontFamily:'SmoochSans_600SemiBold',
        
       }
})
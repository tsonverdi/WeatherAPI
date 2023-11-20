import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import colors from '../utils/constants/colors'
import Icon from '@expo/vector-icons/Ionicons'
import Lines from './lines'

const WeatherCard = () => {
  return (
      <View style={styles.container}>
        <Lines/>
        <Lines/>
        <Lines/>
      </View>  
            
    
  )
}

export default WeatherCard

const styles = StyleSheet.create({
  container:{
     flexDirection: 'column',
   },

   
})
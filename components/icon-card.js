import { Image,StyleSheet, View } from 'react-native'
import React from 'react'
import sun from '../assets/sun.png'

const IconCard = () => {
  return (
    <View style={styles.icon}>
        <Image source={sun} style={styles.weatherIcon}/>
     </View>
  )
}

export default IconCard

const styles = StyleSheet.create({
    weatherIcon: {
        width: 240,
        height: 240,
        position:"absolute",
        marginLeft:50,
        marginTop:60
    },
})
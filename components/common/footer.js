import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/constants/colors'
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
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

  
const Footer = () => {
  const navigation = useNavigation();
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
    <View style={styles.footer}>
      <Button labelStyle={styles.button} 
      onPress={()=> navigation.navigate("details")} >more  ></Button>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    alignItems: 'flex-end',
    paddingTop:10,
    
  },
  button:{
    fontSize:17,
    color:colors.color1,
    fontFamily:'SmoochSans_600SemiBold',
    alignItems:"baseline"
   }
})
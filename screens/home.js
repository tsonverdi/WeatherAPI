import {KeyboardAvoidingView ,Image, ScrollView, StyleSheet, Text, View, SectionList, Keyboard, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Card, Searchbar, Title } from 'react-native-paper'
import Icon from "@expo/vector-icons/Ionicons"
import colors from '../utils/constants/colors'
import MyContext from '../store'
import Spacer from '../components/common/Spacer'
import WeatherCard from '../components/weather-card'
import Footer from '../components/common/footer'
import TemperatureCard from '../components/temperature-card'
import IconCard from '../components/icon-card'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
import { useNavigation } from '@react-navigation/native'
  
    
    
//burada flex:1 yerine butun ekran heightini verdim
const height = Dimensions.get("window").height;

const Home = () => {
    const {searchBarVisible,setSearchBarVisible} = useContext(MyContext);
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
    
    <View style={styles.container} >
     
      <View style={styles.header}>
        <Icon name="location-sharp" size={24} color={colors.color1} onPress={()=> {navigation.navigate("map")}}/>
        <Title style={styles.title}>New York</Title>
        <Icon name="search-sharp" size={24} color={colors.color1} onPress={()=>{setSearchBarVisible(!searchBarVisible)}}/>
      </View>

      {searchBarVisible && 
        <Searchbar onPre placeholder='Search city...' mode='bar' inputStyle={{paddingBottom:28}}
        style={{ marginHorizontal: 20, marginTop: 10, left:9 , height:30, width:300 }} />}
     
            <View style={styles.content}>
                <IconCard/>
                <TemperatureCard/>
            </View>
            <View style={styles.footer}>
                <WeatherCard/>
                <Footer/>
            </View>

        
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: height,
        paddingTop:40,
        paddingHorizontal:30,
        backgroundColor: colors.color3,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    content:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        color: colors.color1,
        
    },
    footer:{
        flex:0.8,
        justifyContent:"flex-end",
        marginBottom:40,
        
        
    }
    
    
    
   
    
})
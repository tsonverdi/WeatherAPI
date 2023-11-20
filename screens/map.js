import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps';
import getLocation from '../utils/constants/functions/getLocation';
import getLocationRequest from '../utils/constants/functions/getLocation';





const Map = () => {
  useEffect(() => {
    getLocationRequest();
  }, []);

  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      showsUserLocation={true} 
      showsMyLocationButton={true}
      zoomControlEnabled={true}
      initialRegion={{
        latitude: 52.531677,
        longitude: 13.381777,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}}
        mapType="terrain"

      />
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
 
  map: {
    width: '100%',
    height: '100%',
  },
})
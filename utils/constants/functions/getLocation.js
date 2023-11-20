import * as Location from "expo-location"
import { Alert } from 'react-native';
const getLocationRequest = async () => { 
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      Alert.alert('Permission to access location was denied');
      return;
    }
   }
   export default getLocationRequest;
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Toast } from 'react-native-toast-message';
import Home from './screens/home';
import Navigator from './screens/navigation/navigation';

import MyContext from './store';

export default function App() {

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [onChangeText,setOnChangeText] = useState(false)

  return (
    <MyContext.Provider value={{searchBarVisible, setSearchBarVisible, onChangeText,setOnChangeText}}>
      <PaperProvider>
            <Navigator/>
      </PaperProvider>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  
});

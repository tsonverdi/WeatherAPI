import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import colors from '../../utils/constants/colors';

const Header = (props) => {
    const { back, navigation, options, route } = props;
  return (
    <Appbar.Header>
        {back && <Appbar.BackAction onPress={()=>{navigation.goBack()}} iconColor={colors.color5} />}
        <Appbar.Content title={options.title} titleStyle={{color:colors.color5}}/> 
    </Appbar.Header>
  )
}

export default Header

const styles = StyleSheet.create({})
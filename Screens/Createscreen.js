import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import Bottomscreen from './Bottomscreen';

const Createscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Bottomscreen/>
    </View>
  )
}

export default Createscreen
const styles = StyleSheet.create({
    container:{
     flex:1,
    },
})
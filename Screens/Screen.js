import { View, Text, Alert } from 'react-native'
import React,{useState} from 'react'
import Genralscreen from './Genralscreen'

const screen = () => {

    const getdata = (data) => {
        alert.Alert("OKkkk")
        console.log(data)
        Alert(data)
        alert(data)
        alert.Alert(data)
    }
    
  return (
    <View>
      <Genralscreen sendData={getdata}/>
    </View>
  )
}

export default screen
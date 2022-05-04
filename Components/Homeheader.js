import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Searchscreen from '../Screens/Seacrchscreen'

const Homeheader = () => {
  return (
    <View style={styles.header}>
     <View>
         <Text style={{fontSize:23,fontWeight:'bold'}}> My Notes  </Text>
     </View>
     <Searchscreen/>
    </View>
  )
}

export default Homeheader
const styles = StyleSheet.create({
    header:{
  
    }
})
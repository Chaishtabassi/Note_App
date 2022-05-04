import { View, Text,StyleSheet} from 'react-native'
import React,{useState,useRef} from 'react'
import { colors, Icon } from 'react-native-elements'

export default function Searchscreen() {

  return (
    <View style={{alignItems:'center'}}>    
          <View style={styles.searcharea}>
              <Icon
              name='search'
              style={styles.searchicon}
              type='material'
              iconStyle={{marginLeft:5}}
              size={32}
              />
              <Text style={{fontSize:15 ,color:'black'}}> Search anything </Text>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    searcharea:{
        marginTop:10,
        width:'90%',
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center',
    },
})
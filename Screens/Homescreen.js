import { View, Text,ScrollView,FlatList,StyleSheet,Pressable,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Homeheader from '../Components/Homeheader'
import { filterData } from "../Global/Data";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Screen from './Screen';



const Homescreen = ({navigation, props}) => {

  const[indexcheck,setindexcheck]=useState('0')
  return (
    <View style={styles.container}>
     <Homeheader/>
     <Screen/>
     <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
        >
     <View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
             data={filterData}
             extraData={indexcheck}
             renderItem={({item,index})=>(
                  <Pressable
                  onPress={()=>{
                      setindexcheck(item.id)
                  }}
                  >
                      <View style={indexcheck === item.id?{...styles.smallcardselected}:{...styles.smallcard}}>
                              <View>
                                  <Text style={indexcheck === item.id?{...styles.smallcardtextselected}:{...styles.smallcardtext}}>{item.name} </Text>
                              </View>
                      </View>
                  </Pressable>
             )}
        />
     </View>
        </ScrollView>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Createscreen')}>
        <LinearGradient
                    colors={['#4895ef', '#4361ee']}
                    style={styles.signIn}
                >
                     <Icon name="plus" size={20} color='white' />
                    <Text style={styles.textSign}> Create </Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
    </View>
  )
}

export default Homescreen
const styles = StyleSheet.create({
  container:{
      flex:1,
  },
smallcard:{
 borderRadius:10,
 backgroundColor:"#e1e8ee",
 justifyContent:'center',
 alignItems:'center',
 width:90,
 margin:20,
 height:40
},
smallcardselected:{
  borderRadius:10,
  backgroundColor:'#4361ee',
  justifyContent:'center',
  alignItems:'center',
  width:90,
  margin:20,
  height:40
},
smallcardtext:{
 fontWeight:'bold',
 color:"#5c6977"
},
smallcardtextselected:{
  fontWeight:'bold',
  color:'white'
},
button: {
  bottom:0,
  right:0,
  marginBottom:90,
  marginRight:30,
 position:'absolute',
},
textSign: {
  color: 'white',
  fontWeight: 'bold'
},
signIn: {
  width: 110,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
})
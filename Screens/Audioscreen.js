import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import Bottomscreen from './Bottomscreen';

const Genralscreen = ({navigation}) => {
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = useState('New Note ');
 
    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(
        date + '/' + month + '/' + year 
        + ' ' + hours + ':' + min + ':' + sec
      );
    }, []);
  return (
    <View style={styles.container}>
    <View style={styles.arrow}>
    <Icon name="arrowleft" size={30} color='#222' onPress={()=>navigation.navigate('Homescreen')} />
    <Icon name="check" size={30} color='blue' />
    </View>
    <View>
       <TextInput
       style={styles.text}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
       />
    </View>
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingLeft:24,paddingTop:10}}>
        <View>
          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
        </View>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default Genralscreen
const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    arrow:{
        padding:10,
     flexDirection:'row',
     justifyContent:'space-between',
    },
    text:{
        fontSize: 25,
        fontWeight:'900',
        paddingLeft:15,
        paddingTop:10
    }
})
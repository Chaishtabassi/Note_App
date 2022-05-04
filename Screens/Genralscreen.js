import { View, Text,StyleSheet,SafeAreaView,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

const Genralscreen = ({navigation, route, onSubmit,props}) => {
  const [showBox, setShowBox] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = useState('New Note');
    const [desc, setDesc] = useState('');
    const [postText, setPostText] = React.useState('');
 
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


    const showConfirmDialog = () => {
      return Alert.alert(
        "Are your sure?",
        "Are you sure you want to remove this beautiful box?",
        [
          {
            text: "Yes",
            onPress: () => {
              setShowBox(false);
            },
            onPress:()=>{handleLangChange},
            onPress: () => {
              handleSubmit()
            },
            onPress:() => {
              navigation.navigate({
                name: 'Homescreen',
                params: { post: postText },
                merge: true,
              });
            }},
          {
            text: "No",
          },
        ]
      );
    };

  const  handleLangChange = (e) => {
      // props.sendData(text,desc);
      props.sendData("Hello"); 
    }

    const  TitleChange = (e) => {
      // setText(e.target.value)
    }
    const  handleChange = (e) => {
      // setDesc(e.target.value)
    }


  return (
    <View style={styles.container}>
    <View style={styles.arrow}>
    <Icon name="arrowleft" size={30} color='#222' onPress={()=>navigation.navigate('Homescreen')} />
    <Icon name="check" size={30} color='blue'  onPress={() => showConfirmDialog()} />
    </View>
    <View>
       <TextInput
       style={styles.text}
       onChangeText={TitleChange}
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
    <View style={{flex:1}}>
      <TextInput
       style={styles.text}
       multiline
       placeholder='Note'
       onChangeText={handleChange}
       />
    </View>
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
        fontSize: 20,
        fontWeight:'600',
        paddingLeft:15,
    }
})
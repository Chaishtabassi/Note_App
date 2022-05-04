// App.js
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,SafeAreaView  } from 'react-native';
import * as ImagePicker from "react-native-image-picker"
import {launchImageLibrary} from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';


export default class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
    // this.state = {
    //   text:'New Note',
    // };



    // var date = new Date().getDate(); //Current Date
    //   var month = new Date().getMonth() + 1; //Current Month
    //   var year = new Date().getFullYear(); //Current Year
    //   var hours = new Date().getHours(); //Current Hours
    //   var min = new Date().getMinutes(); //Current Minutes
    //   var sec = new Date().getSeconds(); //Current Seconds
    // this.setState ({
    //   CurrentDate:setCurrentDate(
    //     date + '/' + month + '/' + year 
    //     + ' ' + hours + ':' + min + ':' + sec
    //   ),
    // });
    //  this.state ={ CurrentDate:''}
  }
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.arrow}>
    <Icon name="arrowleft" size={30} color='#222' onPress={()=>{ this.props.navigation.goBack() }} />
    <Icon name="check" size={30} color='blue' />
    </View>
    <View>
       <TextInput
       style={styles.text}
        // onChangeText={username=>this.state({username})}
        // defaultValue={this.state.text}
       />
    </View>
    {/* <SafeAreaView style={{flex: 1}}>
      <View style={{paddingLeft:24,paddingTop:10}}>
        <View>
          <Text style={styles.textStyle}>
            {this.state.CurrentDate}
          </Text>
        </View>
      </View>
    </SafeAreaView> */}
        <View style={styles.container}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity> 
          </View>      
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
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
},
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  }
});
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#f6f6f6' barStyle="light-content"/>
          <Image source={require('../Assets/image.png') }  resizeMode="cover" style={styles.image}/>
       <Text style={[styles.title, {
                color: colors.text
            }]}> Notely </Text>
            <Text style={styles.text}> Capture What's on your mind and get a reminder later at the right place or time you can also add voice memo and other features</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Homescreen')}>
                <LinearGradient
                    colors={['#4895ef', '#4361ee']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Let's  Start</Text>
                    <Icon name="arrowright" size={20} color='white' />
                </LinearGradient>
            </TouchableOpacity>
            </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f6f6f6'
  },
  title: {
      color: '#05375a',
      fontSize: 35,
      fontWeight:'900',
      marginTop:70,
      marginLeft:10
  },
  text: {
      color: 'grey',
      padding:15
  },
  button: {
       bottom:0,
       right:0,
       marginBottom:90,
       marginRight:30,
      position:'absolute',
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  image:{
      height:470,
      width:500,
       flex:1,
       bottom:0,
       position:'absolute',
  }
});


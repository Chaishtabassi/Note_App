import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Imagescreen from '../Screens/Imagesscreen'
import Genralscreen from '../Screens/Genralscreen'
import Audioscreen from '../Screens/Audioscreen'
import Reminderscreen from '../Screens/Reminderscreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Bottomscreen = ({navigation}) => {
  return (
    <Tab.Navigator  screenOptions={{
        headerShown: false
           }} >
    <Tab.Screen
     options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="music" size={20} color='red'/>
      ),
    }}  name="Audioscreen" component={Audioscreen}/>
    
    <Tab.Screen options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="image" size={20} color='green'/>
      ),
    }} name="Imagescreen" component={Imagescreen} />

    <Tab.Screen
     options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="bell-o" size={20} color='purple' />
        ),
      }} name="Reminderscreen" component={Reminderscreen} />

<Tab.Screen options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="check-circle-o" size={20} color='red' />
      ),
    }} name="Genralscreen" component={Genralscreen} />
  </Tab.Navigator>
  )
}

export default Bottomscreen
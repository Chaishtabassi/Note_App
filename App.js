import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import Splashscreen from './Screens/Splashscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Createscreen from './Screens/Createscreen';
import Bottomscreen from './Screens/Bottomscreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
         headerShown: false
            }} >
       <Stack.Screen name="splash" component={Splashscreen}/>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Createscreen" component={Createscreen} />
        {/* <Stack.Screen name="Bottomscreen" component={Bottomscreen} /> */}
     </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App
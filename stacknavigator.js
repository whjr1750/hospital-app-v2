import * as React from "react"
import {View,Text} from "react-native"
import Apollo from "./Screens/apollo"
import Ddb from "./Screens/DDB"
import Star from "./Screens/star"
import Home from "./Screens/home"

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
var Stack = createStackNavigator()

export default function Stacknav() {
  return (
    <NavigationContainer>       
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name = "Home" component = {Home}/>
    <Stack.Screen  name = "apollo" component = {Apollo}/>
     <Stack.Screen  name = "ddb" component = {Ddb}/>
     <Stack.Screen  name = "star" component = {Star}/>
     
    </Stack.Navigator>
    </NavigationContainer> 
    
     
      
    
  ); 
}

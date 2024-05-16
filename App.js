import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/home.js';
import Apollo from './Screens/apollo.js';
import Care from './Screens/care.js';
import DDB from './Screens/DDB.js';
import Kims from './Screens/kims.js';
import Star from './Screens/star.js';
import Sunshine from './Screens/sunshine.js';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="apollo" component={Apollo} />
          <Stack.Screen name="care" component={Care} />
          <Stack.Screen name="DDB" component={DDB} />
          <Stack.Screen name="kims" component={Kims} />
          <Stack.Screen name="star" component={Star} />
          <Stack.Screen name="sunshine" component={Sunshine} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

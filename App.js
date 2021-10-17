

import React from 'react';
import Login from "./src/pages/Login"
import BroodInfo from './src/pages/BroodInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/signup';
import InspectionItem from './src/pages/InspectionItem';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="BroodInfo" component={BroodInfo} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="InspectionItem" component={InspectionItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

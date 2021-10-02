

import React from 'react';
import Login from "./src/pages/Login"
import BroodInfo from './src/pages/inspections/BroodInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

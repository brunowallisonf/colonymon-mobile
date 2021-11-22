

import React from 'react';
import Login from "./src/pages/Login"
import BroodInfo from './src/pages/BroodInfo';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/Signup';
import InspectionItem from './src/pages/InspectionItem';
import StepIndicator from "./src/components/StepIndicator"
const Stack = createNativeStackNavigator();
import InspectionItems from './src/constants/InspectionItems';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyInspections from './src/pages/MyInspections';

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
        {InspectionItems.map((value, index, array) => (<Stack.Screen key={`inspectionItem-${index}`} name={`inspectionItem-${index}`}  >
          {props => <InspectionItem {...{ ...props, ...value, itemIndex: index, isLastItem: index === array.length - 1 }}></InspectionItem>}
        </Stack.Screen>))}
        <Stack.Screen name="MyInspections" component={MyInspections} />
      </Stack.Navigator>


    </NavigationContainer>

  );
}

export default App;

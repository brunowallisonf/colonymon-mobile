

import React from 'react';
import Login from "./src/pages/Login"
import BroodInfo from './src/pages/BroodInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/pages/signup';
import InspectionItem from './src/pages/InspectionItem';
import { SafeAreaView } from "react-native"
const Stack = createNativeStackNavigator();
import InspectionItems from './src/constants/InspectionItems';
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'


import Examples from './src/examples'
import Opacity from './src/basic/opacity'
import Translate from './src/basic/translate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: "Learning Reanimated 2"
          }}
        />
        <Stack.Screen
          name="Opacity"
          component={Opacity}
          options={{
            title: "Basics with opacity"
          }}
        />
        <Stack.Screen
          name="Translate"
          component={Translate}
          options={{
            title: "Basics with translate"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


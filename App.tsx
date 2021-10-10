import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'


import Examples from './src/examples'
import Opacity from './src/basic/opacity'
import Translate from './src/basic/translate';
import Scale from './src/basic/scale';
import Dimensions from './src/basic/dimensions';

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
        <Stack.Screen
          name="Scale"
          component={Scale}
          options={{
            title: "Basics with scale"
          }}
        />
        <Stack.Screen
          name="Dimensions"
          component={Dimensions}
          options={{
            title: "Basics with dimensions"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


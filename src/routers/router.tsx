import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const AppRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

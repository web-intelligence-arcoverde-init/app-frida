import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen, IntroScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const AppRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

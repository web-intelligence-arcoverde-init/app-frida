import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen, IntroScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const AppRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName={'IntroScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen name="IntroScreen" component={IntroScreen} />
    </Stack.Navigator>
  );
};

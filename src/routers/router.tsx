import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SplashScreen,
  IntroScreen,
  HomeScreen,
  DashboardScreen,
  SignInScreen,
  SignUpScreen,
  RecoveryAccountScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const AppRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="RecoveryAccountScreen"
        component={RecoveryAccountScreen}
      />

      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

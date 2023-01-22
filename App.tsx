import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRouters} from './src/routers/router';

export const App = () => (
  <NavigationContainer>
    <AppRouters />
  </NavigationContainer>
);

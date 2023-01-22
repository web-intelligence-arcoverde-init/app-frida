import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRouters} from './src/routers/router';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppRouters />
    </NavigationContainer>
  </SafeAreaProvider>
);

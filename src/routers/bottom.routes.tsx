import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AlertScreen,
  DashboardScreen,
  PublicAgenciesScreen,
  HelpersScreen,
} from '../screens/';

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{title: 'Inicio'}}
      />

      <Tab.Screen
        name="PublicAgenciesScreen"
        options={{title: 'órgãos'}}
        component={PublicAgenciesScreen}
      />

      <Tab.Screen
        name="HelpersScreen"
        component={HelpersScreen}
        options={{title: 'Ajuda'}}
      />

      <Tab.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{
          title: '',
          tabBarIcon: () => <Icon name="caretup" size={30} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;

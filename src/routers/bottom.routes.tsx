import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';

import FontWaesome from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconsHome from 'react-native-vector-icons/Ionicons';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconsOcticons from 'react-native-vector-icons/Octicons';

const icons = [
  {name: 'log-out', class: 'feather'},
  {name: 'phone-call', class: 'feather'},
  {name: 'radio', class: 'feather'},
  {name: 'more-vertical', class: 'feather'},
  {name: 'home-outline', class: 'Ionicons'},
  {name: 'settings', class: 'SimpleLineIcons'},
  {name: 'calendar', class: 'SimpleLineIcons'},
  {name: 'broadcast', class: 'Octicons'},
  {name: 'building-o', class: 'FontAwesome'},
];

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
        tabBarStyle: {
          height: 84,
        },
      }}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          title: 'Inicio',
          tabBarIcon: () => <IconsHome name="home-outline" size={30} />,
        }}
      />

      <Tab.Screen
        name="PublicAgenciesScreen"
        options={{
          title: 'órgãos',
          tabBarIcon: () => <FontWaesome name="building-o" size={30} />,
        }}
        component={PublicAgenciesScreen}
      />

      <Tab.Screen
        name="HelpersScreen"
        component={HelpersScreen}
        options={{
          title: 'Ajuda',
          tabBarIcon: () => <IconsFeather name="phone-call" size={30} />,
        }}
      />

      <Tab.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{
          title: 'SOS',
          tabBarIcon: () => <IconsFeather name="radio" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;

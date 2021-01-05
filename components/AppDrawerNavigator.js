import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyExchanges from '../screens/MyExchanges';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator
  },
  Setting: {
    screen: SettingScreen
  },
  MyExchanges: {
    screen: MyExchanges
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })

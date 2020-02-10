import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import CheckOtpScreen from '../screens/CheckOtpScreen'

import MainTabNavigator from './MainTabNavigator';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const OtpStack = createStackNavigator(
  {
    LoginOtp: LoginScreen,
    CheckOtp:CheckOtpScreen,
  },
  config
);
export default createAppContainer(
  createSwitchNavigator({
   // Login:OtpStack,
    Main: MainTabNavigator,
  })
);

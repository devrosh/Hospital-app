import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/auth/SignUpScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Otp'} component={OtpScreen} />
      <Stack.Screen name={'Tabs'} component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;

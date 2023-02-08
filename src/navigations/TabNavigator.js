import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ProfileScreen from '../screens/Tabs/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import MemberSharingScreen from '../screens/Tabs/MemberSharingScreen';
import HealthDetailsScreen from '../screens/Tabs/HealthDetailsScreen';
import GroupScreen from '../screens/Tabs/GroupScreen';
import {colors} from '../global/Constants';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DemographicNavigator from './DemographicNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 20,
          backgroundColor: 'white',
          elevation: 0,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 20,
                  tintColor: focused ? colors.green1 : colors.fontColor,
                }}
                source={require('../../assets/images/home.png')}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HealthDetail"
        component={DemographicNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Image
                style={{
                  height: 30,
                  marginTop: 20,
                  tintColor: focused ? colors.green1 : colors.fontColor,
                }}
                source={require('../../assets/images/leave.png')}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginTop: 20,
                  tintColor: focused ? colors.green1 : colors.fontColor,
                }}
                source={require('../../assets/images/pulse.png')}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Group"
        component={GroupScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Image
                style={{
                  height: 30,
                  marginTop: 20,
                  tintColor: focused ? colors.green1 : colors.fontColor,
                }}
                source={require('../../assets/images/group.png')}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MemberSharing"
        component={MemberSharingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Image
                style={{
                  height: 25,
                  marginTop: 20,
                  tintColor: focused ? colors.green1 : colors.fontColor,
                }}
                source={require('../../assets/images/ms.png')}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.green1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

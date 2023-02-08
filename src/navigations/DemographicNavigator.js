import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HealthDetailsScreen from '../screens/Tabs/HealthDetailsScreen';
import DemographicScreen from '../screens/DemographicScreen';

const Stack = createNativeStackNavigator();

const DemographicNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'HealthDetails'} component={HealthDetailsScreen} />
      <Stack.Screen name={'Demographic'} component={DemographicScreen} />
    </Stack.Navigator>
  );
};
export default DemographicNavigator;

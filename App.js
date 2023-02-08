import React from 'react';

import {StyleSheet} from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

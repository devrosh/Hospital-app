import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {colors} from '../global/Constants';
import Demographics from '../components/Demographics';
import Vitals from '../components/Vitals';

const DemographicScreen = ({navigation, route}) => {
  useEffect(() => {
    navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={route.params.title} />
      {route.params.title == 'Demographics' ? <Demographics /> : null}
      {route.params.title == 'Vitals' ? <Vitals /> : null}
    </SafeAreaView>
  );
};

export default DemographicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import HealthInput from '../../components/HealthInput';

import {colors} from '../../global/Constants';
import {profileData} from '../../global/Data';

const HealthDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Health Profile</Text>
        <Text style={styles.description}>
          Please fill out the required demographics first in order to unlock
          further health questions.
        </Text>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={profileData}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <HealthInput title={item.title} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HealthDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    color: colors.green1,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
  },
});

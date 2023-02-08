import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {colors} from '../../global/Constants';

const WIDTH = Dimensions.get('screen').width;

const MemberSharingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Member Sharing" />
      <View style={styles.tabContainer}>
        <Pressable style={styles.pressed}>
          <Text style={styles.text}>
            Members Who Are Sharing Their Data With You
          </Text>
        </Pressable>
        <Pressable style={styles.notPressed}>
          <Text style={styles.text}>Members Who Have Access To Your Data</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MemberSharingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  text: {
    width: WIDTH * 0.4,
    fontSize: 13,
    textAlign: 'center',
    color: colors.fontColor,

    fontFamily: 'OpenSans-SemiBold',
  },
  pressed: {
    borderBottomWidth: 3,
    borderBottomColor: colors.green1,
    paddingBottom: 10,
  },
  notPressed: {
    paddingBottom: 10,
  },
});

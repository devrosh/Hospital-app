import {Pressable, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../global/Constants';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To SunauloHealth</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <View style={styles.button}>
          <Text style={styles.joinText}>Join Us to Explore</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgColor,
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    color: colors.green1,
    marginHorizontal: 40,
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.green2,
    width: 200,
    padding: 10,
    borderRadius: 20,
  },
  joinText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'OpenSans-SemiBold',
  },
});

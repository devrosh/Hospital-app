import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {colors} from '../../global/Constants';

const WIDTH = Dimensions.get('window').width;

const OtpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text1}>Enter Code</Text>
        <Text style={styles.text2}>
          A code has been sent to your email address
        </Text>
        <View style={{width: WIDTH}}>
          <TextInput
            placeholder="Enter Verification Code"
            placeholderTextColor={colors.brown1}
            keyboardType={'number-pad'}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.brown2, fontFamily: 'OpenSans-Regular'}}>
            Didn't recieve a code?
          </Text>
          <Pressable
            onPress={() => {
              console.log('button pressed');
            }}>
            <Text
              style={{
                marginLeft: 5,
                color: colors.green1,
                fontFamily: 'OpenSans-SemiBold',
              }}>
              Resend Code
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  text1: {
    fontSize: 35,
    fontFamily: 'OpenSans-Bold',
    color: colors.fontColor,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: colors.brown2,
    marginVertical: 10,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  input: {
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontFamily: 'OpenSans-Regular',

    marginHorizontal: 20,
  },
  buttonContainer: {
    width: WIDTH,
  },
  button: {
    backgroundColor: colors.green1,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,

    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'OpenSans-SemiBold',
  },
  bottomTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
});

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useMemo} from 'react';
import {colors} from '../../global/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Button} from '@rneui/themed';

const LoginScreen = ({navigation}) => {
  const BottomSheetModalRef = useRef(null);

  const handlePresentModal = () => {
    BottomSheetModalRef.current?.present();
  };
  const snapPoints = useMemo(() => ['55%', '70%'], []);
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.tagline}>Get Insights Into Your Health</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.emailInput}>
          <Icon
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
          />
        </View>
        <View style={styles.passwordInput}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="lock"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              secureTextEntry={true}
            />
          </View>

          <Icon name="remove-red-eye" size={20} color="#666" />
        </View>
      </View>
      <TouchableOpacity onPress={handlePresentModal}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Tabs');
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'OpenSans-Regular',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomContent}>
          <Text style={styles.accounttext}>Don't have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.jointext}>Join SunauloHealth</Text>
          </Pressable>
        </View>
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={BottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{borderRadius: 50}}>
          <View style={styles.contentContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  fontFamily: 'OpenSans-Bold',
                  color: colors.fontColor,
                }}>
                Forgot Password
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginHorizontal: 66,
                  textAlign: 'center',
                  color: '#010743',
                  fontFamily: 'OpenSans-Regular',
                }}>
                We will send you the password reset link in your email.
              </Text>
            </View>
            <Text
              style={{
                marginHorizontal: 20,
                marginTop: 40,
                marginBottom: 10,
                color: '#010743',
                fontFamily: 'OpenSans-Regular',
              }}>
              Email Address
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.bgColor,
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
                height: 40,
                borderWidth: 1,
                borderColor: colors.darkGrey,
              }}>
              <Icon
                type="material"
                name="alternate-email"
                size={20}
                color={colors.brown1}
                style={{marginRight: 10}}
              />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={colors.brown1}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.link}>
              <Text
                style={{
                  color: colors.fontColor,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Didn't recieve the link?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: colors.green2,
                    fontFamily: 'OpenSans-SemiBold',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Send"
              buttonStyle={styles.sendButton}
              onPress={() => {}}
            />
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.fontColor,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: 50,
  },
  loginContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  loginText: {
    fontSize: 40,
    color: colors.fontColor,
    fontFamily: 'OpenSans-Bold',
  },
  tagline: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    color: colors.fontColor,
    paddingVertical: 10,
  },
  inputContainer: {},
  emailInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  forgotText: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'right',
    marginHorizontal: 20,
  },
  loginButton: {
    backgroundColor: colors.green2,
    padding: 7,
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 50,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  jointext: {
    fontFamily: 'OpenSans-Bold',
    color: colors.green2,
    marginLeft: 5,
  },
  accounttext: {
    fontFamily: 'OpenSans-Regular',
    color: colors.fontColor,
  },
  socialIcon: {
    marginHorizontal: 20,
    borderRadius: 25,
    fontSize: 16,
  },

  icon: {
    color: colors.grey1,
    marginRight: 10,
  },
  icon2: {
    color: colors.buttons,
    alignItems: 'flex-end',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sendButton: {
    height: 40,
    backgroundColor: colors.green2,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,

    fontFamily: 'OpenSans-Regular',
  },
});

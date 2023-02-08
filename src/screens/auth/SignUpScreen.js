import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../global/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.joinContainer}>
        <Text style={styles.joinText}>Join Us</Text>
        <Text style={styles.tagline}>Get Insights Into Your Health</Text>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: colors.bgColor}}>
        <View style={styles.input1}>
          <View style={styles.inputStyle}>
            <Icon
              name="account-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="First Name*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
          </View>
          <View style={styles.inputStyle}>
            <Icon
              name="account-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="Middle Name*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
          </View>
        </View>
        <View style={styles.input2}>
          <Icon
            name="account-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Last Name*"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'name-phone-pad'}
          />
        </View>
        <View style={styles.input2}>
          <Icon
            name="email-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email*"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.passwordInput}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="lock-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              secureTextEntry={true}
              keyboardType={'name-phone-pad'}
            />
          </View>
          <Icon
            name="eye-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
        </View>
        <View style={styles.passwordInput}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="lock-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="Repeat Password*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              secureTextEntry={true}
              keyboardType={'name-phone-pad'}
            />
          </View>
          <Icon
            name="eye-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
        </View>
        <View style={styles.addressInput}>
          <View style={styles.inputStyle}>
            <Icon
              name="map-marker-outline"
              type="material-community"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="Street Address1"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
          </View>
          <View style={styles.inputStyle}>
            <Icon
              name="map-marker-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="Street Address2"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
          </View>
        </View>
        <View style={styles.passwordInput}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="map-marker-outline"
              size={20}
              color={colors.brown1}
              style={styles.icon}
            />
            <TextInput
              placeholder="City*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
          </View>
          <Icon
            name="eye-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
        </View>
        <View style={styles.stateInput}>
          <View style={styles.stateInputStyle}>
            <TextInput
              placeholder="State*"
              placeholderTextColor={colors.fontColor}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'name-phone-pad'}
            />
            <Icon
              name="chevron-down"
              size={24}
              color={colors.fontColor}
              style={styles.icon}
            />
          </View>
          <View style={styles.stateInputStyle}>
            <TextInput
              placeholder="Zip Code*"
              placeholderTextColor={colors.brown1}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
        <View style={styles.input2}>
          <Icon
            name="phone-dial-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Phone Number*"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.dateContainer}>
          <Pressable>
            <TextInput
              onFocus={() => setOpen(true)}
              placeholder="Date of Birth*"
              editable={true}
              placeholderTextColor={colors.fontColor}
              style={{fontFamily: 'OpenSans-Regular'}}
              keyboardType={'numeric'}
            />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </Pressable>

          <Icon
            name="calendar-month-outline"
            size={24}
            color={colors.fontColor}
            style={styles.icon}
          />
        </View>
        <View style={styles.input2}>
          <Icon
            name="account-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Emergency Contact Name"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.dateContainer}>
          <TextInput
            placeholder="Emergency Contact Relationship"
            placeholderTextColor={colors.fontColor}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'number-pad'}
          />
          <Icon
            name="chevron-down"
            size={24}
            color={colors.fontColor}
            style={styles.icon}
          />
        </View>
        <View style={styles.input2}>
          <Icon
            name="phone-dial-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Emergency Contact Number"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.input2}>
          <Icon
            name="email-outline"
            size={20}
            color={colors.brown1}
            style={styles.icon}
          />
          <TextInput
            placeholder="Emergency Contact Email"
            placeholderTextColor={colors.brown1}
            style={{fontFamily: 'OpenSans-Regular'}}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={selected}
            onValueChange={newValue => setSelected(newValue)}
            boxType={'square'}
            onCheckColor={colors.white}
            onFillColor={colors.green1}
            onTintColor={colors.green1}
            animationDuration={0.3}
            onAnimationType={'bounce'}
            offAnimationType={'stroke'}
            style={{height: 20, width: 20, marginRight: 10}}
          />
          <Text style={styles.label}>
            Invite your contact to join SunauloHealth?
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={selected2}
            onValueChange={newValue => setSelected2(newValue)}
            boxType={'square'}
            onCheckColor={colors.white}
            onFillColor={colors.green1}
            onTintColor={colors.green1}
            animationDuration={0.3}
            onAnimationType={'bounce'}
            offAnimationType={'stroke'}
            style={{height: 20, width: 20, marginRight: 10}}
          />
          <Text style={styles.label2}>
            Share your medical information with your emergency contact?
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={selected3}
            onValueChange={newValue => setSelected3(newValue)}
            boxType={'square'}
            onCheckColor={colors.white}
            onFillColor={colors.green1}
            onTintColor={colors.green1}
            animationDuration={0.3}
            onAnimationType={'bounce'}
            offAnimationType={'stroke'}
            style={{height: 20, width: 20, marginRight: 10}}
          />
          <Text style={styles.label3}>
            I agree to the
            <Text style={{color: colors.green1}}> Terms of Use</Text> and
            <Text style={{color: colors.green1}}> Privacy Policy</Text>
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate('Otp');
            }}>
            <Text
              style={{
                color: colors.white,
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
              }}>
              Join
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContentContainer}>
          <View style={styles.bottomContent}>
            <Text style={styles.accounttext}>Already have an account?</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.jointext}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: 50,
  },
  joinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  joinText: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    color: colors.fontColor,
  },
  tagline: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: colors.fontColor,
    marginVertical: 10,
  },
  input1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    width: '45%',
    borderRadius: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  input2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,

    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  addressInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  stateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  stateInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '45%',
    borderRadius: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    color: colors.fontColor,
    fontFamily: 'OpenSans-SemiBold',
  },
  label2: {
    marginRight: 10,
    color: colors.brown2,
    fontFamily: 'OpenSans-Regular',
  },
  label3: {
    color: colors.brown2,
    fontFamily: 'OpenSans-Regular',
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
    marginTop: 60,
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
});

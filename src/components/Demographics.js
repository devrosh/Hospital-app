import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularProgress from 'react-native-circular-progress-indicator';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';

const radio_props = [
  {label: 'Female', value: 0},
  {label: 'Male', value: 1},
  {label: 'Non-Binary(X)', value: 2},
];

const Demographics = () => {
  const [value, setValue] = useState(0);
  const [pressed, setPressed] = useState(true);
  const [pressed2, setPressed2] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.input}>
        <Text style={styles.inputText}>Assigned Sex At Birth</Text>
        <Icon
          style={styles.icon}
          name="check-circle"
          size={35}
          color={colors.green1}
        />
      </Pressable>
      <TouchableWithoutFeedback
        onPress={() => {
          setPressed(!pressed);
        }}>
        {pressed ? (
          <View style={styles.input}>
            <Text style={styles.inputText}>Gender</Text>
            <CircularProgress
              value={0}
              radius={17}
              valueSuffix={'%'}
              progressValueColor={colors.green1}
              inActiveStrokeColor={colors.darkGrey}
              inActiveStrokeOpacity={0.5}
              inActiveStrokeWidth={4}
              activeStrokeWidth={5}
            />
          </View>
        ) : (
          <View style={styles.toogleContainer}>
            <View style={styles.genderInput}>
              <Text style={styles.inputText}>Gender</Text>
              <CircularProgress
                value={0}
                radius={17}
                valueSuffix={'%'}
                progressValueColor={colors.green1}
                inActiveStrokeColor={colors.darkGrey}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={4}
                activeStrokeWidth={5}
              />
            </View>

            <RadioForm formHorizontal={false} animation={true}>
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    onPress={value => {
                      setValue(value);
                    }}
                    isSelected={obj.value === value}
                    borderWidth={1}
                    buttonInnerColor={colors.green1}
                    buttonOuterColor={colors.green1}
                    buttonSize={10}
                    buttonOuterSize={16}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10, paddingVertical: 8}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={value => {
                      setValue(value);
                    }}
                    isSelected={obj.value !== value}
                    labelStyle={{fontSize: 14, color: colors.brown2}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              ))}
            </RadioForm>
            <Pressable
              style={styles.noteContainer}
              onPress={() => {
                setPressed2(!pressed2);
              }}>
              <Text style={styles.noteText}>+ Add Note</Text>
            </Pressable>
            {pressed2 ? (
              <TextInput
                style={styles.noteInput}
                multiline={true}
                placeholder="Write here..."
                placeholderTextColor={colors.brown2}
              />
            ) : null}
          </View>
        )}
      </TouchableWithoutFeedback>
      <Pressable style={styles.input}>
        <Text style={styles.inputText}>Race</Text>
        <CircularProgress
          value={0}
          radius={17}
          valueSuffix={'%'}
          progressValueColor={colors.green1}
          inActiveStrokeColor={colors.darkGrey}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={4}
          activeStrokeWidth={5}
        />
      </Pressable>
      <Pressable style={styles.input}>
        <Text style={styles.inputText}>Ethnicity</Text>
        <CircularProgress
          value={0}
          radius={17}
          valueSuffix={'%'}
          progressValueColor={colors.green1}
          inActiveStrokeColor={colors.darkGrey}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={4}
          activeStrokeWidth={5}
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>
          This information is used to ensure that medical questions and insights
          are relevant to your health needs.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate('HealthDetails ');
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'OpenSans-Regular',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Demographics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 13,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
  },
  toogleContainer: {
    marginHorizontal: 20,
    padding: 10,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
  },
  genderContainer: {
    marginHorizontal: 20,
    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
  },
  genderInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 13,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 0.75,
    borderColor: colors.brown1,
    alignItems: 'center',

    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.green1,
  },
  noteContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  noteText: {
    color: colors.green1,
    fontFamily: 'OpenSans-Regular',
  },
  noteInput: {
    marginVertical: 10,
    backgroundColor: colors.bgColor,
    height: 100,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontFamily: 'OpenSans-Regular',
    padding: 10,
  },
  textContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.green1,
    fontFamily: 'OpenSans-Regular',
  },
  buttonContainer: {
    marginTop: 30,
  },
  nextButton: {
    backgroundColor: colors.green2,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
  },
});

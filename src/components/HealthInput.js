import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {colors} from '../global/Constants';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useNavigation} from '@react-navigation/native';

const HealthInput = ({title}) => {
  const navigation = useNavigation();
  const [pressed, setPressed] = React.useState(true);
  return (
    <View style={styles.inputContainer}>
      <Pressable
        style={styles.input}
        onPress={() => {
          setPressed(!pressed);
          navigation.push('Demographic', {title: title});
        }}>
        <Text style={pressed ? styles.inputText : styles.inputTextPressed}>
          {title}
        </Text>
        {pressed ? (
          <Image
            style={styles.inputIcon}
            source={require('../../assets/images/padlock.png')}
          />
        ) : (
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
        )}
      </Pressable>
    </View>
  );
};

export default HealthInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginBottom: 15,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 17,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    backgroundColor: colors.white,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.brown1,
  },
  inputTextPressed: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
  },
});

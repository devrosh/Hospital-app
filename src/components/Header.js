import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../global/Constants';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.headerIcon}
        name="arrow-left"
        size={30}
        color={colors.fontColor}
        onPress={() => {
          navigation.goBack();
          navigation.getParent().setOptions({
            tabBarStyle: {
              // display: 'flex',
              position: 'absolute',
              bottom: 25,
              left: 20,
              right: 20,
              borderRadius: 20,
              backgroundColor: 'white',
              elevation: 0,
              height: 70,
              ...styles.shadow,
            },
          });
        }}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
  },
  headerIcon: {},
  headerText: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
    marginLeft: 50,
  },
  shadow: {
    shadowColor: colors.green1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

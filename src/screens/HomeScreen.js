import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../global/Constants';

const WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logo3.png')}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.tagline}>
        <Text style={styles.taglineText}>Begin Your Personal</Text>
        <Text style={styles.taglineText}>Health Journey</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('HealthDetails');
          }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer2}>
        <Image
          style={styles.image2}
          source={require('../../assets/images/couple.png')}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoImage: {
    height: 250,
    width: WIDTH / 2,
  },
  imageContainer: {
    marginHorizontal: 15,
    marginTop: -30,
  },
  tagline: {
    marginHorizontal: 20,
    marginTop: -50,
  },
  taglineText: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
    width: WIDTH / 1.5,
    marginVertical: 3,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.green1,
    padding: 10,
    width: WIDTH / 2.5,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  imageContainer2: {
    width: WIDTH,
    marginTop: 30,
    marginHorizontal: 10,
  },
  image2: {
    width: '100%',
  },
});

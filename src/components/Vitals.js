import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/Constants';
import {vitalData} from '../global/Data';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LineChart} from 'react-native-chart-kit';

const WIDTH = Dimensions.get('window').width;
const Vitals = () => {
  const [isOn, setIsOn] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setPressed(!pressed);
        }}>
        {pressed ? (
          <View style={styles.dropdownInput}>
            <View style={styles.input}>
              <View>
                <Text style={styles.text1}>Body Height/Length </Text>
                <Text style={styles.text2}>(2 Years Old)</Text>
              </View>
              <Icon name="chevron-down" size={25} color={colors.brown1} />
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.graphText}>Graph</Text>
              <TouchableOpacity
                style={[
                  styles.outer,
                  isOn ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'},
                ]}
                onPress={() => {
                  setIsOn(isOn => !isOn);
                }}>
                <View style={styles.inner} />
              </TouchableOpacity>
              <Text>List</Text>
            </View>
            <View>
              <LineChart
                data={{
                  datasets: [
                    {
                      data: [170, 120, 110, 95, 60],
                    },
                  ],
                }}
                width={WIDTH * 0.85} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: colors.bgColor,
                  backgroundGradientFrom: colors.bgColor,
                  backgroundGradientTo: colors.bgColor,
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => colors.green2,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: colors.green1,
                  },
                }}
                bezier
                style={{
                  marginVertical: 20,
                  borderRadius: 16,
                }}
                withVerticalLabels={false}
                withHorizontalLabelsLabels={false}
                withInnerLines={true}
                withOuterLines={false}
              />
            </View>
          </View>
        ) : (
          <View style={styles.dropdownInput}>
            <View style={styles.input}>
              <View>
                <Text style={styles.text1}>Body Height/Length </Text>
                <Text style={styles.text2}>(2 Years Old)</Text>
              </View>
              <Icon name="chevron-down" size={25} color={colors.brown1} />
            </View>
          </View>
        )}
      </TouchableOpacity>

      <FlatList
        data={vitalData}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
          <View style={styles.dropdownInput}>
            <View style={styles.input}>
              <View>
                <Text style={styles.text1}>{item.title} </Text>
              </View>
              <Icon name="chevron-down" size={25} color={colors.brown1} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Vitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dropdownInput: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,

    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'OpenSans-SemiBold',
    color: colors.fontColor,
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.fontColor,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
  },
  outer: {
    marginHorizontal: 5,
    height: 18,
    width: 40,
    backgroundColor: colors.green1,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inner: {
    height: 20,
    width: 20,

    borderRadius: 12,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowColor: colors.fontColor,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: colors.green1,
    elevation: 10,
  },
  graphText: {
    color: colors.green1,
    fontFamily: 'OpenSans-Regular',
  },
});

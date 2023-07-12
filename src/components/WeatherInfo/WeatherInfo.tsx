import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './WeatherInfo.style';

const WeatherInfo = (props: any) => {
  const {value, name} = props;
  return (
    <View style={styles.container}>
      <Icon name={name} size={30} color={'tomato'} />
      <Text style={styles.value}>{value}°</Text>
    </View>
  );
};

export default WeatherInfo;

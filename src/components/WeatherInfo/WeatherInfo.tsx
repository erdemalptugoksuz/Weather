import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './WeatherInfo.style';

const WeatherInfo = (props: any) => {
  const {value, name} = props;
  const {container, value: valueStyle} = styles;

  return (
    <View style={container}>
      <Icon name={name} size={30} color={'tomato'} />
      <Text style={valueStyle}>{value}°</Text>
    </View>
  );
};

export default WeatherInfo;

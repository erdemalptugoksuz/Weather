import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

import styles from './UpcomingItem.style';
import {weatherType} from '../../utilities/weatherType';

const UpcomingItem = (props: any) => {
  const {condition, dt_txt, min, max} = props;
  const {container, day, weather, hour} = styles;

  return (
    <View style={container}>
      <Text style={day}>{moment(dt_txt).format('ddd')}</Text>
      <View style={weather}>
        <Icon name={weatherType[condition].icon} size={25} color="black" />
        <Text style={hour}>{moment(dt_txt).format('hh:mm')}</Text>
      </View>
      <Text>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

export default UpcomingItem;

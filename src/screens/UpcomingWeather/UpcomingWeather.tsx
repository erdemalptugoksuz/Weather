import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import styles from './UpcomingWeather.style';
import {UpcomingItem} from '../../components';

const UpcomingWeather = ({weatherData}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Upcoming Weather</Text>
      <FlatList
        data={weatherData}
        renderItem={({item}) => (
          <UpcomingItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
          />
        )}
        keyExtractor={item => item.dt_txt}
      />
    </SafeAreaView>
  );
};

export default UpcomingWeather;

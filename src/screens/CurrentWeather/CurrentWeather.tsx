import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './CurrentWeather.style';
import {weatherType} from '../../utilities/weatherType';
import {WeatherInfo} from '../../components';

const CurrentWeather = ({weatherData}: any) => {
  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData.list[0];
  const {country, name} = weatherData.city;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.countryName}>{country}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name={weatherType[weatherCondition].icon}
          color={'tomato'}
          size={100}
        />
      </View>
      <View style={styles.weatherContainer}>
        <Text style={styles.temp}>{temp}°</Text>
        <View style={styles.weatherInfo}>
          <WeatherInfo value={feels_like} name={'thermometer'} />
          <WeatherInfo value={temp_max} name={'upload-cloud'} />
          <WeatherInfo value={temp_min} name={'download-cloud'} />
        </View>
      </View>
      <View style={styles.weatherMessage}>
        <Text style={styles.description}>{weather[0]?.description}</Text>
        <Text style={styles.message}>
          {weatherType[weatherCondition]?.message}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;

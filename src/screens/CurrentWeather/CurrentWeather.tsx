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

  const {
    container,
    locationContainer,
    cityName,
    countryName,
    iconContainer,
    weatherContainer,
    temp: tempStyle,
    weatherInfo,
    weatherMessage,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={locationContainer}>
        <Text style={cityName}>{name}</Text>
        <Text style={countryName}>{country}</Text>
      </View>
      <View style={iconContainer}>
        <Icon
          name={weatherType[weatherCondition].icon}
          color={'tomato'}
          size={100}
        />
      </View>
      <View style={weatherContainer}>
        <Text style={tempStyle}>{temp}°</Text>
        <View style={weatherInfo}>
          <WeatherInfo value={feels_like} name={'thermometer'} />
          <WeatherInfo value={temp_max} name={'upload-cloud'} />
          <WeatherInfo value={temp_min} name={'download-cloud'} />
        </View>
      </View>
      <View style={weatherMessage}>
        <Text style={description}>{weather[0]?.description}</Text>
        <Text style={message}>{weatherType[weatherCondition]?.message}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;

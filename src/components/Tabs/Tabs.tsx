import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {CurrentWeather, UpcomingWeather} from '../../screens';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="CurrentWeatherScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'gray'}
            />
          ),
          title: 'Current Weather',
        }}>
        {() => <CurrentWeather weatherData={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name="UpcomingWeatherScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'gray'}
            />
          ),
          title: 'Upcoming Weather',
        }}>
        {() => <UpcomingWeather weatherData={weather} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {CurrentWeather, UpcomingWeather} from '../../screens';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}: any) => {
  const renderTabIcon = (
    name: string,
    size: number,
    color: string,
    focused: boolean,
  ) => {
    return <Icon name={name} size={size} color={focused ? 'tomato' : 'gray'} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="CurrentWeatherScreen"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({size, color, focused}) =>
            renderTabIcon('droplet', size, color, focused),
        }}>
        {() => <CurrentWeather weatherData={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name="UpcomingWeatherScreen"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({size, color, focused}) =>
            renderTabIcon('clock', size, color, focused),
        }}>
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useFetch} from './hooks/useFetch';

import {Tabs} from './components';

const Router = () => {
  const [loading, error, weather] = useFetch();

  console.log(error);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Router;

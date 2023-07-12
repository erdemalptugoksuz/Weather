import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
  },
  cityName: {
    fontSize: 22,
  },
  countryName: {
    fontSize: 18,
    color: 'gray',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weatherInfo: {
    flexDirection: 'row',
  },
  weatherMessage: {
    marginHorizontal: 30,
    marginBottom: 30,
  },
  description: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
  },
});

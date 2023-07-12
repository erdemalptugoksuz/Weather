import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'gray',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hour: {
    marginLeft: 10,
    color: 'gray',
  },
});

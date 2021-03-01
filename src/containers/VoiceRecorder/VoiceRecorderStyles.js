import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },

  buttonWrap: {
    marginBottom: Metrics.baseMargin,
    padding: Metrics.doubleBaseMargin,
  },
});

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
    borderRadius: 10,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    width: '60%',
    backgroundColor: '#FFFAFA',
  },

  btnText: {
    color: 'black',
    textAlign: 'center',
  },
});

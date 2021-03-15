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
    paddingHorizontal: Metrics.screenWidth / 5,
    backgroundColor: '#FFFAFA',
    width: Metrics.screenWidth / 1.2,
  },

  btnText: {
    color: 'black',
    textAlign: 'center',
  },
});

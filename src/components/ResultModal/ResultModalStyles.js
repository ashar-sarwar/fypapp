import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {},
  modalStyle: {
    borderRadius: 10,
    paddingLeft: Metrics.mediumBaseMargin,
    paddingRight: Metrics.mediumBaseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  submitBtnWrap: {
    marginTop: 50,
  },
  submitBtn: {
    height: 55,
    paddingHorizontal: Metrics.screenWidth / 3.4,
    backgroundColor: Colors.black,
    borderRadius: 12,
  },

  submitBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

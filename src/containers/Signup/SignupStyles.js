import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  showPwsdWrap: {
    position: 'absolute',
    right: 10,
    top: 55,
    // top: 26 ,
  },
  signupSec: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5,
  },

  buttonWrap: {
    marginBottom: Metrics.baseMargin,
    borderRadius: 10,
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.screenWidth / 5,
    backgroundColor: '#292222',
    width: Metrics.screenWidth / 1.2,
    borderWidth: 2,
    borderColor: 'white',
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
  },

  loginBtnWrap: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

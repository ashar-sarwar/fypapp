// @flow

import {Platform} from 'react-native';

const type = {
  /* base: "ParalucentText-Book",
  medium: "Paralucent-Medium" */
  light: Platform.select({
    ios: 'Montserrat-Light',
    android: 'Montserrat-Light',
  }),
  base: Platform.select({
    ios: 'Montserrat-Regular',
    android: 'Montserrat-Regular',
  }),
  medium: Platform.select({
    ios: 'Montserrat-Medium',
    android: 'Montserrat-Medium',
  }),
  semiBold: Platform.select({
    ios: 'Montserrat-SemiBold',
    android: 'Montserrat-SemiBold',
  }),
  bold: Platform.select({
    ios: 'Montserrat-Bold',
    android: 'Montserrat-Bold',
  }),
  extraBold: Platform.select({
    ios: 'Montserrat-ExtraBold',
    android: 'Montserrat-ExtraBold',
  }),
  italic: Platform.select({
    ios: 'Montserrat-Italic',
    android: 'Montserrat-Italic',
  }),
};

// Metrics.generatedFontSize(ios, android)

const size = {
  xxxxSmall: 10,
  xxxSmall: 11,
  xxSmall: 13,
  xSmall: 14,
  small: 15,
  normal: 17,
  medium: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
  xxxLarge: 36,
  xxxxLarge: 40,
};

export default {
  type,
  size,
};

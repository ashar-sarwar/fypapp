// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Stack, Scene, Router, Actions} from 'react-native-router-flux';

import styles from './styles';
import {Colors} from '../theme';

import {Login, Welcome, VoiceRecorder} from '../containers';

function onBackPress() {
  if (Actions.state.index === 0) {
    return false;
  }
  Actions.pop();
  return true;
}

const navigator = Actions.create(
  <Stack
    key="root"
    titleStyle={styles.title}
    headerStyle={styles.header}
    headerTintColor={Colors.navbar.text}>
    <Scene key="voiceRecorder" component={VoiceRecorder} hideNavBar initial />
    <Scene key="login" component={Login} hideNavBar />

    <Scene key="welcome" component={Welcome} hideNavBar />
  </Stack>,
);

export default () => (
  <AppNavigator navigator={navigator} backAndroidHandler={onBackPress} />
);

const AppNavigator = connect()(Router);

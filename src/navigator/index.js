// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Stack, Scene, Router, Actions, Drawer} from 'react-native-router-flux';

import styles from './styles';
import {Colors} from '../theme';

import {Login, Welcome, VoiceRecorder, Signup} from '../containers';
import {SideBar} from '../components';

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
    <Drawer
      drawer
      key="drawerMenu"
      contentComponent={SideBar}
      drawerWidth={267}
      side={'left'}
      hideNavBar>
      <Scene key="home" component={VoiceRecorder} hideNavBar />
    </Drawer>
    <Scene key="signup" component={Signup} hideNavBar initial />

    <Scene key="login" component={Login} hideNavBar />

    <Scene key="welcome" component={Welcome} />
  </Stack>,
);

export default () => (
  <AppNavigator navigator={navigator} backAndroidHandler={onBackPress} />
);

const AppNavigator = connect()(Router);

// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {View, Image as RnImage, StatusBar, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import {Images, Colors, AppStyles, Metrics} from '../../theme';
import styles from './styles';
import Text from './../../components/Text/index';

class Welcome extends Component {
  static propTypes = {
    // userData: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {userData} = this.props;

    setTimeout(() => {
      Actions.reset('drawerMenu');
    }, 2500);
  }

  render() {
    return (
      <>
        <StatusBar hidden={true} />

        <ImageBackground
          source={Images.SplashScreenBackground}
          style={[styles.container]}>
          <View></View>
        </ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 180,

            bottom: 100,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              marginBottom: Metrics.screenHeight / 6.2,
              marginTop: -Metrics.screenHeight / 5.7,
              marginLeft: Metrics.screenWidth / 9,
            }}>
            <Text color={Colors.white} size={50} type="bold">
              Checkovid
            </Text>
          </View>
          <RnImage
            source={Images.SplashImage}
            style={{
              height: '120%',
              width: '120%',
              right: 70,
              overflow: 'hidden',
              zIndex: 999,
            }}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = ({user}) => ({
  userData: user.data,
});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(Welcome);

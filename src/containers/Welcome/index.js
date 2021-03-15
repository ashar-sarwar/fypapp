// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import {Images, Colors} from '../../theme';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

class Welcome extends Component {
  static propTypes = {
    // userData: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {userData} = this.props;

    setTimeout(() => {
      Actions.reset('drawerMenu');
    }, 8);
  }

  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <LinearGradient
          colors={['#002286', '#f8446f']}
          start={{x: 1.1, y: -1.2}}
          end={{x: -3.3, y: -0.9}}
          style={styles.container}></LinearGradient>
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

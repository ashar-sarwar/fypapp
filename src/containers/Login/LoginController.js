import React from 'react';
import _ from 'lodash';
import {Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import LoginView from './LoginView';
import {connect} from 'react-redux';
import util from '../../util';
import { Actions } from 'react-native-router-flux';

class LoginController extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      userIdError: '',
      passwordError: '',
      hidePassword: true,
      loading: false,
    };
  }
  static propTypes = {};
  static defaultProps = {};

  //  focus on fields
  userIdFocus = () => {
    this.userIdRef.focus();
  };

  passwordFocus = () => {
    this.passRef.focus();
  };

  // validation all login fields
  validation = () => {
    const {userId, password, userIdError, passwordError} = this.state;
    let valid = true;

    if (_.isEmpty(password)) {
      this.setState({
        passwordError: util.isRequiredErrorMessage('Password'),
      });
      this.passwordFocus();
      valid = false;
    } else if (!util.isPasswordValid(password)) {
      this.setState({passwordError: 'ads'});
      this.passwordFocus();
      valid = false;
    }
    if (_.isEmpty(userId)) {
      this.setState({
        userIdError: util.isRequiredErrorMessage('User Id'),
      });
      this.userIdFocus();
      valid = false;
    }

    return valid;
  };

  handleShowPassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  };

  // get value from field and save into states
  setValue = key => {
    this.setState(key);
  };

  handleSubmit = () => {
    // clear all error msg
    this.setState({
      userIdError: '',
      passwordError: '',
    });

    // if validation pass
    if (this.validation()) {
      Keyboard.dismiss();

      return Actions.reset('drawerMenu');
    }
  };

  render() {
    const {
      userId,
      password,
      userIdError,
      passwordError,
      hidePassword,
    } = this.state;

    return (
      <LoginView
        {...this.props}
        userId={userId}
        password={password}
        userIdError={userIdError}
        passwordError={passwordError}
        hidePassword={hidePassword}
        setValue={this.setValue}
        handleShowPassword={this.handleShowPassword}
        handleSubmit={this.handleSubmit}
        passwordFocus={this.passwordFocus}
        userIdRef={ref => {
          this.userIdRef = ref;
        }}
        passRef={ref => {
          this.passRef = ref;
        }}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(LoginController);

import React from 'react';
import {Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import SignupView from './SignupView';
import {connect} from 'react-redux';
import util from '../../util';

class SignupController extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      userIdError: '',
      passwordError: '',
      retypePwd: '',
      retypePwdError: '',
      hideRetypePwd: true,
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

  retypePwdFocus = () => {
    this.retypePwdRef.focus();
  };

  // validation all Signup fields
  validation = () => {
    const {userId, password, retypePwd} = this.state;
    let valid = true;
    if (_.isEmpty(retypePwd)) {
      this.setState({
        retypePwdError: util.isRequiredErrorMessage('Re-Type Password'),
      });
      this.retypePwdFocus();
      valid = false;
    } else if (retypePwd !== password) {
      this.setState({retypePwdError: 'Passwords do not match'});
      this.retypePwdFocus();
      valid = false;
    }
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
      retypePwd,
      retypePwdError,
      hideRetypePwd,
    } = this.state;

    return (
      <SignupView
        {...this.props}
        userId={userId}
        password={password}
        userIdError={userIdError}
        passwordError={passwordError}
        hidePassword={hidePassword}
        retypePwd={retypePwd}
        retypePwdError={retypePwdError}
        hideRetypePwd={hideRetypePwd}
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
        retypePwdRef={ref => {
          this.retypePwdRef = ref;
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
)(SignupController);

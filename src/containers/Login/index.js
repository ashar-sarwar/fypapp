// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import {View, Image, ScrollView, Platform} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR} from '../../constants';
import {userSigninRequest} from '../../actions/UserActions';
import {Text, ButtonView, TextInput, Loader} from '../../components';
import {Images, AppStyles, Colors} from '../../theme';
import styles from './styles';
import Util from '../../util';

class Login extends Component {
  static propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
  };
  state = {
    errors: {},
    loading: false,
  };

  email;
  password;

  // emailValue = "chris@yopmail.com";
  // passwordValue = "123456";
  // emailValue = "johd@doe.com";
  // passwordValue = "123456";
  // emailValue = "zain23@yopmail.com";
  // passwordValue = "123456";

  emailValue = '';
  passwordValue = '';
  _onSubmitEmail = () => {
    this.password.focus();
  };

  _onSubmitPassword = () => {
    this.password.blur();
  };

  _onChange = (element, value) => {
    const valueRef = `${element}Value`;
    this[valueRef] = value;

    if (!_.isEmpty(this.state.errors)) {
      this.setState({
        errors: {...this.state.errors, ...{[element]: ''}},
      });
    }
  };

  _validateForm() {
    const errors = {};
    if (_.isEmpty(this.emailValue)) {
      // email is required

      errors.email = Util.isRequiredMessage('email');
    }
    if (!Util.isEmailValid(this.emailValue)) {
      // invalid email
      errors.email = INVALID_EMAIL_ERROR;
    }
    if (_.isEmpty(this.passwordValue)) {
      // password is required
      errors.password = Util.isRequiredMessage('password');
    }
    if (!Util.isPasswordValid(this.passwordValue)) {
      // invalid password
      errors.password = INVALID_PASSWORD_ERROR;
    }

    if (!_.isEmpty(errors)) {
      this[_.keys(errors)[0]].focus();
      this.setState({
        errors,
      });

      return false;
    }

    return true;
  }

  _onSubmit = () => {
    if (this._validateForm()) {
      this.password.blur();
      this.email.blur();

      const payload = {
        email: this.emailValue,
        password: this.passwordValue,
        device_type: Platform.OS,
        // device_token: asd
      };
      Util.showLoader(this);
      this.props.userSigninRequest(payload, data => {});
    }
  };

  renderLogo() {
    return (
      <View
        style={[AppStyles.centerInner, AppStyles.mTop30, AppStyles.mBottom30]}>
        <Image source={Images.logo} style={AppStyles.logoImage} />
      </View>
    );
  }

  render() {
    const {errors, loading} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {this.renderLogo()}
        </ScrollView>
        <Loader loading={loading} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {userSigninRequest};

export default connect(
  mapStateToProps,
  actions,
)(Login);

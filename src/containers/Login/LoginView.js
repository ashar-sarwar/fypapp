import React from 'react';
import {View, Image as RnImage, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images, Colors, Fonts, AppStyles} from '../../theme';
import {Text} from '../../components';
import styles from './LoginStyles';
import TextInput from './../../components/TextInput/index';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
export default function LoginView(props) {
  const {
    setValue,
    userId,
    password,
    userIdError,
    passwordError,
    handleSubmit,
    passwordFocus,
    hidePassword,
    handleShowPassword,
  } = props;

  return (
    <LinearGradient
      colors={['#FF0000', '#000000']}
      start={{x: 2.1, y: -2.01}}
      end={{x: -1.3, y: -1.9}}
      style={[
        styles.container,
        {
          justifyContent: 'flex-end',
        },
      ]}>
      <View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 140,
              marginTop: 30,
              marginRight: 7,
            }}>
            <Text color={Colors.white} size={Fonts.size.xxxxLarge} type="bold">
              CHECKOVID
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
            <View style={{paddingHorizontal: 38}}>
              <View style={AppStyles.mBottom20}>
                <TextInput
                  autoFocus
                  placeholder={'Khalid Ali'}
                  placeholderTextColor={Colors.white}
                  inputStyle={AppStyles.inputStyle}
                  // labelImg={Images.IdCardIcon}
                  autoCapitalize="none"
                  labelStyle={[AppStyles.labelStyle]}
                  label={'User ID'}
                  value={userId}
                  error={userIdError}
                  onChangeText={val => {
                    setValue({userId: val});
                  }}
                  ref={ref => {
                    props.userIdRef(ref);
                  }}
                  onSubmitEditing={passwordFocus}
                />
              </View>
              <View>
                <TextInput
                  placeholder={'********'}
                  placeholderTextColor={Colors.white}
                  inputStyle={AppStyles.inputStyle}
                  labelImg={Images.LockIcon}
                  labelStyle={[AppStyles.labelStyle]}
                  label={'Password'}
                  labelImgStyle={[AppStyles.labelImgStyle]}
                  secureTextEntry={hidePassword}
                  value={password}
                  error={passwordError}
                  onChangeText={val => {
                    setValue({password: val});
                  }}
                  ref={ref => {
                    props.passRef(ref);
                  }}
                  onSubmitEditing={handleSubmit}
                />
                <TouchableOpacity
                  style={[styles.showPwsdWrap]}
                  onPress={handleShowPassword}>
                  <RnImage
                    source={
                      hidePassword
                        ? Images.ViewPasswordIcon
                        : Images.HidePasswordIcon
                    }
                    style={styles.ViewPasswordIcon}
                    tintColor={Colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.loginBtnWrap}>
              <TouchableOpacity
                style={[styles.buttonWrap]}
                onPress={handleSubmit}>
                <Text
                  style={styles.btnText}
                  type="semiBold"
                  size={Fonts.size.medium}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.signupSec]}>
              <Text
                style={AppStyles.mRight5}
                size={Fonts.size.font13}
                color={Colors.white}>
                Don't Have an Account ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Actions.replace('signup');
                }}
                style={AppStyles.mRight5}>
                <Text
                  size={Fonts.size.medium}
                  color={Colors.white}
                  type="semiBold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </LinearGradient>
  );
}

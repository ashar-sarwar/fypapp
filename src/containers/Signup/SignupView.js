import React from 'react';
import {View, Image as RnImage, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images, Colors, Fonts, AppStyles} from '../../theme';
import {Text} from '../../components';
import styles from './SignupStyles';
import TextInput from '../../components/TextInput/index';
import {Actions} from 'react-native-router-flux';
export default function SignupView(props) {
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
    retypePwd,
    retypePwdError,
    hideRetypePwd,
  } = props;

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[
        styles.container,
        {
          justifyContent: 'center',
        },
      ]}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
        <View style={{paddingHorizontal: 38}}>
          <View style={AppStyles.mBottom20}>
            <TextInput
              autoFocus
              placeholder={'Khalid Ali'}
              placeholderTextColor={Colors.grey1}
              inputStyle={AppStyles.inputStyle}
              // labelImg={Images.IdCardIcon}
              autoCapitalize="none"
              labelStyle={[AppStyles.labelStyle]}
              label={'User ID'}
              labelImgStyle={[AppStyles.labelImgStyle]}
              value={userId}
              error={userIdError}
              onChangeText={val => {
                setValue({userId: val});
              }}
              ref={ref => {
                props.userIdRef(ref);
              }}
              // onSubmitEditing={passwordFocus}
            />
          </View>
          <View>
            <TextInput
              placeholder={'********'}
              placeholderTextColor={Colors.grey1}
              inputStyle={AppStyles.inputStyle}
              labelImg={Images.LockIcon}
              labelStyle={[AppStyles.labelStyle]}
              label={'Re-Type Password'}
              labelImgStyle={[AppStyles.labelImgStyle]}
              secureTextEntry={hideRetypePwd}
              value={retypePwd}
              error={retypePwdError}
              onChangeText={val => {
                setValue({retypePwd: val});
              }}
              ref={ref => {
                props.retypePwdRef(ref);
              }}
              // onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity
              style={[styles.showPwsdWrap]}
              onPress={() => {
                setValue({hideRetypePwd: !hideRetypePwd});
              }}>
              <RnImage
                source={
                  hideRetypePwd
                    ? Images.ViewPasswordIcon
                    : Images.HidePasswordIcon
                }
                style={styles.ViewPasswordIcon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder={'********'}
              placeholderTextColor={Colors.grey1}
              inputStyle={AppStyles.inputStyle}
              label={'Password'}
              labelImg={Images.LockIcon}
              labelStyle={[AppStyles.labelStyle]}
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
              // onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity
              style={[styles.showPwsdWrap]}
              onPress={() => {
                setValue({hidePassword: !hidePassword});
              }}>
              <RnImage
                source={
                  hidePassword
                    ? Images.ViewPasswordIcon
                    : Images.HidePasswordIcon
                }
                style={styles.ViewPasswordIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.signupSec]}>
          <Text style={AppStyles.mRight5} size={Fonts.size.font13}>
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              Actions.login();
            }}
            style={AppStyles.mRight5}>
            <Text size={Fonts.size.font13} color={Colors.blueRibbon}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

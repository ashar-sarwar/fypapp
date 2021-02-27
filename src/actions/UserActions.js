// @flow

import {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_SIGNOUT,
  UPDATE_USER_PROFILE,
  USER_FORGOT_PASSWORD,
  USER_CONFIRM_OTP_FGPASS,
  USER_UPDATE_PASSWORD,
  CONTACT_ADMIN,
  GET_PROFILE_SECTIONS,
  POST_PROFILE_DATA,
  DELETE_PROFILE_SUBSECTION_DATA
} from "./ActionTypes";

export function userSignupRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_SIGNUP.REQUEST
  };
}

export function userSignupSuccess(data) {
  return {
    data,
    type: USER_SIGNUP.SUCCESS
  };
}

export function userSigninRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_SIGNIN.REQUEST
  };
}

export function userSigninSuccess(data, access_token, save_token) {
  return {
    data,
    access_token,
    save_token,
    type: USER_SIGNIN.SUCCESS
  };
}

export function userSignOutRequest(responseCallback) {
  return {
    responseCallback,
    type: USER_SIGNOUT.REQUEST
  };
}

export function userSignOutSuccess() {
  return {
    type: USER_SIGNOUT.SUCCESS
  };
}

export function updateUserProfileRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: UPDATE_USER_PROFILE.REQUEST
  };
}

export function updateUserProfileSuccess(data) {
  return {
    data,
    type: UPDATE_USER_PROFILE.SUCCESS
  };
}

export function forgotPasswordRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_FORGOT_PASSWORD.REQUEST
  };
}

export function confirmOTPRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_CONFIRM_OTP_FGPASS.REQUEST
  };
}

export function updatePasswordRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: USER_UPDATE_PASSWORD.REQUEST
  };
}

export function contactAdminRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: CONTACT_ADMIN.REQUEST
  };
}

export function getProfileSectionsRequest(responseCallback) {
  return {
    responseCallback,
    type: GET_PROFILE_SECTIONS.REQUEST
  };
}

export function getProfileSectionsSuccess(data) {
  return {
    data,
    type: GET_PROFILE_SECTIONS.SUCCESS
  };
}

export function postProfileDataRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: POST_PROFILE_DATA.REQUEST
  };
}

export function deleteProfileSubSectionDataRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: DELETE_PROFILE_SUBSECTION_DATA.REQUEST
  };
}

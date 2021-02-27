import { take, put, call, fork } from "redux-saga/effects";
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
} from "../actions/ActionTypes";
import { SAGA_ALERT_TIMEOUT } from "../constants";
import {
  userSignupSuccess,
  userSigninSuccess,
  userSignOutSuccess,
  updateUserProfileSuccess,
  getProfileSectionsSuccess
} from "../actions/UserActions";
import {
  USER_SIGNUP as USER_SIGNUP_URL,
  USER_SIGNIN as USER_SIGNIN_URL,
  USER_SIGNOUT as USER_SIGNOUT_URL,
  UPDATE_USER_PROFILE as UPDATE_USER_PROFILE_URL,
  USER_FORGOT_PASSWORD as USER_FORGOT_PASSWORD_URL,
  USER_CONFIRM_OTP_FGPASS as USER_CONFIRM_OTP_FGPASS_URL,
  USER_UPDATE_PASSWORD as USER_UPDATE_PASSWORD_URL,
  CONTACT_ADMIN as CONTACT_ADMIN_URL,
  GET_PROFILE_SECTIONS as GET_PROFILE_SECTIONS_URL,
  POST_PROFILE_DATA as POST_PROFILE_DATA_URL,
  DELETE_PROFILE_SUBSECTION_DATA as DELETE_PROFILE_SUBSECTION_DATA_URL,
  callRequest
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../util";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* signup() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_SIGNUP.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNUP_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.success) {
        yield put(userSignupSuccess(response.data.user));
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* signin() {
  while (true) {
    const { payload, responseCallback } = yield take(USER_SIGNIN.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNIN_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      console.log("response", response);
      if (response.success) {
        if (responseCallback) responseCallback(response.data.user, null);
        yield put(userSigninSuccess(response.data.user));
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* signout() {
  while (true) {
    const { responseCallback } = yield take(USER_SIGNOUT.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNOUT_URL,
        {},
        "",
        {},
        ApiSauce
      );

      if (response.data) {
        if (responseCallback) responseCallback(true, null);

        yield put(userSignOutSuccess());
      } else {
        alert("Something went wrong");
        yield put(userSignOutSuccess());
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
      yield put(userSignOutSuccess());
    }
  }
}

function* updateUserProfile() {
  while (true) {
    const { payload, responseCallback } = yield take(
      UPDATE_USER_PROFILE.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        UPDATE_USER_PROFILE_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.data) {
        yield put(
          updateUserProfileSuccess({
            first_name: payload.first_name,
            phone: payload.phone
          })
        );
        if (responseCallback) responseCallback(response.data, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* forgotPassword() {
  while (true) {
    const { payload, responseCallback } = yield take(
      USER_FORGOT_PASSWORD.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        USER_FORGOT_PASSWORD_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.data) {
        if (responseCallback) responseCallback(response.data, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* confirmOTP_FGPASS() {
  while (true) {
    const { payload, responseCallback } = yield take(
      USER_CONFIRM_OTP_FGPASS.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        USER_CONFIRM_OTP_FGPASS_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.data) {
        if (responseCallback) responseCallback(response.data, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* updatePassword() {
  while (true) {
    const { payload, responseCallback } = yield take(
      USER_UPDATE_PASSWORD.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        USER_UPDATE_PASSWORD_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.data) {
        if (responseCallback) responseCallback(response.data, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* contactAdmin() {
  while (true) {
    const { payload, responseCallback } = yield take(CONTACT_ADMIN.REQUEST);
    try {
      const response = yield call(
        callRequest,
        CONTACT_ADMIN_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.success) {
        if (responseCallback) responseCallback(response.message, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* getProfileSections() {
  while (true) {
    const { responseCallback } = yield take(GET_PROFILE_SECTIONS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_PROFILE_SECTIONS_URL,
        {},
        "",
        {},
        ApiSauce
      );
      if (response.success) {
        if (responseCallback) responseCallback(true, null);
        yield put(getProfileSectionsSuccess(response.data));
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* postProfileData() {
  while (true) {
    const { payload, responseCallback } = yield take(POST_PROFILE_DATA.REQUEST);
    try {
      const response = yield call(
        callRequest,
        POST_PROFILE_DATA_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.success) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* deleteProfileSubSectionDataRequest() {
  while (true) {
    const { payload, responseCallback } = yield take(
      DELETE_PROFILE_SUBSECTION_DATA.REQUEST
    );
    try {
      const response = yield call(
        callRequest,
        DELETE_PROFILE_SUBSECTION_DATA_URL,
        payload,
        "",
        {},
        ApiSauce
      );
      if (response.success) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null, null);
        alert("Something went wrong");
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

export default function* root() {
  yield fork(signup);
  yield fork(signout);
  yield fork(signin);
  yield fork(updateUserProfile);
  yield fork(forgotPassword);
  yield fork(confirmOTP_FGPASS);
  yield fork(updatePassword);
  yield fork(contactAdmin);
  yield fork(getProfileSections);
  yield fork(postProfileData);
  yield fork(deleteProfileSubSectionDataRequest);
}

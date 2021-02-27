// @flow
import Immutable from "seamless-immutable";
import _ from "lodash";
import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  UPDATE_USER_PROFILE,
  GET_PROFILE_SECTIONS
} from "../actions/ActionTypes";

const initialState = Immutable({
  data: {},
  profileSections: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data
      });
    }
    case USER_SIGNUP.SUCCESS: {
      return Immutable.merge(state, {
        data: action.data
      });
    }
    case UPDATE_USER_PROFILE.SUCCESS: {
      return Immutable.merge(state, {
        data: { ...state.data, ...action.data }
      });
    }
    case USER_SIGNOUT.SUCCESS: {
      return Immutable.merge(state, initialState);
    }

    case GET_PROFILE_SECTIONS.SUCCESS: {
      return Immutable.merge(state, {
        profileSections: action.data
      });
    }
    default:
      return state;
  }
};

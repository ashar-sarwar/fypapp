// @flow
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const CANCEL = "CANCEL";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = "NETWORK_INFO";
export const USER_SIGNUP = createRequestTypes("USER_SIGNUP");
export const USER_SIGNIN = createRequestTypes("USER_SIGNIN");
export const USER_SIGNOUT = createRequestTypes("USER_SIGNOUT");
export const UPDATE_USER_PROFILE = createRequestTypes("UPDATE_USER_PROFILE");
export const USER_FORGOT_PASSWORD = createRequestTypes("USER_FORGOT_PASSWORD");
export const USER_CONFIRM_OTP_FGPASS = createRequestTypes(
  "USER_CONFIRM_OTP_FGPASS"
);
export const USER_UPDATE_PASSWORD = createRequestTypes("USER_UPDATE_PASSWORD");
export const CONTACT_ADMIN = createRequestTypes("CONTACT_ADMIN");
export const GET_SERVICE_TYPES = createRequestTypes("GET_SERVICE_TYPES");
export const GET_NEARBY_SERVICE_PROVIDERS = createRequestTypes(
  "GET_NEARBY_SERVICE_PROVIDERS"
);
export const CLEAR_SERVICE_PROVIDERS_DATA = "CLEAR_SERVICE_PROVIDERS_DATA";
export const GET_NEWS = createRequestTypes("GET_NEWS");
export const GET_EVENTS = createRequestTypes("GET_EVENTS");
export const GET_MONTLY_EVENTS = createRequestTypes("GET_MONTLY_EVENTS");
export const GET_SEARCH_EVENTS = createRequestTypes("GET_SEARCH_EVENTS");
export const GET_ORGANIZATIONS = createRequestTypes("GET_ORGANIZATIONS");
export const GET_REVIEWS = createRequestTypes("GET_REVIEWS");
export const GET_PROFILE_SECTIONS = createRequestTypes("GET_PROFILE_SECTIONS");
export const POST_PROFILE_DATA = createRequestTypes("POST_PROFILE_DATA");
export const DELETE_PROFILE_SUBSECTION_DATA = createRequestTypes(
  "DELETE_PROFILE_SUBSECTION_DATA"
);

export const GET_BRAIN_TREE_TOKEN = createRequestTypes("GET_BRAIN_TREE_TOKEN");
export const BRAIN_TREE_PAYMENT = createRequestTypes("BRAIN_TREE_PAYMENT");
export const LOGOUT = "LOGOUT";

export const EMPTY = createRequestTypes("EMPTY");

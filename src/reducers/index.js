import { combineReducers } from "redux";

import navigator from "./navigator";
import user from "./user";

export default combineReducers({
  route: navigator,
  user
});

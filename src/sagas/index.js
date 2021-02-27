import { fork } from "redux-saga/effects";
import user from "./user";
import init from "./init";

export default function* root() {
  yield fork(user);
  yield fork(init);
}

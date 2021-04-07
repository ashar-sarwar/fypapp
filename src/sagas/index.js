import {fork} from 'redux-saga/effects';
import user from './user';
import init from './init';
import cough from './cough';

export default function* root() {
  yield fork(user);
  yield fork(cough);
  yield fork(init);
}

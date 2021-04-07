import {take, put, call, fork} from 'redux-saga/effects';
import {GET_RESULTS} from '../actions/ActionTypes';
import {SAGA_ALERT_TIMEOUT} from '../constants';

import {
  GET_RESULTS as GET_RESULTS_URL,
  callRequest,
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../util';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* getResults() {
  while (true) {
    const {payload, responseCallback} = yield take(GET_RESULTS.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_RESULTS_URL,
        payload,
        '',
        {},
        ApiSauce,
      );
      if (response.status) {
        if (responseCallback) responseCallback(true);
      } else {
        if (responseCallback) responseCallback(false);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false);
    }
  }
}

export default function* root() {
  yield fork(getResults);
}

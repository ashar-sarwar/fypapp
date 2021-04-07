// @flow

import {GET_RESULTS} from './ActionTypes';

export function getResultsRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_RESULTS.REQUEST,
  };
}

export function getResultsSuccess(data) {
  return {
    data,
    type: GET_RESULTS.SUCCESS,
  };
}

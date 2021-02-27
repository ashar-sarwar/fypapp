// @flow
import _ from "lodash";
import { create } from "apisauce";
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE
} from "../config/WebService";

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT
});

class ApiSauce {
  async post(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.post(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("data", data);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async get(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.get(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async delete(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.delete(
      url,
      {},
      {
        headers
      }
    );

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async put(url, data, headers, baseUrl) {
    api.setBaseURL(baseUrl);
    const response = await api.put(url, data, {
      headers
    });

    if (__DEV__ && API_LOG) {
      console.log("url", url);
      console.log("data", data);
      console.log("headers", headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  manipulateResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (
          response.status === 401 &&
          response.data.message === "Unauthenticated"
        ) {
          // session expired, logout user forcefully
          // logoutUserHelper();
        }

        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }

        if (response.problem === "NETWORK_ERROR") {
          reject(ERROR_NETWORK_NOT_AVAILABLE);
        }

        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
}

export default new ApiSauce();

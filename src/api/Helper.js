import axios from 'axios';
import {store} from '../CreateStore';
import {AUTH_LOGOUT, UPDATE_TOKEN} from '../action/ActionType';

export const SetAxiosAuthBearer = jwt_bearer => {
  // console.log(jwt_bearer);
  axios.defaults.headers.common['Authorization'] = jwt_bearer;
};

export const SetAxiosDefaultConfig = async () => {
  // interecept api call and refresh token
  axios.defaults.timeout = 25000;
  axios.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      // console.log(error.response);
      if (error.response && error.response.config) {
        const ori_request = error.response.config;

        // Timeout & retry
        if (
          (error.code && error.code === 'ECONNABORTED') ||
          (error.response && error.response.status === 408)
        ) {
          // console.log(error.response);
          if (typeof ori_request._retry_timeout === 'undefined') {
            ori_request._retry_timeout = true;
            return axios(ori_request);
          }
        }
        if (error.response.status == 401) {
          // perform refresh token here
        }
      }
      return Promise.reject(error);
    },
  );
};

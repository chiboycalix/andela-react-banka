import axios from 'axios';
import { CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './types';

const baseUrl = 'https://banka-challenge-3.herokuapp.com/api/v1';
export const createUserStart = () => {
  return {
    type: CREATE_USER_START,
  };
};
// export const createUserSuccess = (payload) => {
//   return {
//     type: CREATE_USER_SUCCESS,
//     payload,
//   };
// };

export const createUserSuccess = payload => ({
  type: CREATE_USER_SUCCESS,
  payload,
});

export const createUserFailure = (payload) => {
  return {
    type: CREATE_USER_FAILURE,
    error,
  };
};

export const creatUser = payload => (dispatch) => {
  const url = `${baseUrl}/auth/signup`;
  dispatch(createUserStart());
  return axios.post(url, payload)
    .then((response) => {
      const res = dispatch(createUserSuccess(response.data.data));
      return res;
    }, (err) => {
      const error = dispatch(createUserFailure(err.response.data));
      return error;
    });
};

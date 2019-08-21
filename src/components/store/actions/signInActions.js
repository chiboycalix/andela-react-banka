import axios from 'axios';
import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './types';

const baseUrl = 'https://banka-challenge-3.herokuapp.com/api/v1';
export const loginUserStart = () => {
  return {
    type: LOGIN_USER_START,
  };
};

export const loginUserSuccess = (payload) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
};

export const loginUser = payload => async (dispatch) => {
  const url = `${baseUrl}/auth/login`;
  dispatch(loginUserStart());
  try {
    const response = await axios.post(url, payload);
    return dispatch(loginUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(loginUserFailure(error.response.data));
  }
};

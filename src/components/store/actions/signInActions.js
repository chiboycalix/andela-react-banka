import * as types from './types';
import { signinUrl } from '../Helpers/Api';
import { axiosInstance } from '../Helpers/Axios';

export const loginUserStart = () => {
  return {
    type: types.LOGIN_USER_START,
  };
};

export const loginUserSuccess = (payload) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: types.LOGIN_USER_FAILURE,
    error,
  };
};

export const loginUser = payload => async (dispatch) => {
  dispatch(loginUserStart());
  try {
    const response = await axiosInstance(signinUrl(), payload);
    return dispatch(loginUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(loginUserFailure(error.response.data));
  }
};

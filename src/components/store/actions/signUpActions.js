import * as types from './types';
import { signupUrl } from '../Helpers/Api';
import { axiosInstance } from '../Helpers/Axios';

export const createUserStart = () => {
  return {
    type: types.CREATE_USER_START,
  };
};

export const createUserSuccess = (payload) => {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload,
  };
};

export const createUserFailure = (error) => {
  return {
    type: types.CREATE_USER_FAILURE,
    error,
  };
};

export const creatUser = payload => async (dispatch) => {
  dispatch(createUserStart());
  try {
    const response = await axiosInstance(signupUrl(), payload);
    return dispatch(createUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(createUserFailure(error.response.data));
  }
};

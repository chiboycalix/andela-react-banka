import * as types from './types';
import { signinUrl, signupUrl } from '../Helpers/Api';
import { axiosPostInstance } from '../Helpers/Axios';


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

export const logoutInit = () => {
  return {
    type: types.LOGOUT_USER_START
  }
}

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_USER_SUCCESS
  }
}

export const logoutFailure = () => {
  return {
    type: types.LOGOUT_USER_FAILURE
  }
}

export const creatUser = payload => async (dispatch) => {
  dispatch(createUserStart());
  try {
    const response = await axiosPostInstance(signupUrl(), payload);
    return dispatch(createUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(createUserFailure(error.response.data));
  }
};

export const loginUser = payload => async (dispatch) => {
  dispatch(loginUserStart());
  try {
    const response = await axiosPostInstance(signinUrl(), payload);
    return dispatch(loginUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(loginUserFailure(error.response.data));
  }
};


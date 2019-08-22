import * as types from './types';
import { getAccountUrl } from '../Helpers/Api';
import { axiosGetInstance } from '../Helpers/Axios';

export const getAccountStart = () => {
  return {
    type: types.GET_ACCOUNT_START,
  };
};

export const getAccountSuccess = (payload) => {
  return {
    type: types.GET_ACCOUNT_SUCCESS,
    payload,
  };
};

export const getAccountFailure = (error) => {
  return {
    type: types.LOGIN_USER_FAILURE,
    error,
  };
};

export const getAccounts = () => async (dispatch) => {
  dispatch(getAccountStart());
  try {
    const response = await axiosGetInstance(getAccountUrl());
    return dispatch(getAccountSuccess(response.data.data));
  } catch (error) {
    return dispatch(getAccountFailure(error.response.data));
  }
};

import * as types from './types';
import { axiosInstance } from '../Helpers/Axios';
import { postAccountUrl } from '../Helpers/Api';


export const createAccountStart = () => {
  return {
    type: types.CREATE_ACCOUNT_START,
  };
};

export const createAccountSuccess = (payload) => {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
    payload,
  };
};

export const createAccountFailure = (error) => {
  return {
    type: types.CREATE_ACCOUNT_FAILURE,
    error,
  };
};

export const createAccount = payload => async (dispatch) => {
  dispatch(createAccountStart());
  try {
    const response = await axiosInstance(postAccountUrl(), payload);
    return dispatch(createAccountSuccess(response.data.data));
  } catch (error) {
    return dispatch(createAccountFailure(error.response.data));
  }
};

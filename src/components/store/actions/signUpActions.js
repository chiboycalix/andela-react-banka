import axios from 'axios';
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './types';

const baseUrl = 'https://banka-challenge-3.herokuapp.com/api/v1';
export const createUserStart = () => {
  return {
    type: CREATE_USER_START,
  };
};

export const createUserSuccess = (payload) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    error,
  };
};

export const creatUser = payload => async (dispatch) => {
  const url = `${baseUrl}/auth/signup`;
  dispatch(createUserStart());
  try {
    const response = await axios.post(url, payload);
    return dispatch(createUserSuccess(response.data.data));
  } catch (error) {
    return dispatch(createUserFailure(error.response.data));
  }
};

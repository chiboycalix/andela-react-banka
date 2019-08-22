import * as types from '../actions/types';

const initState = {
  user: null,
  isLoading: false,
  error: null,
};

const signinReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default signinReducer;

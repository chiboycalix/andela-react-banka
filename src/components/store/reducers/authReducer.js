import * as types from '../actions/types';

const initState = {
  user: null,
  isLoading: false,
  error: null,
  isLogout: true,
  isLoggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLogout: false,
        isLoggedIn: true,
      };
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

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
        isLogout: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.LOGOUT_USER_START:
      return {
        ...state,
        isLogout: true,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLogout: true,
      };
    case types.LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLogout: false,
      };
    default:
      return state;
  }
};

export default authReducer;

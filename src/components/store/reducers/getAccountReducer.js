import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: null,
  accounts: null,
};

const getAccountReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
        isLoading: false,
      };
    case types.GET_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getAccountReducer;

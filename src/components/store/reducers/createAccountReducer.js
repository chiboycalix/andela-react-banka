import * as types from '../actions/types';

const initState = {
  isLoading: false,
  account: null,
  error: null,
};
const createAccountReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
        isLoading: false,
      };
    case types.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default createAccountReducer;

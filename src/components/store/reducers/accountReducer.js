import { CREATE_ACCOUNT_START, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE } from '../actions/types';

const initState = {
  isLoading: false,
  account: null,
  error: null,
};
const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
        isLoading: false,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default accountReducer;

import * as types from '../actions/types';


const initState = {
  user: null,
  error: null,
  isLoading: false,
};
const signupReducer = (state = initState, action) => {
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
      };
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};


export default signupReducer;

import { CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions/types';


const initState = {
  user: null,
  error: null,
  isLoading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};


export default authReducer;

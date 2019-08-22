import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import createAccountReducer from './createAccountReducer';
import getAccountReducer from './getAccountReducer';
import signinReducer from './signInReducer';


const rootReducer = combineReducers({
  signup: signUpReducer,
  signin: signinReducer,
  create: createAccountReducer,
  getaccount: getAccountReducer,
});

export default rootReducer;

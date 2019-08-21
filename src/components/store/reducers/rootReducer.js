import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import accountReducer from './accountReducer';
import signinReducer from './signInReducer';


const rootReducer = combineReducers({
  signup: signUpReducer,
  signin: signinReducer,
  account: accountReducer,
});

export default rootReducer;

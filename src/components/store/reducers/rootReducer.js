import { combineReducers } from 'redux';
import createAccountReducer from './createAccountReducer';
import getAccountReducer from './getAccountReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  create: createAccountReducer,
  getaccount: getAccountReducer,
});

export default rootReducer;

import globalReducer from './globalReducer';
import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import childReducer from './childReducer';
import schoolReducer from './schoolReducer';
const allReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  auth: authReducer,
  child: childReducer,
  school: schoolReducer,
});

export default allReducer;

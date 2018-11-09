import { combineReducers } from 'redux';
import entities from './entities_reducer.js';
import session from './session_reducer.js';
import errors from './errors_reducer.js';

export default combineReducers({
  entities,
  session,
  errors
});

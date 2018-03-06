import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

import sessionErrorsReducer from './session_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({session: sessionErrorsReducer});

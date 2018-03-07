import sessionErrorsReducer from './session_errors_reducer';
import todoListErrorsReducer from './todo_list_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: sessionErrorsReducer,
  todoListErrors: todoListErrorsReducer
});

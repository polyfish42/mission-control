import todoListReducer from './todo_lists/todo_list_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todoLists: todoListReducer
});

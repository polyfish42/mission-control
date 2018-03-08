import todoListReducer from './todo_lists/todo_list_reducer';
import todoReducer from './todos/todo_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todoLists: todoListReducer,
  todos: todoReducer
});

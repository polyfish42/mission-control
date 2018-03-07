import {
  RECEIVE_TODO_LIST,
  RECEIVE_TODO_LISTS,
  REMOVE_TODO_LIST
} from '../../../actions/todo_list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO_LIST:
      const newTodoList = { [action.todoList.id]: action.todoList };
      return merge({}, state, newTodoList);
    case RECEIVE_TODO_LISTS:
      return action.todoLists;
    case REMOVE_TODO_LIST:
      const newTodoLists = merge({}, state);
      delete newTodoLists[action.todoList.id];
      return newTodoLists;
    default:
      return state;
  }
};

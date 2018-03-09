import {
  RECEIVE_TODO_LIST,
  TODO_LISTS_SUCCESS,
  REMOVE_TODO_LIST
} from '../../../actions/todo_list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO_LIST:
      const newTodoList = { [action.todoList.id]: action.todoList };
      return merge({}, state, newTodoList);
    case TODO_LISTS_SUCCESS:
      return action.todoLists;
    case REMOVE_TODO_LIST:
      const newTodoLists = merge({}, state);
      delete newTodoLists[action.todoList.id];
      return newTodoLists;
    default:
      return state;
  }
};

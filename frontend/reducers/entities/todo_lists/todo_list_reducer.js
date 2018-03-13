import {
  TODO_LIST_SUCCESS,
  TODO_LISTS_SUCCESS,
  REMOVE_TODO_LIST_SUCCESS
} from '../../../actions/todo_list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      const newTodoList = { [action.todoList.id]: action.todoList };
      return merge({}, state, newTodoList);
    case TODO_LISTS_SUCCESS:
      return action.todoLists ? action.todoLists : {};
    case REMOVE_TODO_LIST_SUCCESS:
      const newTodoLists = merge({}, state);
      delete newTodoLists[action.todoList.id];
      return newTodoLists;
    default:
      return state;
  }
};

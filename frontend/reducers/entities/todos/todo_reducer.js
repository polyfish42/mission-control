import {
  TODO_SUCCESS,
  TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS
} from '../../../actions/todo_actions';
import {
  TODO_LIST_SUCCESS,
  TODO_LISTS_SUCCESS
} from '../../../actions/todo_list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TODO_SUCCESS:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);
    case TODOS_SUCCESS:
      return action.todos;
    case REMOVE_TODO_SUCCESS:
      const newTodos = merge({}, state);
      delete newTodos[action.todo.id];
      return newTodos;
    case TODO_LIST_SUCCESS:
      return merge({}, state, action.todos);
    case TODO_LISTS_SUCCESS:
      return merge({}, state, action.todos);
    default:
      return state;
  }
};

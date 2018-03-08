import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO
} from '../../../actions/todo_actions';
import {
  RECEIVE_TODO_LIST,
  RECEIVE_TODO_LISTS
} from '../../../actions/todo_list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, state, newTodo);
    case RECEIVE_TODOS:
      return action.todos;
    case REMOVE_TODO:
      const newTodos = merge({}, state);
      delete newTodos[action.todo.id];
      return newTodos;
    case RECEIVE_TODO_LIST:
      return merge({}, state, action.todos);
    case RECEIVE_TODO_LISTS:
      return merge({}, state, action.todos);
    default:
      return state;
  }
};

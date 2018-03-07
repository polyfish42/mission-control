import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO
} from '../../../actions/todo_actions';
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
    default:
      return state;
  }
};

import {
  RECEIVE_TODO_LISTS,
  RECEIVE_TODO_LIST,
  RECEIVE_TODO_ERRORS,
  CLEAR_TODO_ERRORS
} from '../../actions/todo_list_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO_ERRORS:
      return action.errors.responseJSON.errors;
    case RECEIVE_TODO_LISTS:
      return _nullErrors;
    case RECEIVE_TODO_LIST:
      return _nullErrors;
    case CLEAR_TODO_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

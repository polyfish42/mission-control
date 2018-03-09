import {
  TODO_LISTS_SUCCESS,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAILURE,
  CLEAR_TODO_ERRORS
} from '../../actions/todo_list_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TODO_LIST_FAILURE:
      return action.errors.responseJSON.errors;
    case TODO_LISTS_SUCCESS:
      return _nullErrors;
    case TODO_LIST_SUCCESS:
      return _nullErrors;
    case CLEAR_TODO_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

import {
  OPEN_CREATE_TODO_FORM,
  CLOSE_CREATE_TODO_FORM
} from "../../actions/ui/todo_ui_actions";
import { CREATE_TODO_REQUEST, UPDATE_TODO_REQUEST, TODO_SUCCESS } from  "../../actions/todo_actions";
import { TODO_LIST_SUCCESS } from "../../actions/todo_list_actions";
import { merge } from "lodash";

const defaultState = {
  createTodoFormShowing: false,
  createTodoFormSubmitting: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_CREATE_TODO_FORM:
      return merge({}, state, { createTodoFormShowing: true });
    case CLOSE_CREATE_TODO_FORM:
      return merge({}, state, { createTodoFormShowing: false });
    case CREATE_TODO_REQUEST:
      return merge({}, state, { createTodoFormSubmitting: true});
    case UPDATE_TODO_REQUEST:
      return merge({}, state, { createTodoFormSubmitting: true});
    case TODO_LIST_SUCCESS:
      return merge({}, state, { createTodoFormShowing: false, createTodoFormSubmitting: false });
    case TODO_SUCCESS:
      return merge({}, state, { createTodoFormShowing: false, createTodoFormSubmitting: false });
    default:
      return state;
  }
};

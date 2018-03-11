import {
  SHOW_CREATE_TODO_LIST_FORM,
  CLOSE_CREATE_TODO_LIST_FORM,
  SHOW_EDIT_TODO_LIST_FORM,
  CLOSE_EDIT_TODO_LIST_FORM
} from "../../actions/ui/todo_list_ui_actions";
import { CREATE_TODO_LIST_REQUEST, TODO_LIST_SUCCESS } from  "../../actions/todo_list_actions";
import { merge } from "lodash";

const defaultState = {
  createTodoListFormShowing: false,
  todoListFormSubmitting: false,
  editTodoListFormShowing: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_CREATE_TODO_LIST_FORM:
      return merge({}, state, { createTodoListFormShowing: true });
    case CLOSE_CREATE_TODO_LIST_FORM:
      return merge({}, state, { createTodoListFormShowing: false });
    case SHOW_EDIT_TODO_LIST_FORM:
      return merge({}, state, { editTodoListFormShowing: true });
    case CLOSE_EDIT_TODO_LIST_FORM:
      return merge({}, state, { editTodoListFormShowing: false });
    case CREATE_TODO_LIST_REQUEST:
      return merge({}, { todoListFormSubmitting: true });
    case TODO_LIST_SUCCESS:
      return merge({}, state, { createTodoListFormShowing: false, todoListFormSubmitting: false });
    default:
      return state;
  }
};

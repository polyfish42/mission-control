import {
  SHOW_CREATE_TODO_LIST_FORM,
  CLOSE_CREATE_TODO_LIST_FORM
} from "../../actions/ui/todo_list_ui_actions";
import { merge } from "lodash";

const defaultState = {
  createTodoListFormShowing: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_CREATE_TODO_LIST_FORM:
      return merge({}, state, { createTodoListFormShowing: true });
    case CLOSE_CREATE_TODO_LIST_FORM:
      return merge({}, state, { createTodoListFormShowing: false });
    default:
      return state;
  }
};

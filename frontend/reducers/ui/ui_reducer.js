import todoListUiReducer from "./todo_list_ui_reducer";
import { combineReducers } from "redux";

export default combineReducers({
  todoList: todoListUiReducer
});

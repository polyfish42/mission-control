import todoListUiReducer from "./todo_list_ui_reducer";
import todoUiReducer from "./todo_ui_reducer";
import { combineReducers } from "redux";

export default combineReducers({
  todoList: todoListUiReducer,
  todo: todoUiReducer
});

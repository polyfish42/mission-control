import todoListReducer from './todo_lists/todo_list_reducer';
import todoReducer from './todos/todo_reducer';
import userReducer from './users/user_reducer';
import messageReducer from './messages/message_reducer';
import commentReducer from './comments/comment_reducer';
import eventReducer from './events/event_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todoLists: todoListReducer,
  todos: todoReducer,
  users: userReducer,
  messages: messageReducer,
  comments: commentReducer,
  events: eventReducer
});

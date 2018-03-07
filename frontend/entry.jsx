import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test
import { signup, login, logout } from './actions/session_actions';
import { createTodoList } from './actions/todo_list_actions';

document.addEventListener("DOMContentLoaded", () =>{
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.createTodoList = createTodoList;
  window.dispatch = store.dispatch;
  window.state = store.getState;

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/api_util';

document.addEventListener("DOMContentLoaded", () =>{
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<h1>Mission Control</h1>, document.getElementById("root"));
});

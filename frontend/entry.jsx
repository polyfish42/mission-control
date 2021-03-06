import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test
import { createEvent, fetchEvents, fetchEvent, updateEvent, deleteEvent } from './actions/event_actions';

document.addEventListener("DOMContentLoaded", () =>{
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.createEvent = createEvent;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  window.updateEvent = updateEvent;
  window.deleteEvent = deleteEvent;
  window.dispatch = store.dispatch;
  window.state = store.getState;

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

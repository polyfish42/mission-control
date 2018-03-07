import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

// block pages you shouldn't see when you're logged in
const Auth = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={props => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/project" />
    )
  )} />
};

// block pages you shouldn't see if you're not logged in
const Protected = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={props => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

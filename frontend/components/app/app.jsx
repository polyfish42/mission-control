import React from 'react';
import SignupSessionFormContainer from '../session/signup_session_form_container';
import LoginSessionFormContainer from '../session/login_session_form_container';
import Splash from '../frontend/splash';
import { AuthRoute } from '../../util/route_util';

const App = () => {
  return (
    <div>
      <AuthRoute path='/' exact component={Splash} />
      <AuthRoute path='/signup' component={SignupSessionFormContainer} />
      <AuthRoute path='/login' component={LoginSessionFormContainer} />
    </div>
  );
};

export default App;

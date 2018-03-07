import React from 'react';
import SignupSessionFormContainer from '../session/signup_session_form_container';
import LoginSessionFormContainer from '../session/login_session_form_container';
import MemberArea from '../project/member_area';
import Splash from '../splash/splash';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const App = () => {
  return (
    <div>
      <AuthRoute path='/' exact component={Splash} />
      <AuthRoute path='/signup' component={SignupSessionFormContainer} />
      <AuthRoute path='/login' component={LoginSessionFormContainer} />
      <ProtectedRoute path='/project' component={MemberArea} />
    </div>
  );
};

export default App;

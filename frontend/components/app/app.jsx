import React from 'react';
import SplashContainer from '../splash/splash_container';
import SignupSessionFormContainer from '../session/signup_session_form_container';
import LoginSessionFormContainer from '../session/login_session_form_container';
import MemberArea from '../project/member_area';
import MessageBoardContainer from '../message_board/message_board_container';
import TodosContainer from '../todos/todos_container';
import ScheduleContainer from '../schedule/schedule_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const App = () => {
  return (
    <div>
      <AuthRoute path='/' exact component={SplashContainer} />
      <AuthRoute path='/signup' component={SignupSessionFormContainer} />
      <AuthRoute path='/login' component={LoginSessionFormContainer} />
      <ProtectedRoute path='/project' component={MemberArea} />
      <ProtectedRoute path='/messages' component={MessageBoardContainer} />
      <ProtectedRoute path='/todolists' component={TodosContainer} />
      <ProtectedRoute path='/schedule' component={ScheduleContainer} />
    </div>
  );
};

export default App;

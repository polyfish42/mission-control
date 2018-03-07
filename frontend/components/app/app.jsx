import React from 'react';
import SplashContainer from '../splash/splash_container';
import SignupSessionFormContainer from '../session/signup_session_form_container';
import LoginSessionFormContainer from '../session/login_session_form_container';
import MemberArea from '../project/member_area';
import MessageBoardContainer from '../message_board/message_board_container';
import TodosContainer from '../todos/todos_container';
import ScheduleContainer from '../schedule/schedule_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ProjectHeaderContainer from '../project/project_header/project_header_container';

const App = () => {
  return (
    <div>
      <ProjectHeaderContainer />
      <AuthRoute path='/' exact component={SplashContainer} />
      <AuthRoute path='/signup' component={SignupSessionFormContainer} />
      <AuthRoute path='/login' component={LoginSessionFormContainer} />
      <ProtectedRoute path='/project' component={MemberArea} />
      <ProtectedRoute path='/messages' component={MessageBoardContainer} />
      <ProtectedRoute path='/schedule' component={ScheduleContainer} />
      <ProtectedRoute path='/todolists' component={TodosContainer} />
    </div>
  );
};

export default App;

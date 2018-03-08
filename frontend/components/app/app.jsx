import React from 'react';
import ProjectHeaderContainer from '../project/project_header/project_header_container';
import SplashContainer from '../splash/splash_container';
import SignupSessionFormContainer from '../session/signup_session_form_container';
import LoginSessionFormContainer from '../session/login_session_form_container';
import Project from '../project/project';
import MessageBoardContainer from '../message_board/message_board_container';
import TodoListIndexContainer from '../todos/todo_list/todo_list_index_container';
import TodoListShowContainer from '../todos/todo_list/todo_list_show_container';
import ScheduleContainer from '../schedule/schedule_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const App = () => {
  return (
    <div>
      <ProjectHeaderContainer />
      <AuthRoute path='/' exact component={SplashContainer} />
      <AuthRoute path='/signup' component={SignupSessionFormContainer} />
      <AuthRoute path='/login' component={LoginSessionFormContainer} />
      <ProtectedRoute path='/project' component={Project} />
      <ProtectedRoute path='/messages' component={MessageBoardContainer} />
      <ProtectedRoute path='/todolists' exact component={TodoListIndexContainer} />
      <ProtectedRoute path='/todolists/:todoListId' component={TodoListShowContainer} />
      <ProtectedRoute path='/schedule' component={ScheduleContainer} />
    </div>
  );
};

export default App;

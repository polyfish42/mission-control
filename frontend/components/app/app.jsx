import React from "react";
import ProjectHeaderContainer from "../project/project_header/project_header_container";
import SplashContainer from "../splash/splash_container";
import SignupSessionFormContainer from "../session/signup_session_form_container";
import LoginSessionFormContainer from "../session/login_session_form_container";
import Project from "../project/project";
import MessageBoardContainer from "../message_board/message_board_container";
import EditMessageContainer from "../message_board/edit_message_container";
import CreateMessageContainer from "../message_board/create_message_container";
import TodoListIndexContainer from "../todos/todo_list/todo_list_index_container";
import TodoListShowContainer from "../todos/todo_list/todo_list_show_container";
import TodoShowContainer from "../todos/todo/todo_show_container";
import ScheduleContainer from "../schedule/schedule_container";
import { AuthRoute, ProtectedRoute, Switch } from "../../util/route_util";

const App = () => {
  return (
    <div>
      <ProjectHeaderContainer/>
      <AuthRoute
        path="/"
        exact
        component={SplashContainer} />
      <AuthRoute
        path="/signup"
        component={SignupSessionFormContainer} />
      <AuthRoute
        path="/login"
        component={LoginSessionFormContainer} />
      <ProtectedRoute
        path="/project"
        component={Project} />
      <ProtectedRoute
        path="/messages"
        exact
        component={MessageBoardContainer} />
      <ProtectedRoute
        path="/messages/new"
        exact
        component={CreateMessageContainer} />
      <ProtectedRoute
        path="/messages/:messageId(\d+)"
        exact
        component={SplashContainer} />
      <ProtectedRoute
        path="/messages/:messageId(\d+)/edit"
        exact
        component={EditMessageContainer} />
      <ProtectedRoute
        path="/todolists"
        exact
        component={TodoListIndexContainer}
        />
      <ProtectedRoute
        path="/todolists/:todoListId"
        exact
        component={TodoListShowContainer}
        />
      <ProtectedRoute
        path="/todolists/:todoListId/todos/:todoId"
        component={TodoShowContainer}
        />
      <ProtectedRoute
        path="/schedule"
        component={ScheduleContainer} />
    </div>
  );
};

export default App;

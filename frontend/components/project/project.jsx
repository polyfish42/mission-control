import React from 'react';
import MessageBoardToolContainer from './tools/message_board_tool_container';
import TodosToolContainer from './tools/todos_tool_container';
import ScheduleToolContainer from './tools/schedule_todo_container';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="main-content">
        <h1 className="main-content__h1">Mission Control</h1>
        <div className="project">
          <div className="project__tools">
            <Link to="/messages" className="project__link">
              <MessageBoardToolContainer />
            </Link>
            <Link to="/todolists" className="project__link">
              <TodosToolContainer />
            </Link>
            <Link to="/events" className="project__link">
              <ScheduleToolContainer />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

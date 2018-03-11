import React from 'react';

class TodoAssignee extends React.Component {
  render() {
    const {assignee, cancelAssignee} = this.props;

    return (
      <div>
        {
          assignee && (<span className="todo-assignee"
          onClick={() => cancelAssignee(assignee)}>
          { assignee.name }
          <span className="todo-assignee__x"> x</span>
        </span>)
        }
      </div>
    );
  }
}

export default TodoAssignee;

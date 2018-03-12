import React from 'react';

class TodoAssignee extends React.Component {
  render() {
    const {assignee, cancelAssignee} = this.props;

    return (
      <div>
        {
          assignee && (<div className="todo-assignee"
          onClick={() => this.props.readOnly ? null : cancelAssignee(assignee)}>
          { assignee.name }
          <span className="todo-assignee__x"> x</span>
        </div>)
        }
      </div>
    );
  }
}

export default TodoAssignee;

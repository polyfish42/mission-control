import React from 'react';

const TodoAssignee = (props) => {
  const {assignee, cancelAssignee, clickable} = props;
  return (
    <div>
      {
        assignee && (<div className="todo-assignee"
        onClick={() => clickable === true ? cancelAssignee(assignee) : null}>
        { assignee.name }
        <span className="todo-assignee__x"> x</span>
      </div>)
      }
    </div>
  );
}

export default TodoAssignee;

import React from 'react';
import update from "immutability-helper";

const TodoCheck = (props) => {
  function check() {
    if (props.formShowing === false) {
      let isDone = props.todo.done === true ? false : true;
      let newTodo = update(props.todo, {
        done: { $set: isDone },
        assignments: { $set: props.assignees.map(a => parseInt(a.id))}
      });
      props.close();
      props.handleSubmit(newTodo);
    }
  }

  function checkedClass(className) {
    return (
      className +
      (props.todo.done === true ? ` ${className}--checked--large` : "")
    );
  }

  return (
    <span
      className={checkedClass("todo__checkbox") + props.sizeClass}
      onClick={check}
    />
  )
}

export default TodoCheck;

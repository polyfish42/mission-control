import React from 'react';

const Todo = ({ todo }) => {
  return (
    <li className="todo"><div className="todo__checkbox"></div>{ todo.name }</li>
  )
};

export default Todo;

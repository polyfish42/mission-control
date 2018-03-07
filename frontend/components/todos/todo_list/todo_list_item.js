import React from 'react';

const TodoListItem = ({ todoList }) => {
  return (
    <li>{ todoList.name }</li>
  );
};

export default TodoListItem;

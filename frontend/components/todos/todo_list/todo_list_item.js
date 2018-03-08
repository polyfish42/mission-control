import React from 'react';
import TodoContainer from '../todo/todo_container';

const TodoListItem = ({ todoList }) => {
  return (
    <li>
      { todoList.name }
      <ul>
        {
          todoList.todos.map((todo, key) => {
            return <TodoContainer todo={todo} key={key} />
        })
      }
      </ul>
    </li>
  );
};

export default TodoListItem;

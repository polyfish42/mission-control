import React from "react";
import TodoContainer from "../todo/todo_container";
import { Link } from "react-router-dom";

const TodoListItem = ({ todoList }) => {
  return (
    <li className="todoListItem">
      <Link to={`/todolists/${todoList.id}`} className="todoListItem__name">
        {todoList.name}
      </Link>
      <div className="todoListItem__description">{todoList.description}</div>
      <ul>
        {todoList.todos.map((todo, key) => {
          return <TodoContainer todo={todo} key={key} />;
        })}
      </ul>
    </li>
  );
};

export default TodoListItem;

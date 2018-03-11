import React from "react";
import TodoListTodos from "../todo_list/todo_list_todos";
import { Link } from "react-router-dom";

const TodoListItem = ({ todoList }) => {
  return (
    <li className="todoListItem">
      <Link to={`/todolists/${todoList.id}`} className="todoListItem__name--link">
        {todoList.name}
      </Link>
      {todoList.description != "" && (
        <div className="todoListItem__description">{todoList.description}</div>
      )}
      <TodoListTodos todoList={todoList} />
    </li>
  );
};

export default TodoListItem;

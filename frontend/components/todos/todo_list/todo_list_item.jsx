import React from "react";
import TodoContainer from "../todo/todo_container";
import CreateTodoFormContainer from "../todo/create_todo_form_container";
import { Link } from "react-router-dom";

const TodoListItem = ({ todoList }) => {
  const done = todoList.todos.filter(todo => todo.done);
  const notDone = todoList.todos.filter(todo => !todo.done);

  return (
    <li className="todoListItem">
      <Link to={`/todolists/${todoList.id}`} className="todoListItem__name">
        {todoList.name}
      </Link>
      <div className="todoListItem__description">{todoList.description}</div>
      <ul>
        {notDone.map((todo, key) => {
          return <TodoContainer todo={todo} key={key} />;
        })}
      </ul>
      <CreateTodoFormContainer />
      <ul>
        {done.map((todo, key) => {
          return <TodoContainer todo={todo} key={key} />;
        })}
      </ul>
    </li>
  );
};

export default TodoListItem;

import React from 'react';
import TodoContainer from "../todo/todo_container";
import CreateTodoFormContainer from "../todo/create_todo_form_container";

const TodoListTodos = ({ todoList }) => {
  const done = todoList.todos.filter(todo => todo.done);
  const notDone = todoList.todos.filter(todo => !todo.done);
  return (<div>
    <ul>
      {notDone.map((todo, key) => {
        return <TodoContainer todo={todo} key={key} />;
      })}
    </ul>
    <CreateTodoFormContainer todoListId={todoList.id} />
    <ul>
      {done.map((todo, key) => {
        return <TodoContainer todo={todo} key={key} />;
      })}
    </ul>
  </div>);
}

export default TodoListTodos;

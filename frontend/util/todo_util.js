export const createTodo = todo =>
  $.ajax({
    url: "api/todos",
    method: "POST",
    data: { todo }
  });

export const fetchTodo = id =>
  $.ajax({
    url: `api/todos/${id}`,
    method: "GET"
  });

export const fetchTodos = () =>
  $.ajax({
    url: "api/todos/",
    method: "GET"
  });

export const updateTodo = todo =>
  $.ajax({
    url: `api/todos/${todo.id}`,
    method: "PATCH",
    data: { todo }
  });

export const deleteTodo = id =>
  $.ajax({
    url: `api/todos/${id}`,
    method: "DELETE"
  });

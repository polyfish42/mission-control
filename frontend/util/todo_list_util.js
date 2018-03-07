export const createTodoList = (todo_list) => (
  $.ajax({
    url: 'api/todo_lists',
    method: 'POST',
    data: { todo_list }
  })
);

export const fetchTodoList = (id) => (
  $.ajax({
    url: `api/todo_lists/${id}`,
    method: 'GET'
  })
);

export const fetchTodoLists = () => (
  $.ajax({
    url: 'api/todo_lists/',
    method: 'GET'
  })
);

export const updateTodoList = (todo_list) => (
  $.ajax({
    url: `api/todo_lists/${todo_list.id}`,
    method: 'PATCH',
    data: { todo_list }
  })
);

export const deleteTodoList = (id) => (
  $.ajax({
    url: `api/todo_lists/${id}`,
    method: 'DELETE'
  })
);

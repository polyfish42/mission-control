export const selectTodoList = ({ todoLists, todos }, id) => {
  if (todoLists[id]) {
    const todoList = todoLists[id];
    return mapTodosToList(todoList, todos);
  }
  return {};
};

export const selectTodoLists = ({todoLists, todos}) => {
  return Object.values(todoLists).map(todoList => {
    return mapTodosToList(todoList, todos)
  });
};

const mapTodosToList = (todoList, todos) => {
  todoList.todos = todoList.todoIds.map(id => todos[id]);
  return todoList;
};

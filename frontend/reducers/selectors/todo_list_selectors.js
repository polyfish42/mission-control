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
  todoList.todos = todoList.todoIds.reduce((acc, id) => {
    if (todos[id]) {
      acc.push(todos[id]);
      return acc;
    } else {
      return acc;
    }
  },[]);
  debugger
  return todoList;
};

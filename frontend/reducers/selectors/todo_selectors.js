export const selectTodo = (state, id) => {
  if (state.entities.todos[id]) {
    const users = state.entities.users;
    const todo = state.entities.todos[id];
    todo.assignees = todo.assigneeIds.map(id => users[id]);
    return todo;
  }

  return {}
};

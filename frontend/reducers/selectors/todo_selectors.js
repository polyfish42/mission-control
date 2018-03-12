export const selectTodo = (state, users, id) => {
  if (state.entities.todos[id]) {
    const todo = state.entities.todos[id];
    todo.assignees = todo.assigneeIds.map(id => users[id]);
    debugger
    return todo;
  }

  return {}
};

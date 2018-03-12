export const selectAssignees = (state, todo) => {
  return todo.assigneeIds.map(id => state.entities.users[id]);
}

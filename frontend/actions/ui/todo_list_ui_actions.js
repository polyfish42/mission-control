export const SHOW_CREATE_TODO_LIST_FORM = "SHOW_TODO_LIST_FORM";
export const SHOW_EDIT_TODO_LIST_FORM = "SHOW_EDIT_LIST_FORM";
export const CLOSE_CREATE_TODO_LIST_FORM = "CLOSE_TODO_LIST_FORM";
export const CLOSE_EDIT_TODO_LIST_FORM = "CLOSE_EDIT_LIST_FORM";

export const showCreateTodoListForm = () => ({
  type: SHOW_CREATE_TODO_LIST_FORM
});

export const closeCreateTodoListForm = () => ({
  type: CLOSE_CREATE_TODO_LIST_FORM
});

export const showEditTodoListForm = () => ({
  type: SHOW_EDIT_TODO_LIST_FORM
});

export const closeEditTodoListForm = () => ({
  type: CLOSE_EDIT_TODO_LIST_FORM
});

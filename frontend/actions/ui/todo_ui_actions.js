export const OPEN_CREATE_TODO_FORM = "OPEN_TODO_LIST_FORM";
export const OPEN_EDIT_TODO_FORM = "OPEN_EDIT_TODO_FORM";
export const CLOSE_EDIT_TODO_FORM = "CLOSE_EDIT_TODO_FORM";
export const CLOSE_CREATE_TODO_FORM = "CLOSE_TODO_LIST_FORM";

export const openCreateTodoForm = () => ({
  type: OPEN_CREATE_TODO_FORM
});


export const closeCreateTodoForm = () => ({
  type: CLOSE_CREATE_TODO_FORM
});

export const openEditTodoForm = () => ({
  type: OPEN_EDIT_TODO_FORM
});

export const closeEditTodoForm = () => ({
  type: CLOSE_EDIT_TODO_FORM
});

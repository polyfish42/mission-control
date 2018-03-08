import * as TodoUtil from "../util/todo_util";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
export const RECEIVE_TODO_ERRORS = "RECEIVE_TODO_ERRORS";
export const CLEAR_TODO_ERRORS = "CLEAR_TODO_ERRORS";

export const createTodo = todo => {
  return dispatch => {
    return TodoUtil.createTodo(todo).then(
      todo => dispatch(receiveTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const fetchTodo = id => {
  return dispatch => {
    return TodoUtil.fetchTodo(id).then(
      todo => dispatch(receiveTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const fetchTodos = () => {
  return dispatch => {
    return TodoUtil.fetchTodos().then(
      todos => dispatch(receiveTodos(todos)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const updateTodo = todo => {
  return dispatch => {
    return TodoUtil.updateTodo(todo).then(
      todo => dispatch(receiveTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const deleteTodo = todo => {
  return dispatch => {
    return TodoUtil.deleteTodo(todo).then(
      todo => dispatch(removeTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

const receiveTodoErrors = errors => ({
  type: RECEIVE_TODO_ERRORS,
  errors
});

import * as TodoListUtil from '../util/todo_list_util';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const RECEIVE_TODO_LISTS = 'RECEIVE_TODO_LISTS';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS';
export const CLEAR_TODO_ERRORS = 'CLEAR_TODO_ERRORS';

export const createTodoList = (todoList) => {
  return (dispatch) => {
    return TodoListUtil.createTodoList(todoList).then(
      (todoList) => dispatch(receiveTodoList(todoList)),
      (errors) => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const fetchTodoList = (id) => {
  return (dispatch) => {
    return TodoListUtil.fetchTodoList(id).then(
      (todoList) => dispatch(receiveTodoList(todoList)),
      (errors) => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const fetchTodoLists = () => {
  return (dispatch) => {
    return TodoListUtil.fetchTodoLists().then(
      (todoLists) => dispatch(receiveTodoLists(todoLists)),
      (errors) => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const updateTodoList = () => {
  return (dispatch) => {
    return TodoListUtil.updateTodoList().then(
      (todoList) => dispatch(receiveTodoList(todoList)),
      (errors) => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const deleteTodoList = (todoList) => {
  return (dispatch) => {
    return TodoListUtil.deleteTodoList(todoList).then(
      (todoList) => dispatch(removeTodoList(todoList)),
      (errors) => dispatch(receiveTodoErrors(errors))
    );
  };
};

const receiveTodoList = (todoList) => ({
  type: RECEIVE_TODO_LIST,
  todoList
});

const receiveTodoLists = (todoLists) => ({
  type: RECEIVE_TODO_LISTS,
  todoLists
});

const removeTodoList = (todoList) => ({
  type: REMOVE_TODO_LIST,
  todoList
});

const receiveTodoErrors = (errors) => ({
  type: RECEIVE_TODO_ERRORS,
  errors
});

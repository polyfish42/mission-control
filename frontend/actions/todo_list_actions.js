import * as TodoListUtil from '../util/todo_list_util';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const RECEIVE_TODO_LISTS = 'RECEIVE_TODO_LISTS';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS';
export const CLEAR_TODO_LIST_ERRORS = 'CLEAR_TODO_ERRORS';

export const createTodoList = (todoList) => {
  return (dispatch) => {
    return TodoListUtil.createTodoList(todoList).then(
      (todoList) => dispatch(receiveTodoList(todoList)),
      (errors) => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodoList = (id) => {
  return (dispatch) => {
    return TodoListUtil.fetchTodoList(id).then(
      (response) => dispatch(receiveTodoList(response)),
      (errors) => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodoLists = () => {
  return (dispatch) => {
    return TodoListUtil.fetchTodoLists().then(
      (response) => dispatch(receiveTodoLists(response)),
      (errors) => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const updateTodoList = () => {
  return (dispatch) => {
    return TodoListUtil.updateTodoList().then(
      (todoList) => dispatch(receiveTodoList(todoList)),
      (errors) => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const deleteTodoList = (todoList) => {
  return (dispatch) => {
    return TodoListUtil.deleteTodoList(todoList).then(
      (todoList) => dispatch(removeTodoList(todoList)),
      (errors) => dispatch(receiveTodoListErrors(errors))
    );
  };
};

const receiveTodoList = ({todoList, todos}) => ({
  type: RECEIVE_TODO_LIST,
  todoList,
  todos
});

const receiveTodoLists = ({todoLists, todos}) => ({
  type: RECEIVE_TODO_LISTS,
  todoLists,
  todos
});

const removeTodoList = (todoList) => ({
  type: REMOVE_TODO_LIST,
  todoList
});

const receiveTodoListErrors = (errors) => ({
  type: RECEIVE_TODO_LIST_ERRORS,
  errors
});

import * as TodoListUtil from "../util/todo_list_util";
export const RECEIVE_TODO_LIST = "RECEIVE_TODO_LIST";
export const TODO_LISTS_REQUEST = "TODO_LISTS_REQUEST";
export const TODO_LISTS_SUCCESS = "TODO_LISTS_SUCCESS";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const RECEIVE_TODO_LIST_ERRORS = "RECEIVE_TODO_ERRORS";
export const CLEAR_TODO_LIST_ERRORS = "CLEAR_TODO_ERRORS";

export const createTodoList = todoList => {
  return dispatch => {
    return TodoListUtil.createTodoList(todoList).then(
      todoList => dispatch(receiveTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodoList = id => {
  return dispatch => {
    return TodoListUtil.fetchTodoList(id).then(
      response => dispatch(receiveTodoList(response)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodoLists = () => {
  return dispatch => {
    dispatch({ type: TODO_LISTS_REQUEST });

    return TodoListUtil.fetchTodoLists().then(
      response => dispatch(receiveTodoLists(response)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const updateTodoList = () => {
  return dispatch => {
    return TodoListUtil.updateTodoList().then(
      todoList => dispatch(receiveTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const deleteTodoList = todoList => {
  return dispatch => {
    return TodoListUtil.deleteTodoList(todoList).then(
      todoList => dispatch(removeTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const receiveTodoList = ({ todoList, todos }) => ({
  type: RECEIVE_TODO_LIST,
  todoList,
  todos
});

const receiveTodoLists = ({ todoLists, todos }) => ({
  type: TODO_LISTS_SUCCESS,
  todoLists,
  todos
});

const removeTodoList = todoList => ({
  type: REMOVE_TODO_LIST,
  todoList
});

export const receiveTodoListErrors = errors => ({
  type: RECEIVE_TODO_LIST_ERRORS,
  errors
});

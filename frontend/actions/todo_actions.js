import * as TodoUtil from "../util/todo_util";
import { receiveTodoList, receiveTodoListErrors } from "./todo_list_actions";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_REQUEST = "TODO_REQUEST";
export const TODOS_SUCCESS = "TODOS_SUCCESS";
export const TODOS_REQUEST = "TODO_REQUEST";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";
export const TODO_FAILURE = "TODO_FAILURE";
export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const REMOVE_TODO_REQUEST = "REMOVE_TODO_REQUEST";
export const CLEAR_TODO_ERRORS = "CLEAR_TODO_ERRORS";

export const createTodo = todo => {
  return dispatch => {
    dispatch({ type: CREATE_TODO_REQUEST });

    return TodoUtil.createTodo(todo).then(
      todoList => dispatch(receiveTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodo = id => {
  return dispatch => {
    dispatch({type: TODO_REQUEST});

    return TodoUtil.fetchTodo(id).then(
      todo => dispatch(receiveTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch({type: TODOS_REQUEST});

    return TodoUtil.fetchTodos().then(
      todos => dispatch(receiveTodos(todos)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const updateTodo = todo => {
  return dispatch => {
    dispatch({ type: UPDATE_TODO_REQUEST });

    return TodoUtil.updateTodo(todo).then(
      todo => dispatch(receiveTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

export const deleteTodo = id => {
  return dispatch => {
    dispatch({type: REMOVE_TODO_REQUEST});

    return TodoUtil.deleteTodo(id).then(
      todo => dispatch(removeTodo(todo)),
      errors => dispatch(receiveTodoErrors(errors))
    );
  };
};

const receiveTodo = todo => ({
  type: TODO_SUCCESS,
  todo
});

const receiveTodos = todos => ({
  type: TODOS_SUCCESS,
  todos
});

const removeTodo = todo => ({
  type: REMOVE_TODO_SUCCESS,
  todo
});

const receiveTodoErrors = errors => ({
  type: TODO_FAILURE,
  errors
});

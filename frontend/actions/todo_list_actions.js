import * as TodoListUtil from "../util/todo_list_util";
export const TODO_LIST_SUCCESS = "TODO_LIST_SUCCESS";
export const TODO_LIST_REQUEST = "TODO_LIST_REQUEST";
export const TODO_LISTS_REQUEST = "TODO_LISTS_REQUEST";
export const TODO_LISTS_SUCCESS = "TODO_LISTS_SUCCESS";
export const CREATE_TODO_LIST_REQUEST = "CREATE_TODO_LIST_REQUEST";
export const UPDATE_TODO_LIST_REQUEST = "UPDATE_TODO_LIST_REQUEST";
export const REMOVE_TODO_LIST_REQUEST = "REMOVE_TODO_LIST_REQUEST";
export const TODO_LIST_FAILURE = "TODO_LIST_FAILURE";
export const REMOVE_TODO_LIST_SUCCESS = "REMOVE_TODO_LIST_SUCCESS";
export const CLEAR_TODO_LIST_ERRORS = "CLEAR_TODO_ERRORS";

export const createTodoList = todoList => {
  return dispatch => {
    dispatch({ type: CREATE_TODO_LIST_REQUEST });

    return TodoListUtil.createTodoList(todoList).then(
      todoList => dispatch(receiveTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const fetchTodoList = id => {
  return dispatch => {
    dispatch({ type: TODO_LIST_REQUEST });

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

export const updateTodoList = (todoList) => {
  return dispatch => {
    dispatch({ type: UPDATE_TODO_LIST_REQUEST });

    return TodoListUtil.updateTodoList(todoList).then(
      todoList => dispatch(receiveTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const deleteTodoList = todoList => {
  return dispatch => {
    dispatch({ type: REMOVE_TODO_LIST_REQUEST });

    return TodoListUtil.deleteTodoList(todoList).then(
      todoList => dispatch(removeTodoList(todoList)),
      errors => dispatch(receiveTodoListErrors(errors))
    );
  };
};

export const receiveTodoList = ({ todoList, todos }) => ({
  type: TODO_LIST_SUCCESS,
  todoList,
  todos
});

const receiveTodoLists = ({ todoLists, todos }) => ({
  type: TODO_LISTS_SUCCESS,
  todoLists,
  todos
});

const removeTodoList = todoList => ({
  type: REMOVE_TODO_LIST_SUCCESS,
  todoList
});

export const receiveTodoListErrors = errors => ({
  type: TODO_LIST_FAILURE,
  errors
});

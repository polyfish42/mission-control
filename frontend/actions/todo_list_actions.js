import * as TodoListUtil from '../util/todo_list_util';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const RECEIVE_TODO_LISTS = 'RECEIVE_TODO_LISTS';
export const REMOMVE_TODO_LIST = 'REMOMVE_TODO_LIST';

export const createTodoList = (todo_list) => {
  return (dispatch) => {
    return TodoListUtil.createTodoList(todo_list).then(
      (todo_list) => dispatch(receiveTodoList(todo_list))
    );
  };
};

const receivTodoList = (todo_list) => ({
  type: RECEIVE_TODO_LIST,
  todo_list
});

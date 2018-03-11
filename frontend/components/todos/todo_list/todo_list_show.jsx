import React from 'react';
import ToolHeaderEdit from '../../app/tool_header_edit';
import TodoContainer from '../todo/todo_container';
import TodoListTodos from './todo_list_todos';
import { isEmpty } from 'lodash';

class TodoListShow extends React.Component {
  componentWillMount() {
    window.scrollTo(0,0);
    this.props.fetchTodoList(this.props.match.params.todoListId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todoList.id && this.props.todoList.id != nextProps.match.params.todoListId) {
      this.props.fetchTodoList(nextProps.match.params.todoListId);
    }
  }

  render () {
    const { todoList } = this.props;

    return (
      <div className="main-content">
        <div className="tool_header">
          <div className="tool_header__edit_wrapper">
            <ToolHeaderEdit editable={ true }/>
          </div>
        </div>
        <div className="main-content__inner">
            <h1 className="todoListItem__name">
              { todoList.name }
            </h1>
            {
              todoList.description &&
              <div className="todoListItem__description todoListItem__description--show">
                { todoList.description }
              </div>
            }
            {
              !isEmpty(todoList) &&
              <TodoListTodos todoList={todoList} />
            }
        </div>
      </div>
    );
  }
}

export default TodoListShow;

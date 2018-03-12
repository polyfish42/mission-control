import React from 'react';
import ToolHeaderEdit from '../../app/tool_header_edit';
import TodoContainer from '../todo/todo_container';
import TodoListTodos from './todo_list_todos';
import { isEmpty } from 'lodash';
import EditTodoListFormContainer from './edit_todo_list_form_container';

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

  description(todoList) {
    if (todoList.description) {
      return (<div className="todoListItem__description todoListItem__description--show">
        { todoList.description }
      </div>)
    }
  }

  render () {
    const { todoList } = this.props;

    return (
      <div className="main-content">
        <div className="tool_header">
          <div className="tool_header__edit_wrapper">
            <ToolHeaderEdit
              editable={ true }
              editAction={this.props.showEditTodoListForm}/>
          </div>
        </div>
        <div className="main-content__inner">
          <div className="todoListItem__container">
            {
              this.props.formShowing === false &&
              <div>
                <h1 className="todoListItem__name">
                  { todoList.name }
                </h1>
                <div>
                  {
                    this.description(todoList)
                  }
                </div>
              </div>
            }

            <EditTodoListFormContainer todoList={ todoList }/>
            {
              !isEmpty(todoList) &&
              <TodoListTodos todoList={todoList} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListShow;

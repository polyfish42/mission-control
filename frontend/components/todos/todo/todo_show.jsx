import React from 'react';
import EditTodoFormContainer from './edit_todo_form_container';
import ToolHeaderEdit from '../../app/tool_header_edit';
import CommentsContainer from '../../comments/comments_container';

class TodoShow extends React.Component {
  componentWillMount() {
    window.scrollTo(0,0);
    this.props.fetchTodo(this.props.match.params.todoId);
  }

  render () {
    return (
      <div className="main-content">
        <div className="tool_header">
          <div className="tool_header__edit_wrapper">
            <ToolHeaderEdit
              editable={ true }
              editAction={this.props.editAction}
              deleteAction={this.props.deleteAction}/>
          </div>
        </div>
        <div className="main-content__inner">
          <EditTodoFormContainer id={this.props.match.params.todoId}/>
        </div>
        <CommentsContainer idName="todo_id" id={this.props.match.params.todoId}/>
      </div>
    )
  }
}

export default TodoShow;

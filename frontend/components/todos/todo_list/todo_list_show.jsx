import React from 'react';
import TodoContainer from '../todo/todo_container';

class TodoListShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTodoList(this.props.match.params.todoListId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todoList.id && this.props.todoList.id != nextProps.match.params.todoListId) {
      this.props.fetchTodoList(nextProps.match.params.todoListId);
    }
  }

  render () {
    return (
      <div>
        <div className="main-content">
          <h1 className="main-content__h1">{ this.props.todoList.name }</h1>
          {
            this.props.todoList.todos && this.props.todoList.todos.map((todo, key) => {
              return <TodoContainer todo={todo} key={key} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default TodoListShow;

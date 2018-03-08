import React from 'react';
import TodoListItem from './todo_list_item';

class TodoListIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTodoLists();
  }

  render () {
    return (
      <div className="main-content">
        <h1 className="main-content__h1">To-dos</h1>
        <div className="todoListIndex">
          {
            this.props.todoLists && this.props.todoLists.map((todoList, key) => {
              return <TodoListItem todoList={todoList} key={key} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default TodoListIndex;

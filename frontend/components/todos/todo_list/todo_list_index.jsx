import React from "react";
import ToolHeader from "../../app/tool_header";
import TodoListItem from "./todo_list_item";
import CreateTodoListFormContainer from "./create_todo_list_form_container";

class TodoListIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTodoLists();
  }

  render() {
    return (
      <div className="main-content">
        <ToolHeader
          title="To-dos"
          buttonText="New list"
          buttonAction={this.props.showCreateTodoListForm}
        />
        <div className="todoListIndex">
          <CreateTodoListFormContainer />
          {this.props.todoLists &&
            this.props.todoLists.reverse().map((todoList, key) => {
              return <TodoListItem todoList={todoList} key={key} />;
            })}
        </div>
      </div>
    );
  }
}

export default TodoListIndex;

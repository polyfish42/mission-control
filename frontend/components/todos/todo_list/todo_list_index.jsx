import React from "react";
import ToolHeader from "../../app/tool_header";
import TodoListItem from "./todo_list_item";
import CreateTodoListFormContainer from "./create_todo_list_form_container";
class TodoListIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTodoLists();
  }
  // <h1 className="main-content__h1">To-dos</h1>

  render() {
    return (
      <div className="main-content">
        <ToolHeader
          title="To-dos"
          buttonText="New list"
          buttonAction={() => console.log("fix me")}
        />
        <CreateTodoListFormContainer />
        <div className="todoListIndex">
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

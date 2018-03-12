import React from "react";
import update from "immutability-helper";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
    this.checkedClass = this.checkedClass.bind(this);
  }

  check() {
    let isDone = this.props.todo.done === true ? false : true;
    let newTodo = update(this.props.todo, {
      done: { $set: isDone }
    });
    this.props.updateTodo(newTodo);
  }

  checkedClass(className) {
    return (
      className +
      (this.props.todo.done === true ? ` ${className}--checked` : "")
    );
  }

  render() {
    return (
      <div className="todo">
        <li className={this.checkedClass("todo__text")}>
          <span
            className={this.checkedClass("todo__checkbox")}
            onClick={this.check}
          />
        <Link to={`/todolists/${this.props.todo.todoListId}/todos/${this.props.todo.id}`} className={this.checkedClass("todo__text_link")}>
            {this.props.todo.name}
          </Link>
        </li>
      </div>
    );
  }
}

export default Todo;

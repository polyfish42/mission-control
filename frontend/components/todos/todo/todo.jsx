import React from "react";
import TruncateText from "../../utils/truncate_text";
import update from "immutability-helper";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
  }

  check() {
    let isDone = this.props.todo.done === true ? false : true;
    let newTodo = update(this.props.todo, {
      done: { $set: isDone }
    });
    this.props.updateTodo(newTodo);
  }

  render() {
    return (
      <div className="todo">
        <li className="todo__text">
          <span
            className={
              "todo__checkbox" +
              (this.props.todo.done === true ? " todo__checkbox--checked" : "")
            }
            onClick={this.check}
          />
          <Link to="#" className="todo__text_link">
            {this.props.todo.name}
          </Link>
        </li>
      </div>
    );
  }
}

export default Todo;

import React from "react";
import TruncateText from "../../utils/truncate_text";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, todo: this.props.todo };

    this.check = this.check.bind(this);
  }

  check() {
    const checked = this.state.checked === true ? false : true;
    const newTodo = merge({}, this.state.todo);
    newTodo.done = true;
    debugger;
    this.setState({ checked: true, todo: newTodo });
    this.props.updateTodo(this.state.todo);
  }

  render() {
    return (
      <div className="todo">
        <li className="todo__text">
          <span
            className={
              "todo__checkbox" +
              (this.state.checked ? " todo__checkbox--checked" : "")
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

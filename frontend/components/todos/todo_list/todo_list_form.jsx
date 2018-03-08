import React from "react";

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.todoList;
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form onSubmit={() => this.props.handleSubmit(this.state)}>
        <input onChange={this.handleInput("name")} value={this.state.name} />
        <input
          onChange={this.handleInput("description")}
          value={this.state.description}
        />
        <button type="submit">Add this list</button>
        <button>Cancel</button>
      </form>
    );
  }
}

export default TodoListForm;

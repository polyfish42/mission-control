import React from "react";

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.todoList.name,
      description: props.todoList.description,
      formShowing: false
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.closeForm = this.closeForm.bind(this);
  this.submitButton = this.submitButton.bind(this);
  this.errors = this.errors.bind(this);
}

componentDidUpdate(prevProps, prevState) {
  if (this.nameInput && this.state.formShowing === false) {
    this.nameInput.focus();
    this.setState({
      formShowing: true
    });
  }
}

componentWillUpdate(nextProps) {
  if (this.props.submitting === true && nextProps.submitting === false) {
    this.setState({
      errors: [],
      name: "",
      description: ""
    });
  }
}

componentWillUnmount() {
  this.closeForm();
}

handleInput(field) {
  return e => {
    this.setState({
      [field]: e.target.value
    });
  };
}

handleSubmit(e) {
  e.preventDefault();
  if (this.state.name === "") {
    this.setState({
      errors: ["Name can't be blank"]
    });
  } else {
    this.props.handleSubmit(this.state);
  }
}

closeForm() {
  this.setState({
    errors: [],
    formShowing: false
  });
  this.props.close();
}

submitButton () {
  switch (this.props.submitting) {
    case true:
      return (
          <button
                  className="button button--green button--saving todosForm__button"
                  disabled
                  type="button"
                  >
                Saving...
          </button>);

    default:
      return (<button
                className="button button--green todosForm__button"
                onClick={this.handleSubmit}
                type="submit"
                >
                Add this list
              </button>);

  }
}

errors() {
  return this.state.errors.map((error, key) => {
    return (
      <li key = {key} className = "session__error" >
        {error}
      </li>
    );
  });
}
  render() {
    if (this.props.showing === false) {
      return null;
    }

    return (
      <form className="todosForm">
        <input
          className="todosForm__input todosForm__input--name"
          placeholder="Name this list..."
          onChange={this.handleInput("name")}
          value={this.state.name}
          ref={input => {
            this.nameInput = input;
          }}
        />
        <textarea
          className="todosForm__input todosForm__input--description"
          placeholder="Add extra details..."
          onChange={this.handleInput("description")}
          value={this.state.description}
        />
        <ul>{this.state.errors && this.errors()}</ul>
        <div className="todosForm__buttons">
          { this.submitButton() }
          <button
            onClick={this.closeForm}
            className="button button--clearGreen todosForm__button"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default TodoListForm;

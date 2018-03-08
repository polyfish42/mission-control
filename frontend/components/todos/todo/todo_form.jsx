import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formShowing: false };

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  toggleForm() {
    const showing = this.state.formShowing ? false : true;
    this.setState({ formShowing: showing });
  }

  render() {
    const { formShowing } = this.state;

    if (formShowing === false) {
      return (
        <button
          onClick={this.toggleForm}
          className="button button--clearWhite createTodo__open_button"
        >
          Add a to-do
        </button>
      );
    }

    return (
      <form className="todosForm">
        <input
          className="todosForm__input todosForm__input--name"
          placeholder="Describe this to-do..."
          ref={input => {
            this.nameInput = input;
          }}
        />
        <textarea
          className="todosForm__input todosForm__input--description"
          placeholder="Add extra details..."
        />
        <div className="todosForm__buttons">
          <button
            className="button button--green todosForm__button"
            type="submit"
            onClick={this.toggleForm}
          >
            Add this to-do
          </button>
          <button
            className="button button--clearGreen todosForm__button"
            type="button"
            onClick={this.toggleForm}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;

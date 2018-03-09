import React from "react";
import update from "immutability-helper";
import { merge } from "lodash";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      todo: this.props.todo,
      formShowed: false,
      formSubmitting: false
    };

    this.handleEsc = this.handleEsc.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleEsc, false);
  }

  componentWillUnmount(nextProps, nextState) {
    document.removeEventListener("keydown", this.handleEsc, false);
  }

  handleEsc (e) {
    if (e.keyCode === 27) {
      this.setState({
        formShowing: false
      });
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.submitting === true && nextProps.submitting === false) {
      this.setState({
        todo: {
          name: "",
          description: ""
        },
        formShowed: false,
        formSubmitting: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.nameInput && this.state.formShowed === false) {
      this.nameInput.focus();
      this.setState({ formShowed: true });
    }
  }

  handleInput(field) {
    const that = this;
    return e => {
      let newState = update(this.state, {
        todo: { [field]: { $set: e.target.value } }
      });
      this.setState(newState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo.name === "") {
      this.setState({ errors: ["Name can't be blank"] });
    } else {
      const newState = update(this.state.todo, {
        todo_list_id: { $set: this.props.todoListId }
      });
      this.props.handleSubmit(newState);
      this.setState({
        formSubmitting: true
      });
    }
  }

  toggleForm() {
    const oppositeShowing = this.state.formShowing ? false : true;
    this.setState({
      formShowing: oppositeShowing,
      formShowed: this.state.formShowing
    });
  }

  submitButton () {
    switch (this.state.formSubmitting) {
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
                  Add this to-do
                </button>);

    }
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
      <form className="todosForm todosForm--createTodo">
        { this.state.errors }
        <div className="todosForm__checkbox_wrapper">
          <span className={"todosForm__checkbox todo__checkbox"} />
        </div>
        <input
          className="todosForm__input todosForm__input--name"
          placeholder="Describe this to-do..."
          onChange={this.handleInput("name")}
          value={this.state.todo.name}
          ref={input => {
            this.nameInput = input;
          }}
        />
        <textarea
          className="todosForm__input todosForm__input--description"
          placeholder="Add extra details..."
          onChange={this.handleInput("description")}
          value={this.state.todo.description}
        />
        <div className="todosForm__buttons">
          { this.submitButton() }
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

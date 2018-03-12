import React from "react";
import update from "immutability-helper";
import CreateTodoAssigneeInput from "./create_todo_assignee_input_container";
import TodoCheck from "./todo_check";
import { merge } from "lodash";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formShowing: false,
      todo: this.props.todo,
      assignees: props.assignees,
      formShowed: false,
      formSubmitting: false
    };

    this.handleEsc = this.handleEsc.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.assignTodo = this.assignTodo.bind(this);
    this.backspaceAssignee = this.backspaceAssignee.bind(this);
    this.cancelAssignee = this.cancelAssignee.bind(this);
    this.classSuffix = this.classSuffix.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleEsc, false);
  }

  componentWillUnmount(nextProps, nextState) {
    document.removeEventListener("keydown", this.handleEsc, false);
    this.props.close();
  }

  handleEsc (e) {
    if (e.keyCode === 27) {
      this.setState({
        formShowing: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.submitting && !nextProps.submitting) {
      this.setState({todo: nextProps.todo, assignees: nextProps.assignees})
    }

    if (nextProps.showing === true) {
      this.setState({formShowing: true})
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.submitting === true && nextProps.submitting === false) {
      let todo = this.props.formType === "create" ? ({
        name: "",
        assignees: [],
        description: ""
      }) : (
        nextProps.todo
      )

      if (this.props.formType === "edit") {
        this.setState({formShowing: false})
      }

      this.setState({
        todo: todo,
        formShowed: false,
        formSubmitting: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.nameInput && this.state.formShowed === false) {
      if (this.props.formType === "create") {
        this.nameInput.focus();
      }
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
        todo_list_id: { $set: this.props.todoListId },
        assignments: { $set: this.state.assignees.map(a => parseInt(a.id))}
      });
      this.props.handleSubmit(newState);
      this.setState({
        formSubmitting: true,
        errors: []
      });
    }
  }

  assignTodo(assignee) {
    let newState = update(this.state, {
      assignees: { $push: [assignee] }
    });
    this.setState(newState);
  }

  backspaceAssignee() {
    let newState = update(this.state, {
      assignees: { $apply: as => as.slice(0, as.length - 1) }
    });
    this.setState(newState);
  }

  cancelAssignee(assignee) {
    let assignees = merge([], this.state.assignees)
    let remainingAssignees = assignees.filter(a => a.id !== assignee.id)

    let newState = update(this.state, {
      assignees: { $set: remainingAssignees }
    })
    this.setState(newState)
  }

  toggleForm() {
    const oppositeShowing = this.state.formShowing ? false : true;

    this.setState({
      formShowing: oppositeShowing,
      formShowed: this.state.formShowing,
      errors: []
    });

    if (this.props.formType === "edit") {
      this.setState({ todo: this.props.todo, assignees: this.props.assignees })
    }
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
        </button>
      );

      default:
      return (
        <button
          className="button button--green todosForm__button"
          onClick={this.handleSubmit}
          type="submit"
          >
          {this.props.formType === "create" ? "Add this to-do" : "Save changes"}
        </button>
      );

    }
  }

  errors() {
    return this.state.errors.map((error, key) => {
      return (
        <li key={key} className="error">
          {error}
        </li>
      );
    });
  }

  classSuffix(className) {
    switch (this.props.formType) {
      case "create":
        return " " + className + " " + className + "--createTodo";
        break
      default:
        if (this.state.formShowing === true) {
          return " " + className + " " + className + "--editTodo"
        } else {
          return " " + className + " " + className + "--showTodo";
        }
    }
  }

  todoCheck() {
    switch (this.props.formType) {
      case "create":
      return <span className={"todosForm__checkbox todo__checkbox"} />
        break;
      default:
        return (<TodoCheck todo={this.state.todo}
                          handleSubmit={this.props.handleSubmit}
                          sizeClass={" todo__checkbox--large"}
                          formShowing={this.state.formShowing}
                          assignees={this.state.assignees}/>);
    }
  }

  render() {
    if (this.props.todo.name === "" && this.props.formType === "edit") {
      return null
    }

    const { formShowing } = this.state;

    if (formShowing === false && this.props.formType === "create") {
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
      <form className={"todosForm" + this.classSuffix("todosForm")}>
        <div className="todosForm__checkbox_wrapper">
          { this.todoCheck() }
        </div>
        <input
          onClick={ () => this.setState({formShowing: true})}
          className={"todosForm__input" + this.classSuffix("todosForm__input--name")}
          placeholder="Describe this to-do..."
          onChange={this.handleInput("name")}
          value={this.state.todo.name}
          ref={input => {
            this.nameInput = input;
          }}
          />
        <div className="todosForm__input-with-label--no-padding todosForm__input-with-label">
          <label className={"todosForm__label--with-margin" + this.classSuffix("todosForm__label")}>
            Assigned to
          </label>
          <CreateTodoAssigneeInput
            showForm={ () => this.setState({formShowing: true})}
            formType={this.props.formType}
            formShowed={this.state.formShowed}
            formShowing={this.state.formShowing}
            formSubmitting={this.state.formSubmitting}
            assignTodo={this.assignTodo}
            backspaceAssignee={this.backspaceAssignee}
            cancelAssignee={this.cancelAssignee}
            assignees={this.state.assignees}
            assigneeInput={this.props.assigneeInput}
            />
        </div>
        <div className="todosForm__input-with-label">
          <label className={this.classSuffix("todosForm__label")}>Notes</label>
          <input
            onClick={ () => this.setState({formShowing: true})}
            className="todosForm__input todosForm__input--description"
            placeholder="Add extra details..."
            onChange={this.handleInput("description")}
            value={this.state.todo.description}
            />
        </div>
        {this.state.errors && this.errors()}
        <div>
          {
            this.state.formShowing &&
            <div className="todosForm__buttons">
              { this.submitButton() }
              <button
                className="button button--clearGreen todosForm__button"
                type="button"
                onClick={this.toggleForm}
                >
                {this.props.formType === "create" ? "Cancel" : "Discard changes"}
              </button>
            </div>
          }
        </div>
      </form>
    );
  }
}

export default TodoForm;

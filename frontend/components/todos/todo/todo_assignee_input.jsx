import React from 'react';
import Fuse from 'fuse.js';
import TodoAssignee from './todo_assignee';

class TodoAssigneeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigneeInput: this.props.assigneeInput,
      results: []
    };

    this.initializeFuse = this.initializeFuse.bind(this);
    this.assignTodo = this.assignTodo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.unassigned = this.unassigned.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formShowed === false && nextProps.formShowed === true) {
      this.props.searchUsers();
    }

    if (this.state.fuse == null && nextProps.users.length > 0) {
      this.initializeFuse(nextProps.users);
    }
  }

  initializeFuse(users) {
    const options = {
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 15,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name"]
    };

    this.setState({ fuse: new Fuse(users, options)});
  }

  handleInput(field) {
    return e => {
      const input = e.target.value;
      this.setState({[field]: input, results: this.state.fuse.search(input)});
    };
  }

  searchResultsClass() {
    return "todo-assignment__search-results" +
    (this.state.results.length > 1 ? " todo-assignment__search-results--open" : "");
  }

  assignTodo(e, assignee) {
    e.preventDefault();
    this.props.assignTodo(assignee);
    this.setState({assigneeInput: "", results: []})
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 13:
        if (this.unassigned().length > 0) {
          this.assignTodo(e, this.unassigned()[0])
        }
        break;
      case 8:
        this.props.backspaceAssignee();
        break;
      default:
        undefined
      }
  }

  assignTodoOnClick(e, result) {
    this.assignTodo(e, result)
  }

  unassigned() {
    return this.state.results.filter(r => !this.props.assignees.includes(r))
  }

  render () {
    return (
      <div className="todo-assignment">
        <div className="todo-assignment__flex-wrapper">
          {
            this.props.assignees.map((assignee, key) => {
              return <TodoAssignee
                key={key}
                assignee={assignee}
                cancelAssignee={this.props.cancelAssignee}/>
            })
          }
          <input
            className="todosForm__input todosForm__input--assignee"
            placeholder="Type names to assign..."
            onChange={this.handleInput("assigneeInput")}
            onKeyDown={ this.handleKeyDown }
            value={this.state.assigneeInput}
            />
        </div>
        <ul className={ this.searchResultsClass() }>
          {
            this.unassigned().slice(0,8).map((result, key) => {
              return <li
                key={key}
                className="todo-assignment__search-item"
                onClick={(e) => this.assignTodoOnClick(e, result)}>
                { result.name }
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoAssigneeInput;

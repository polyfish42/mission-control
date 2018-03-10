import React from 'react';
import Fuse from 'fuse.js';

class TodoAssigneeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignee: this.props.assignee,
      results: []
    };

    this.initializeFuse = this.initializeFuse.bind(this);
    this.assignTodo = this.assignTodo.bind(this);
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
      threshold: 0.6,
      location: 0,
      distance: 100,
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

  assignTodo(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.assignTodo(this.state.results[0]);
    }
  }

  render () {
    return (
      <div className="todo-assignment">
        <input
          className="todosForm__input todosForm__input--description"
          placeholder="Type names to assign..."
          onChange={this.handleInput("assignee")}
          onKeyDown={ this.assignTodo }
          value={this.state.assignee}
        />
      <ul className={ this.searchResultsClass() }>
          {
            this.state.results.map((result, key) => {
              return <li key={key} className="todo-assignment__search-item">{ result.name }</li>;
            })
          }
        </ul>
      </div>
  );
  }
}

export default TodoAssigneeInput;

import React from 'react';
import Fuse from 'fuse.js';
import Person from './person';
import update from 'immutability-helper';

class PersonPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      results: [],
      fuse: null,
      fetching: false
    };

    this.initializeFuse = this.initializeFuse.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.pickPerson = this.pickPerson.bind(this);
    this.withNewPerson = this.withNewPerson.bind(this);
    this.removeLastPerson = this.removeLastPerson.bind(this);
    this.withoutLastPerson = this.withoutLastPerson.bind(this);
    this.notPicked = this.notPicked.bind(this);
  }

  componentWillMount() {
    this.props.searchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.fuse == null && nextProps.users.length > 0) {
      this.initializeFuse(nextProps.users);
    }

    if (nextProps.fetching === true) {
      this.setState({ textInput: "", results: []})
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

  pickPerson(person) {
    this.props.update(this.withNewPerson(person))
    this.setState({textInput: "", results: []})
  }

  withNewPerson (person) {
    return update(this.props.people, {$push: [person]});
  }

  removeLastPerson() {
    this.props.update(this.withoutLastPerson());
  }

  withoutLastPerson() {
    return update(this.props.people, {$apply: p => p.slice(0, p.length - 1)})
  }

  notPicked() {
    return this.state.results.filter(r => !this.props.people.map(i => i.id).includes(r.id))
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 13:
      e.preventDefault()
        if (this.notPicked().length > 0) {
          const person = this.notPicked()[0]
          this.pickPerson(person)
        }
        break;
      case 8:
        this.state.textInput === "" ? this.removeLastPerson() : undefined
        break;
      default:
        undefined
    }
  }

  searchResultsClass() {
    return "todo-assignment__search-results" +
    (this.state.results.length > 1 ? " todo-assignment__search-results--open" : "");
  }

  render () {
    return (
      <div className="todo-assignment">
        <div className={"todo-assignment__flex-wrapper" + (true ? " todo-assignment__flex-wrapper--editTodo" : "")}>
          {
            this.props.people.map((person, key) => {
              return <Person
                key={key}
                person={person}
                clickable={!this.props.fetching}
                removeLastPerson={this.removeLastPerson}/>
            })
          }
          <input
            className="todosForm__input todosForm__input--assignee"
            placeholder="Type names here..."
            onChange={this.handleInput("textInput")}
            onKeyDown={this.handleKeyDown}
            value={this.state.textInput}
            />
        </div>
        <ul className={ this.searchResultsClass() }>
          {
            this.notPicked().slice(0,8).map((person, key) => {
              return <li
                key={key}
                className="todo-assignment__search-item"
                onClick={() => this.pickPerson(person)}>
                { person.name }
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default PersonPicker;

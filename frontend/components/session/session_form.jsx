import React from "react";
import { dayOfTheWeek, now } from '../schedule/date.js';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  errors() {
    return this.props.errors.map((error, key) => {
      return (
        <li key={key} className="error">
          {error}
        </li>
      );
    });
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  buttonText() {
    return this.props.formType === "Sign up" ? "Sign up" : "Log in";
  }

  render() {
    return (
      <div className="session">
        <Link to="/" ><img className="session__small-logo" src={window.smallLogo} /></Link>
        <div className="session__container">
          <div className="session__text">
            <h2 className="session__h2">{`Happy ${dayOfTheWeek(now())}!`}</h2>
            <p className="session__p">
              Just enter your email address and password and we’ll get you right
              into Basecamp.
            </p>
          </div>
          <form onSubmit={this.handleSubmit} className="session__form">
            <label htmlFor="session_input_1" className="session__label">
              Email address
            </label>
            <input
              onChange={this.handleInput("email")}
              type="text"
              value={this.state.email}
              className="session__input"
              id="session_input_1"
              placeholder="julie@widgetco.com"
            />
            <label htmlFor="session_input_2" className="session__label">
              Password
            </label>
            <input
              onChange={this.handleInput("password")}
              type="password"
              value={this.state.password}
              className="session__input"
              id="session_input_2"
              placeholder="password"
            />
            {this.props.errors && this.errors()}
            <button
              type="submit"
              className="button button--green session__button"
            >
              {this.buttonText()}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;

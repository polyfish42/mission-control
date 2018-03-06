import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {email: "", password: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput("email")} type="text" value={this.state.email} />
        <input onChange={this.handleInput("password")} type="password"  value={this.state.password} />
        <button type="submit">{ this.buttonText() }</button>
      </form>
    );
  }

  handleInput (field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit () {
    this.props.submitAction(this.state);
  }

  buttonText () {
    return this.props.formType === "Sign up" ? "Sign up" : "Log in";
  }
}

export default SessionForm;

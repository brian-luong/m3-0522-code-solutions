import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});

  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label for="username">
            Username
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>

          <label for="password">
            Password
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>

          <button type="submit">
            Sign Up
          </button>
        </form>
    );
  }
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <RegistrationForm />
root.render(element);

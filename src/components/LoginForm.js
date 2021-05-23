import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username != "" && this.state.password != "") {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange(event)} id="username" name="username" type="text" value={this.state.username} required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChange(event)} id="password" name="password" type="password" value={this.state.password} required />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

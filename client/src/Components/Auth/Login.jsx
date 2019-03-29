import React, { Component } from 'react';
import AuthService from './Auth-Service';
import { Redirect } from 'react-router-dom'

import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false,
          redirect: true
        }, () => {
            this.props.manageLogin(response)
        });

       
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true,
          redirect: false
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <div className='logInContainer'>
      {this.state.redirect === true ? <Redirect to ="/home"/> : ''}
      <div className='welcome'>
        <h3>LOGIN</h3>
      </div>
      <div className='form'>
      <form onSubmit={this.handleFormSubmit} >
        <fieldset className='loginFieldSet'>
          <label className='loginLabel'>Email:</label>
          <input className='loginInput' type="text" name="username" placeholder='enter your email' value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset className='loginFieldSet'>
          <label className='loginLabel'>Password:</label>
          <input className='loginInput' type="password" name="password" placeholder='password' value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input className='loginButton'type="submit" value="Submit" />
      </form>
      </div>
      

      <h1>{this.state.error ? 'Error, your email or password is not correct' : ''}</h1>
    </div>)
  }
}

export default Login;
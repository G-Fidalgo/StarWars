import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";


import AuthService from './Components/Auth/Auth-Service';
import Navbar from './Components/NavBar/Navbar';
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import Home from './Components/Home/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  _manageLogin = user => {
    this.setState({ ...this.state, loggedInUser: user });
  };

  _manageLogOut = x => {
    this.setState({ ...this.state, loggedInUser: null });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  }

  render() {
      return (
        <div className="App">
          <Navbar loggedInUser={this.state.loggedInUser} manageLogOut={this._manageLogOut} />
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path="/"
              render={props => (
                <Login {...props} manageLogin={this._manageLogin} />
              )}
            />
            <Route exact path='/home' render={props => (<Home loggedInUser={this.state.loggedInUser} />)} />
          </Switch>
        </div>
      );
  }
}

export default App;



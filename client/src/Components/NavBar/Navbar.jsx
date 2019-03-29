import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../Auth/Auth-Service";

import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       loggedInUser: props.loggedInUser,
      };
    this.service = new AuthService();
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"] });
  }

  handleLogout = e => {
    this.service.logout();
    this.props.manageLogOut(null);
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <div className="logContainer">
            <p >
              <Link to={"/home"}className="nonLogButtons home"> Home</Link>
            </p>

            <p>
              Hi {this.state.loggedInUser.username}
            </p>

            <Link to="/" >
              <button className='logOut' onClick={this.handleLogout}>Logout</button>
            </Link>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <div className="nonLogContainer">
                  <Link className="nonLogButtons" to="/signup">Signup</Link>
                  <Link className="nonLogButtons" to="/">Login</Link>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;

import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import History from '../History/History';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: props.loggedInUser
    };

  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <div>
            <h2>Search for your Star Wars favourite films: </h2>
            <SearchBar /> 
          </div>
          
          <div>
            <h2>Check out the films that you have already searched {this.state.loggedInUser.username}:</h2>
            <History loggedInUser={this.state.loggedInUser} />
          </div>
          
          
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

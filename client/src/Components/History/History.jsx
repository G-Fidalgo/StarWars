import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HistoryService from './History-Service'

export default class History extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInUser: props.loggedInUser,
      history: []
    }
    this.HistoryService = new HistoryService()
  }

  componentDidMount(){
    let user = this.state.loggedInUser._id

    this.HistoryService.gethistory(user)
      .then((data) => {this.setState({...this.state, history: data.reverse()})})
      .catch(err => console.log('an error ocurred while setting state of history'))
  }
  render() {
    if (this.state.history.length === 0){
      return (
        <h1>Your search history is empty, what are you waiting to search for a film?</h1>
      )
    } else {
      return (
        <div>
          <ul>
            {this.state.history.map((link, index) => <li key={index}><Link to={link}>{link}</Link></li>)}
          </ul>
        </div>
      )
    }
  }
}



import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

import FilmCardService from './FilmCard-Service'


export default class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: props.loggedInUser,
      film: []
    }
    this.FilmCardService = new FilmCardService()
  }

  componentDidMount(){
    if (this.state.loggedInUser){
      let path = window.location.pathname
      let id = path.substr(path.length - 1)

      let user = this.state.loggedInUser._id
      let url = window.location.href
    
      this.FilmCardService.getFilmInfo(id)
        .then((data) => {this.setState({...this.state, film: data})})
        .catch(err => console.log('an error ocurred while setting state with info'))

      this.FilmCardService.sendUrl(url, user)
        .then(response => console.log('history sended to Service'))
        .catch(err => console.log('an error ocurred while sending history to service'))
    }
    

  }

  render() {
    if (this.state.loggedInUser) {
      if (this.state.film.length <= 0){
        return <h1>Cargando la información</h1>
      } else {
        return (
          <div>
            <h1>{this.state.film[0].title} Episode {this.state.film[0].episode}</h1>
            <h2>Released: {this.state.film[0].release}</h2>
            <p>Directed by: {this.state.film[0].director}</p>
            <p>{this.state.film[0].opening}</p>
          </div>
        )
      }
      
    } else {
      return <Redirect to="/" />
    }
  }
}

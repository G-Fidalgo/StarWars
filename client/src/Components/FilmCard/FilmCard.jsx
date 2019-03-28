import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

import FilmCardService from './FilmCard-Service'


export default class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: props.loggedInUser,
      redirect: false,
      film: []
    }
    this.FilmCardService = new FilmCardService()
  }

  componentDidMount(){
    let path = window.location.pathname
    let id = path.substr(6 ,1)
    this.FilmCardService.getFilmInfo(id)
      .then((data) => {this.setState({...this.state, film: data})})
      .catch(err => console.log('an error ocurred while setting state with info'))
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

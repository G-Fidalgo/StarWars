import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import History from '../History/History';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: props.loggedInUser, redirect: false };

  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <SearchBar />
          <History loggedInUser={this.state.loggedInUser} />
          <p> Bienvenido aquí se van a cargar los componentes :  </p>
          <ul>
            <li>Barra de búsqueda de películas</li>
            <li>Slider con los personajes de StarWars</li>
            <li>Lista de las páginas visitas por el ususario</li>
          </ul>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

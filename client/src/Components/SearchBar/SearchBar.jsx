import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import SearchBarService from './SearchBar-Service'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      suggestions: [],
      text: '',
    }
    this.SearchBarService = new SearchBarService()
    
    
  }

  componentDidMount(){
    this.SearchBarService.getFilms()
        .then( (data) => {this.setState({...this.state, films: data})})
        .catch( err => console.log('an error ocurred while setting state with the films'))
  }


  onTextChanged = (e) => {
    const value = e.target.value 
    let suggestions = []
    if (value.length > 0){
      this.state.films.map((film) => {
        if (film.tittle.toLowerCase().indexOf(value.toLowerCase()) >= 0){
          return suggestions.push(film)
        } else return console.log()
      })
    }
    this.setState({...this.state, suggestions, text: value})
  }
  

  renderSuggestions (){
    if(this.state.suggestions.length === 0){
      return null
    }
    return (
      <ul>
        {this.state.suggestions.map((suggestion, idx)=> <li key={idx}><Link to={`/film/${suggestion.id}`}>{suggestion.tittle}</Link></li>)}
      </ul>
    )
  }

  render() {
    if (this.state.films.length <= 0){
      return (
        <h1>Loading</h1>
      )
    } else {
      return (
        <div>
          <input  value={this.state.text} type='text' onChange={this.onTextChanged} />
            {this.renderSuggestions()}
        </div>
      )
    }
    
  }
}

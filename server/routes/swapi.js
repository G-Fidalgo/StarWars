const express = require("express")
const swapiRoutes = express.Router()
const request = require('request-promise');


swapiRoutes.get('/films', (req, res, next) =>{
  let url = 'https://swapi.co/api/films/'

  let options = {
    method: 'GET',
    uri: url,
    json: true
  }

  request(options)
    .then((parsedBody) => {
      
      let parsedBodyMapped = parsedBody.results.map((film) => {
        return {
          tittle: film.title,
          id: film.url.substr(27, 1)
        }
      })
      res.json(parsedBodyMapped)
    })
})

swapiRoutes.get('/films/:id' , (req, res, next) => {
  let id = req.params.id
  let url = `https://swapi.co/api/films/${id}`
  
  let options = {
    method: 'GET',
    uri: url,
    json: true
  }

  request(options)
    .then((parsedBody) => {
      // console.log('entro a pedir')
      // res.json(parsedBody)
      film = {
        title: parsedBody.title,
        episode: parsedBody.episode_id,
        director: parsedBody.director,
        release: parsedBody.release_date,
        opening: parsedBody.opening_crawl
      }
      res.json(film)
    })
    .catch(err => console.log('an error ocurred while getting the film info'))

})



swapiRoutes.post('/film/:id', (req, res, next) => {
  const id = req.id
})

module.exports = swapiRoutes
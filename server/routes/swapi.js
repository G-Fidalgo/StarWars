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
          id: film.episode_id
        }
      })
      res.json(parsedBodyMapped)
    })
    console.log('entro al back y  pido las pelis')
})

module.exports = swapiRoutes
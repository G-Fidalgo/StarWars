import axios from 'axios';

class FilmCardService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
    this.service = service;
  }

  getFilmInfo = (id) => {
    return this.service.get(`/swapi/films/${id}`)
      .then((data) => {
        return [data.data]
      })
  }

  sendUrl = (url, user_id) => {
    return this.service.post('/swapi/history', {url, user_id})
    .then(response => response.data)
  }
}

export default FilmCardService
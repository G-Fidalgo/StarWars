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

  // sendUrl = (id) => {
  //   return this.service.post()
  // }
}

export default FilmCardService
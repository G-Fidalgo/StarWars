import axios from 'axios';

class SearchBarService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
    this.service = service;
  }

  getFilms = () => {
    return this.service.get('/swapi/films')
      .then((data) => {
        return data.data
       
      })
  }
}

export default SearchBarService
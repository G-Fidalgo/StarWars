import axios from 'axios'

class HistoryService {
  constructor(){
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    })
    this.service = service
  }

  gethistory = (user) =>{
    return this.service.get(`/swapi/history/${user}`)
      .then((data) => {
        return data.data
      })
  }
}

export default HistoryService
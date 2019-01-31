import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/students'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


export default {
  getAll
}
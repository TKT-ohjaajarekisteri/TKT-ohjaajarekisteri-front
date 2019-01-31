import axios from 'axios'
import url from './config'

const baseUrl = url + '/api/students'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// const create = async (student) => {
//   const response = await axios.post('http://localhost:3004/', student)
//   return response.data
// }

export default {
  getAll
  //, create
}

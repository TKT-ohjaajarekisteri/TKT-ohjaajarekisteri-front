import axios from 'axios'

const baseUrl = 'http://localhost:3001/students'
//const baseUrl = 'http://localhost:3001/api/students'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (student) => {
  const response = await axios.post(baseUrl, student)
  return response.data
}
export default {
  getAll, create
}

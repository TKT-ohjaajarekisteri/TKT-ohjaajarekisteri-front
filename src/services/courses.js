import axios from 'axios'

const baseUrl = 'http://localhost:3001/courses'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (course) => {
  const newObject = {
    course
  }
  const response = await axios.post(baseUrl, newObject)
  return response.data
}
export default {
  getAll, create
}

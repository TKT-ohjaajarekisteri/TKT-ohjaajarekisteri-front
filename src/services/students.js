import axios from 'axios'

const baseUrl = 'http://localhost:3001/students'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (student,data) => {
  const newObject = {
    student,
    course:data,

  }
  const response = await axios.post(baseUrl, newObject)
  return response.data
}
export default {
  getAll, create
}

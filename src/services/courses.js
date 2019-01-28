import axios from 'axios'

const baseUrl = 'http://localhost:3004/api/courses/'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (course) => {
  const response = await axios.post('http://localhost:3004/api/students', course)
  return response.data
}

//get students for specific course
const getStudents = async (id) => {
  const response = await axios.get(`http://localhost:3004/api/courses/${id}/students`)
  return response.data
}


export default {
  getAll, getStudents, create
}
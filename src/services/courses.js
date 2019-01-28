import axios from 'axios'

//const baseUrl = 'http://localhost:3001/courses/'
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
const getStudents = async () => {
  //const response = await axios.get('http://localhost:3003/api/courses/:{id}/students')
  const response = await axios.get('http://localhost:3001/students')
  return response.data
}


export default {
  getAll, getStudents, create
}
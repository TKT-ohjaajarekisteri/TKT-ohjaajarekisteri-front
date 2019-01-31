import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/courses/'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (course) => {
  const response = await axios.post(url + 'api/students', course)
  return response.data
}

//get students for specific course
const getStudents = async (id) => {
  const response = await axios.get(url + 'api/courses/${id}/students')
  return response.data
}


export default {
  getAll, getStudents, create
}
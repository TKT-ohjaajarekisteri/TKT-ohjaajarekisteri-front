import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/courses/'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('token asetettu', token)
}

const getAll = async () => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}


//creates sudent and course information if token right
const create = async (content) => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.post(url + 'api/students', content, config)
  return response.data
}


//get students for specific course
const getStudents = async (id) => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.get(url + `api/courses/${id}/students`, config)
  return response.data
}


export default {
  getAll, getStudents, create, setToken
}

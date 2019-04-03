import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/courses/'

let token = null

const setToken = (newToken) => {

  token = `bearer ${newToken}`
  // console.log('token asetettu', token)
}

const getConfig = () => {
  return {
    headers: { 'Authorization': token }
  }
}

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl, getConfig())
    return response.data
  } catch (error) {
    // return error message
  }
}

const getOne = async (id) => {
  try {
    const response = await axios.get(baseUrl + id, getConfig())
    return response.data
  } catch (error) {
    // return error message
  }
}


//creates student and course information if token right
const create = async (content) => {
  const response = await axios.post(url + 'api/students', content, getConfig())
  return response.data
}


//get students for specific course
const getStudents = async (id) => {
  const response = await axios.get(url + `api/courses/${id}/students`, getConfig())
  return response.data
}

//get students for all courses
const getSummary = async () => {
  console.log('courses servicen getSummary metodi')
  try {
    const response = await axios.get(url + 'api/courses/students/summary', getConfig())
    console.log('courses servicen response________________________',response)
    return response.data
  } catch (error) {
    console.log('error')
  }
}




export default { getAll, getOne, getStudents, create, setToken, getSummary }
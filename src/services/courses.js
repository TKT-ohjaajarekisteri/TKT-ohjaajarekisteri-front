import axios from 'axios'
import url from './config'
const baseUrl = url + 'api/courses/'
let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
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
    return { error: 'Could not get courses from db' }
  }
}

const getOne = async (id) => {
  try {
    const response = await axios.get(baseUrl + id, getConfig())
    return response.data
  } catch (error) {
    return { error: 'Could not get the course from db' }
  }
}

// get students for specific course
const getStudents = async (id) => {
  try {
    const response = await axios.get(baseUrl + `${id}/students`, getConfig())
    return response.data
  } catch (error) {
    return { error: 'Could not get students for this course' }
  }
}

// send list of modified student application values for a specific course
const sendAcceptedModified = async (course_id, content) => {
  try {
    const response = await axios.post(baseUrl + `${course_id}/students`, content, getConfig())
    return response.data
  } catch (error) {
    return { error: 'Something went wrong' }

  }
}

//get students for all courses
const getSummary = async () => {
  try {
    const response = await axios.get(baseUrl + 'summary', getConfig())
    return response.data
  } catch (error) {
    return { error: 'coudnt not get courses and students from db!' }
  }
}

const hideCourse = async (course_id) => {
  try {
    const response = await axios.put(baseUrl + `${course_id}/hide`, {}, getConfig())
    return response.data
  } catch (error) {
    return { error: 'Could not hide course' }
  }
}

export default { getAll, getOne, getStudents, setToken, sendAcceptedModified, getSummary, hideCourse }

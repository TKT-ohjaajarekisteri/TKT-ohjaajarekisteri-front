import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/students'

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

//gets all sudents
const getAll = async () => {
  const response = await axios.get(baseUrl, getConfig())
  return response.data
}

//gets a single sudent by id **CHECK SAFETY**
const getStudent= async (id) => {
  try {
    const response = await axios.get(`api/students/${id}/`, getConfig())
    return response.data
  } catch (error) {
    console.log(error)
    return { error: 'Information retrieval failed!' }
  }
}

//creates students contactDetails
const update = async (content, id) => {
  try {
    console.log('studentservicen updaten content', content)
    const response = await axios.put(url + `api/students/${id}/`, content, getConfig())
    console.log('studentservicen updaten response', response)
    return response.data
  } catch (error) {
    console.log(error)
    return { error: 'Invalid email address!' }
  }
}

//creates application for a course
const apply = async (id, content) => {
  const applyFromList = true
  if (applyFromList) {
    try {
      const response = await axios.post(url + `api/students/${id}/courses/apply`, content, getConfig())
      return response.data
    } catch (error) {
      console.log(error)
      return { error: 'Something went wrong' }
    }
  } else {
    console.log('data to server', content)
  }
}

//gets all courses of specific student
const getCourses = async (id) => {
  const response = await axios.get(baseUrl + `/${id}/courses`, getConfig())
  return response.data
}

//removes student's application from the course
const deleteApplication = async (student_id, course_id) => {
  const response = await axios.delete(baseUrl + `/${student_id}/courses/${course_id}`, getConfig())
  return response.data
}

export default {
  getAll, setToken, update, apply, getCourses, deleteApplication, getStudent
}

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

//gets all students
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl, getConfig())
    return response.data
  } catch (error) {
    if(error===400) {
      //console.log('studentsin getall error 400', error)
      return { error: 'Could not get studentlist from db' }
    }
    if (error.message==='Could not get studentlist from db') {
      //console.log('studentsin getall errormessage 400', error.message)
      return { error: 'Could not get studentlist from db' }
    }
  }
}

//gets a single student by id
const getStudent= async (id) => {
  try {
    const response = await axios.get(url + `api/students/${id}`, getConfig())
    //console.log('service getStudentin response.data from back',response.data)

    return response.data
  } catch (error) {
    if(error===400) {
      //console.log('students servicen get student error', error)
      return { error: 'Could not get student from db' }
    }
    if (error===500) {
      return { error: 'Internal server error' }
    }
  }
}

//gets a single student by id for admin
const getSingleStudent= async (id) => {
  try {
    const response = await axios.get(url + `api/students/${id}/info`, getConfig())
    //console.log('service getStudentin response.data from back',response.data)

    return response.data
  } catch (error) {
    if(error===400) {
      //console.log('students servicen get student error', error)
      return { error: 'Could not get student from db' }
    }
    if (error===500) {
      return { error: 'Internal server error' }
    }
  }
}


//creates students contactDetails
const update = async (content, id) => {
  try {
    //console.log('studentservicen updaten content', content)
    const response = await axios.put(url + `api/students/${id}`, content, getConfig())
    //console.log('studentservicen updaten response', response)
    return response.data
  } catch (error) {
    //console.log(error)
    return { error: 'Details could not be updated' }
  }
}

//creates application for a course
const apply = async (id, content) => {
  try {
    const response = await axios.post(url + `api/students/${id}/courses/apply`, content, getConfig())
    //console.log('Returned from server')
    return response.data
  } catch (error) {
    //console.log(error)
    return { error: 'Something went wrong' }
  }
}

//gets all courses of specific student
const getCourses = async (id) => {
  try {
    const response = await axios.get(baseUrl + `/${id}/courses`, getConfig())
    return response.data
  } catch (error) {
    //console.log(error)
    return { error: 'Something went wrong' }
  }
}

//gets all courses of specific student for admin
const getSingleStudentCourses = async (id) => {
  try {
    const response = await axios.get(baseUrl + `/${id}/info/courses`, getConfig())
    return response.data
  } catch (error) {
    //console.log(error)
    return { error: 'Something went wrong' }
  }
}

//removes student's application from the course
const deleteApplication = async (student_id, course_id) => {
  try {
    const response = await axios.delete(baseUrl + `/${student_id}/courses/${course_id}`, getConfig())
    return response.data
  } catch (error) {
    //console.log(error)
    return { error: 'Something went wrong' }
  }
}

export default {
  getAll, setToken, update, apply, getCourses, deleteApplication, getStudent, getSingleStudent, getSingleStudentCourses
}

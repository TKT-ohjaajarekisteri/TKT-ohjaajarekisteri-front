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


//creates sudents contactDetails
const update = async (content, id) => {
  try {
    const response = await axios.put(url + `api/students/${id}/`, content, getConfig())
    return response.data
  } catch (error) {
    console.log(error)
    return { error: 'Invalid email address!' }
  }
}

//creates application for a course
const apply = async (content) => {
  try {
    const response = await axios.post(url + 'api/students', content, getConfig())
    console.log(response, 'response')
    return response.data

  } catch (error) {
    console.log(error)
    return { error: 'Something went wrong' }
  }
}

//gets all sudents
const getCourses = async (id) => {
  const response = await axios.get(baseUrl+`/${id}/courses`, getConfig())
  return response.data
}

export default {
  getAll, setToken, update, apply, getCourses
}

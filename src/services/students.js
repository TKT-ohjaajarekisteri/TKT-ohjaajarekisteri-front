import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/students'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('token asetettu', token)

}

//gets all students
const getAll = async () => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.get(baseUrl,config)
  return response.data
}


//creates sudents contactDetails
const update = async (content, id) => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.put(url + `api/students/${id}/`, content, config)
  return response.data
}

//gets a single studenta
const getStudent = async (id) => {
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.get(`api/students/${id}/`, config)
  return response.data
}



export default {
  getAll, setToken, update, getStudent
}

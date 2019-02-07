import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log(response.data)
  return response.data
}

export default { login }
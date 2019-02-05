import axios from 'axios'
import url from './config'


const login = async (credentials) => {
  const response = await axios.post(url, credentials)
  return response.data //token & user,username , email
}

export default { login }

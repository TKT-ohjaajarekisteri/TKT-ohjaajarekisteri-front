import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/login'

const login = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials)
    //console.log(response.data,'response from loginservice')
    return response.data
  } catch (error) {
    return { error: 'Username or password is incorrect!' }
  }
}

export default { login }


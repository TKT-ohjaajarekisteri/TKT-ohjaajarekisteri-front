import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/tokenCheck'

const userCheck = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/login`, { headers: { 'Authorization': 'Bearer ' + token } })
    return response.data
  } catch (error) {
    return { error: 'Something went wrong' }
  }
}

export default { userCheck }
import axios from 'axios'
import url from './config'

const userCheck = async (token) => {
  const response = await axios.get(`${url}/tokenCheck`, { headers: { 'Authorization': 'Bearer ' + token } })
  return response.data
}

export default { userCheck }
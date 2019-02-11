import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/tokenCeck'

const userCheck = async (token) => {
  const response = await axios.get(baseUrl + '/login', { headers: { 'Authorization': 'Bearer ' + token } })
  return response.data
}

export default { userCheck }
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

//login student just to run front without back
// const user = {
//   user_id: 1,
//   role: 'student',
//   email: false,
//   token: '123344455'
// }
// const testuser={ user }

// const login = (credentials) => {
//   console.log(testuser, 'testuseeeeeeeeeeerrr')
//   const response = testuser
//   console.log(response, 'responseeeeeeeeeeeeeeee')

//   return response
// }

export default { login }


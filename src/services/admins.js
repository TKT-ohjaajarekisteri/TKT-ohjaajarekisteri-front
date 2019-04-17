import axios from 'axios'
import url from './config'

const baseUrl = url + 'api/admins'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getConfig = () => {
  return {
    headers: { 'Authorization': token }
  }
}

const updatePassword = async ({ oldPassword, newPassword, confirm }) => {
  if (newPassword.length < 8) {
    return { error: 'Password needs to be at least 8 characters long' }
  }
  if (newPassword === confirm) {
    try {
      const response = await axios.put(baseUrl, { oldPassword, newPassword }, getConfig())
      return response.data
    } catch (error) {
      return { error: 'Old password is incorrect!' }
    }
  } else {
    return { error: 'Make sure the new password and the confirmation match' }
  }
}

export default { updatePassword, setToken }


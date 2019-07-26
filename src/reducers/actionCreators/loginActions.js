import courseService from '../../services/courses'
import studentService from '../../services/students'
import adminService from '../../services/admins'
import loginService from '../../services/login'
import tokenCheckService from '../../services/tokenCheck'

export const initLoggedUser = () => {
  return async (dispatch) => {
    let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))

    if (loggedUser) {
      let token = loggedUser.token
      const response = await tokenCheckService.userCheck(token)
      if (response.message === 'success') {
        await courseService.setToken(loggedUser.token)
        await studentService.setToken(loggedUser.token)
        await adminService.setToken(loggedUser.token)
        dispatch({
          type: 'INIT_USER',
          data: loggedUser
        })
      }
    }
  }
}

export const updateLoggedUser = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.update(content, id)
    if (response.error || response === undefined) {
      dispatch({
        type: 'NOTIFY',
        data: 'Saving failed!'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    } else {
      let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))
      loggedUser.user.email = true
      window.localStorage.setItem('loggedInUser', JSON.stringify(loggedUser))
      dispatch({
        type: 'UPDATE_LOGGED_USER',
        data: loggedUser
      })
      dispatch({
        type: 'NOTIFY',
        data: 'Information updated'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    }
  }
}


export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN' })
    const response = await loginService.login({ username: username, password: password })
    if (response.error) {
      dispatch({ type: 'LOGIN_FAILURE' })
      dispatch({
        type: 'NOTIFY',
        data: response.error
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)

    } else {
      await courseService.setToken(response.token)
      await studentService.setToken(response.token)
      await adminService.setToken(response.token)
      dispatch({
        type: 'LOGIN_SUCCESFUL',
        data: { ...response }
      })
      dispatch({
        type: 'NOTIFY',
        data: 'Logged in succesfully!'
      })

      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
      window.localStorage.setItem('loggedInUser', JSON.stringify({ ...response }))
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedInUser')
    await studentService.setToken(null)
    await courseService.setToken(null)
    await adminService.setToken(null)
    dispatch({
      type: 'LOGOUT'
    })
  }
}
export default { logout, login, updateLoggedUser, initLoggedUser }
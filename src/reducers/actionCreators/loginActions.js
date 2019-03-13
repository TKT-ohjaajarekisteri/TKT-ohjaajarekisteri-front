import courseService from '../../services/courses'
import studentService from '../../services/students'
import loginService from '../../services/login'
import tokenCheckService from '../../services/tokenCheck'

const initLoggedUser = () => {
  return async (dispatch) => {
    let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))

    if (loggedUser) {
      let token = loggedUser.token
      const response = await tokenCheckService.userCheck(token)
      if (response.message === 'success') {
        await courseService.setToken(loggedUser.token)
        await studentService.setToken(loggedUser.token)
        dispatch({
          type: 'INIT_USER',
          data: loggedUser
        })
      }
    }
  }
}

const updateLoggedUser = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.update(content, id)
    if (response.error) {
      // handle error
    } else {
      let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))
      loggedUser.user.email = true
      window.localStorage.setItem('loggedInUser', JSON.stringify(loggedUser))
      dispatch({
        type: 'UPDATE_LOGGED_USER',
        data: loggedUser
      })
    }
  }
}

const login = (username, password) => {
  return async (dispatch) => {
    const response = await loginService.login({ username: username, password: password })
    if (response.error) {
      dispatch({
        type: 'NOTIFY',
        data: 'Username or password is incorrect!'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)

    } else {
      await courseService.setToken(response.token)
      await studentService.setToken(response.token)
      dispatch({
        type: 'LOGIN',
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

const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedInUser')
    await studentService.setToken(null)
    await courseService.setToken(null)
    dispatch({
      type: 'LOGOUT'
    })
  }
}
export { logout, login, updateLoggedUser, initLoggedUser }
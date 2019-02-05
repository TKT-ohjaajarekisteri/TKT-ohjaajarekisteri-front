import loginService from '../services/login'
import courseService from '../services/students'

const loginReducer = (store = null, action) => {
  console.log('ACTION:', action)

  switch (action.type) {

  case 'LOGGED':
    // console.log(action.data, 'data')
    // console.log(action.user,'user')
    return action.user


  case 'LOGOUT':
    store=null
    return store

  default:
    return store
  }
}

//ACTION CREATOR
export const login=(username, password) => {
  return async (dispatch)  => {
    try {
      const user = await loginService.login({
        username,
        password
      })
      // window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      // console.log(user)
      // console.log(user.token)
      courseService.setToken(user.token)

      dispatch({
        type:'LOGGED',
        user
      })
    } catch(exception) {
      console.log('login went wrong')
    }
  }
}

export const logout=() => (dispatch) => {
  alert('Are you sure you want to logout!')
  // window.localStorage.removeItem('loggedBlogappUser')
  dispatch({
    type:'LOGOUT'
  })
}



export default loginReducer

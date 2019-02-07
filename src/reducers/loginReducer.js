
const loginReducer = (store = null, action) => {
  console.log('ACTION:', action)

  switch (action.type) {

  case 'LOGGED':
    console.log(action.user,'LOGGED action.user')
    return action.user


  case 'LOGOUT':
    store=null
    return store

  default:
    return store
  }
}

//ACTION CREATOR
export const saveUser=(user) => {
  console.log(user,'ACTION saveUSER')
  return async (dispatch)  => {
    dispatch({
      type:'LOGGED',
      user
    })
  }
}

export const logout=() => (dispatch) => {
  alert('Are you sure you want to logout!')
  window.localStorage.removeItem('loggedInUser')
  dispatch({
    type:'LOGOUT'
  })
}



export default loginReducer

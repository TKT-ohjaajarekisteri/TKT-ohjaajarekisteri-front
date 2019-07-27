const initialState = {
  loggedUser: null,
  loadingUser: false,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_USER': {
    return {
      ...state,
      loggedUser: action.data,
      loadingUser: false
    }
  }
  case 'LOGIN': {
    return {
      ...state,
      loadingUser: true
    }
  }
  case 'LOGIN_SUCCESFUL': {
    return {
      ...state,
      loggedUser: action.data,
      loadingUser: false
    }
  }
  case 'LOGIN_FAILURE': {
    return {
      ...state,
      loadingUser: false
    }
  }
  case 'LOGOUT': {
    return {
      ...state,
      loggedUser: null
    }
  }

  case 'UPDATE_LOGGED_USER': {
    return {
      ...state,
      loggedUser: action.data
    }
  }

  default: {
    return state
  }
  }
}


export default loginReducer


import React from 'react'
import { connect } from 'react-redux'
import { notify } from './../reducers/notificationReducer'
import { login } from './../reducers/loginReducer'


const LoginForm = (props) => {
 
  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    const username=event.target.username.value
    const password=event.target.password.value
    try {

      login(username, password)   //kutsuttaan action creatoria
      notify(`user ${username} logged in`, 5)

      event.target.username.value = ''
      event.target.password.value=''
      //if email---omasinglepage else RegisterForm
     // history.push('/')

    } catch(exception) {
      console.log('login went wrong')

    }
  }

  return(
    <div>
      <h2>Sign in with your University of Helsinki credentials</h2>


      <form onSubmit={handleLoginSubmit}>
        <div>
            username
          <input
            type="text"
            name="username"
          />
        </div>

        <div>
            password
          <input
            type="password"
            name="password"
   
          />
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default connect(
  null,
  { notify }
)(LoginForm)
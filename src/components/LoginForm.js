
import React from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/notificationReducer'
import { saveUser } from './../reducers/loginReducer'
import loginService from '../services/login'
import courseService from '../services/courses'

const LoginForm = (props) => {

  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    const username=event.target.username.value
    const password=event.target.password.value


    try {
        const user = await loginService.login({
        username: username,
        password: password
         })
         console.log(user,'tietokannastapalautettu user')

        window.localStorage.setItem('loggedInUser', JSON.stringify(user))
        const loggedUser=JSON.parse(window.localStorage.getItem('loggedInUser'))
        console.log(loggedUser,'localstoresta haettu user')
        props.saveUser(loggedUser)
        courseService.setToken(loggedUser.token)
        props.notify(`user ${username} logged in`, 5)

      event.target.username.value = ''
      event.target.password.value=''
      if (user.email){
        // history.push('/SingleStudent', user={user})
      }
        else {
        //history.push('/studentForm')
    } 
    }
    catch(exception) {
      console.log('login went wrong') 
      if (exception.response) {
        if (exception.response.status === 400) {
          props.setError('Username or password is missing!',5)
        } else if (exception.response.status === 401) {
          props.setError('Username or password is incorrect!',5)
        }
      } else {
        props.setError('Error occurred, login failed')
      } 
    }
  }

  return(
    <div className='studentForm'>
      <h2>Sign in with your University of Helsinki credentials</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
        <label>username </label>  
          <input
            type="text"
            name="username"
          />
        </div>

        <div>
        <label>password</label>
          <input
            type="password"
            name="password"
          />
        </div>
        <button className="button" type="submit">login</button>
      </form>

    </div>
  )
}

export default connect(
  null,
  { notify, setError, saveUser}
)(LoginForm)
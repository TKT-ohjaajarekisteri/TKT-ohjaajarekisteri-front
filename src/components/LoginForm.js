
import React from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/notificationReducer'
import { saveUser } from './../reducers/loginReducer'
import loginService from '../services/login'
import courseService from '../services/courses'
import studentService from '../services/students'


const LoginForm = ({history, notify, setError, saveUser, logged}) => {

  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    const username=event.target.username.value
    const password=event.target.password.value


    try {
        const user = await loginService.login({
        username: username,
        password: password
         })
        // console.log(user,'tietokannastapalautettu user')

        window.localStorage.setItem('loggedInUser', JSON.stringify(user))
        const loggedUser=JSON.parse(window.localStorage.getItem('loggedInUser'))
        //console.log(loggedUser,'localstoresta haettu user')
        saveUser(loggedUser)
        courseService.setToken(loggedUser.token)
        notify(`user logged in`, 5) //${username}

     if (loggedUser.user.email===false){
        //console.log(loggedUser,'false email')
       history.push('/register')
      }
       else {
       history.push(`/students/${loggedUser.user_id}`)
     }  
      }
    catch(exception) { 
        event.target.username.value = ''
        event.target.password.value = ''
     // console.log('login went wrong') 
      if (exception.response) {
        if (exception.response.status === 400) {
          setError('Username or password is missing!',5)    
          
        } else if (exception.response.status === 401) {
         setError('Username or password is incorrect!',5)
        }
      } else {
        setError('Error occurred, login failed')
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

const mapStateToProps = (state) => {   
   return {
     logged: state.loggedUser
   }
 }

export default connect(
    mapStateToProps,
  { notify, setError, saveUser}
)(LoginForm)

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

      this.props.login(username, password) 
      notify(`user ${username} logged in`, 5)

      event.target.username.value = ''
      event.target.password.value=''
      //if email=onko jo hakenut aikaisemmin---ohjaus omalle singlepagelle else studentForm hakemukseen
     // history.push('/studentForm')
     //history.push('/SingleStudent username={username}')

    } catch(exception) {
      console.log('login went wrong')
      //tänne tulostuksia käyttäjälle..wrong password or email

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
        <button className="button" type="submit">create</button>
      </form>

    </div>
  )
}

export default connect(
  null,
  { notify, login }
)(LoginForm)
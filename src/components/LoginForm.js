
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/notificationReducer'
import { login } from './../reducers/loginReducer'

export const LoginForm = ({ history, notify, setError, login }) => {

  const [input, setInput] = useState({ username: '', password: '' })

  const handleLogin = (event) => {
    event.preventDefault()
    const { username, password } = input

    login(username, password)
    notify('this is a notification', 5)

    setInput({ username: '', password: '' })
  }

  const handleChange = (event) => {
    const newInput = {
      ...input,
      [event.target.name]: event.target.value
    }
    setInput(newInput)
  }

  return (
    <div className='studentForm'>
      <h2>Sign in with your University of Helsinki credentials</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>username </label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>password </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <input className="button" type="submit" value="Login" />
      </form>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { notify, setError, login }
)(LoginForm)
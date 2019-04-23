import React, { useState } from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/actionCreators/notificationActions'
import { login } from './../reducers/actionCreators/loginActions'
import { Form, Button, Col } from 'react-bootstrap'

export const LoginForm = ({ login }) => { //for future: history, setError

  const [input, setInput] = useState({ username: '', password: '' })

  const handleLogin = (event) => {
    event.preventDefault()
    const { username, password } = input

    login(username, password)
    // notify('this is a notification', 5)

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
      <div className='logHeader'>
        <h2>Sign in with your University of Helsinki credentials</h2>
      </div>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Col} md="4">
          <Form.Label>username </Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
            autoFocus
          />

          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="btnLogin" variant="dark" type="submit" >
          Login
        </Button>
      </Form>
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

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/actionCreators/notificationActions'
import { login } from './../reducers/actionCreators/loginActions'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'

export const LoginForm = ({ login }) => {

  const [input, setInput] = useState({ username: '', password: '' })

  const handleLogin = (event) => {
    event.preventDefault()
    const { username, password } = input

    login(username, password)

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
      <Container>
        <Row>
          <Col>
            <div className='logHeader'>
              <h3>TKT – Assistant Register</h3>
              <h5>Login with University of Helsinki credentials</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>username</Form.Label>
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
          </Col>
        </Row>
      </Container>
    </div >
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

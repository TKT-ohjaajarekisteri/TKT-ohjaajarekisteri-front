import React, { useState } from 'react'
import { notify, setError } from '../../reducers/actionCreators/notificationActions'
import adminService from '../../services/admins'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'


export const UpdatePasswordForm = ({ notify, setError }) => {

  const [input, setInput] = useState({ oldPassword: '', newPassword: '', confirm: '' })

  const handlePasswordChange = async (event) => {
    event.preventDefault()
    const { oldPassword, newPassword, confirm } = input
    const response = await adminService.updatePassword({ oldPassword, newPassword, confirm })
    if (response.error) {
      setError(response.error, 5)
    } else {
      notify('Password updated successfully!', 5)
      setInput({ oldPassword: '', newPassword: '', confirm: '' })
    }
  }

  const handleChange = (event) => {
    const newInput = {
      ...input,
      [event.target.name]: event.target.value
    }
    setInput(newInput)
  }

  return (
    <div className='updatePasswordForm'>
      <Container>
        <Row>
          <Col>
            <div className='logHeader'>
              <h3>Change password</h3>
            </div>
          </Col>
        </Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handlePasswordChange}>
            <Form.Group>
              <Form.Label>Old Password </Form.Label>
              <Form.Control
                type="password"
                name="oldPassword"
                value={input.oldPassword}
                onChange={handleChange}
                autoFocus />

              <Form.Label>New Password </Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={input.newPassword}
                onChange={handleChange} />

              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={input.confirm}
                onChange={handleChange} />
            </Form.Group>

            <Button className="button btnLogin" type="submit" >
          Update Password
            </Button>
          </Form>
        </Col>
      </Container>
    </div>
  )
}

export default connect(
  null,
  { notify, setError }
)(UpdatePasswordForm)

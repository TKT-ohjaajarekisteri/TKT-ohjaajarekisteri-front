import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/actionCreators/studentActions'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import { Form, Button } from 'react-bootstrap'

export const ContactDetailsForm = ({ updateLoggedUser, id }) => { //for future: notify

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {

      nickname: event.target.nickname.value,
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
    }

    // Update the notification functionality in the action
    updateLoggedUser(formContent, id)
    // notify(`The application for ${formContent.nickname} has been sent`, 5)

    event.target.nickname.value = ''
    event.target.phonenumber.value = ''
    event.target.email.value = ''
  }

  return (
    <div className='studentForm'>

      <h2>Contact details </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Preferred firstname: </Form.Label>
          <Form.Control type="text" name='nickname' />
          <Form.Label>Phone: </Form.Label>
          <Form.Control type="text" name='phonenumber' />
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" name='email' />
        </Form.Group>
        <Button variant="dark" className="button" type="submit">send</Button>
      </Form>
    </div>
  )
}


export default connect(
  null,
  { createStudent, notify, updateLoggedUser }
)(ContactDetailsForm)
import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/actionCreators/studentActions'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import { Form, Button } from 'react-bootstrap'

export const ContactDetailsForm = ({ updateLoggedUser, id, notify }) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
      experience: event.target.experience.value
    }

    if (formContent.email === '') {
      notify('Email field must be filled', 5)
    } else {

      updateLoggedUser(formContent, id)
      notify('Contact details have been saved', 5)
      event.target.phonenumber.value = ''
      event.target.email.value = ''
      event.target.experience.value = ''
    }
  }
  return (
    <div className='studentForm'>

      <h2>Contact details </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Phone: </Form.Label>
          <Form.Control type="text" name='phonenumber' />
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" name='email' />

          <Form.Label>Assistance/teaching experience: </Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            type="text"
            name='experience'/>


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
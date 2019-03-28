import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/actionCreators/studentActions'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import { Form, Button } from 'react-bootstrap'
import { updatePhone, updateEmail, updateLanguage, updateExperience } from '../../reducers/actionCreators/studentActions'

export const ContactDetailsForm = ({ updateLoggedUser, id, notify, no_english }) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      no_english: event.target.no_english.value
    }
    console.log('contact details form', formContent)
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
          <Form.Control 
          type="text" 
          name='phonenumber' 
          onChange={(e) => updatePhone(e.target.value)}
          />
          <Form.Label>Email: </Form.Label>
          <Form.Control 
          type="text" 
          name='email'
          onChange={(e) => updateEmail(e.target.value)}
           />

          <Form.Label>Assistance/teaching experience: </Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            type="text"
            name='experience'
            onChange={(e) => updateExperience(e.target.value)}
            />

          <Form.Check
            type="checkbox"
            name='no_english'
            label="I don't want to teach in English"
            checked={no_english}
            onChange={(e) => updateLanguage(e.target.checked)}
          />

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
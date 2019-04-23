import React from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import { Form, Button } from 'react-bootstrap'
import studentActions from '../../reducers/actionCreators/studentActions'
import { emailValid } from '../../utils/validations'

export const ContactDetailsForm = ({
  updateLoggedUser,
  id,
  notify,
  updateLanguage,
  updateExperience,
  updateEmail,
  updatePhone
}) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      no_english: event.target.no_english.checked
    }

    if (!emailValid(formContent.email)) {
      notify('Please check your email', 5)
    }
    else if (formContent.experience.length > 1000) {
      notify('Experience maximum length is 1000 characters', 5)
    } else {
      updateLoggedUser(formContent, id)
    }
  }
  return (
    <div className='studentForm'>

      <h2>Contact details </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Phone: </Form.Label>
          <Form.Control
            type='text'
            name='phonenumber'
            onChange={(e) => updatePhone(e.target.value)}
          />
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={(e) => updateEmail(e.target.value)}
          />

          <Form.Label>Assistance/teaching experience (max length 1000 characters):</Form.Label>
          <Form.Control
            as='textarea'
            rows='2'
            type='text'
            name='experience'
            onChange={(e) => updateExperience(e.target.value)}
          />

          <Form.Check
            type='checkbox'
            name='no_english'
            label="I don't want to teach in English"
            onChange={(e) => updateLanguage(e.target.checked)}
          />

        </Form.Group>
        <Button className='button' type='submit'>send</Button>
      </Form>
    </div>
  )
}


export default connect(
  null,
  { notify, updateLoggedUser, ...studentActions }
)(ContactDetailsForm)
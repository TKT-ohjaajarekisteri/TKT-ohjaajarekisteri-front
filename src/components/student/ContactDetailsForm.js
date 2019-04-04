import React from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import { Form, Button } from 'react-bootstrap'
import { updatePhone, updateEmail, updateLanguage, updateExperience } from '../../reducers/actionCreators/studentActions'

const validation= ( email ) => {
  // validation regex from: https://flaviocopes.com/how-to-validate-email-address-javascript/
  /* eslint-disable */
  console.log('validoinnin email', email)
   const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  /* eslint-enable */
  // validation regex from: http://emailregex.com/
  //const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return expression.test(String(email).toLowerCase())
}

export const ContactDetailsForm = ({ updateLoggedUser, id, notify }) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      no_english: event.target.no_english.checked
    }
    //console.log('contact details form', formContent)
    if (!validation(formContent.email)) {
      notify('Please check your email', 5)
    } else {
      updateLoggedUser(formContent, id)
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
            type="email"
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
  { notify, updateLoggedUser }
)(ContactDetailsForm)
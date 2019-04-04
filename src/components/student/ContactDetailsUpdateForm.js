import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation, updatePhone, updateEmail, updateLanguage, updateExperience } from '../../reducers/actionCreators/studentActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import StudentCourseList from './StudentCourseList'
import { Form, Button } from 'react-bootstrap'

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

export const ContactDetailsUpdateForm = ({ phone, email, experience, no_english, updatePhone, updateEmail, updateLanguage, updateExperience, updateLoggedUser, notify, id, getContactInformation, defaultInput }) => {

  // gets the student from db and initializes and sends contact info to store
  useEffect(() => {
    getContactInformation(id)
  }, [])

  // takes new input values from the form, updates logged user
  const handleSubmit = (event) => {
    event.preventDefault()

    const input = {
      phone: event.target.phone.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      no_english: event.target.no_english.checked
    }
    // gives error if email is not in valid format
    if (!validation(input.email)) {
      notify('Please check your email', 5)
    } else {
      updateLoggedUser(input, id)
    }
  }
  return (
    <div>
      <div className='contactDetailsUpdateForm'>

        <h2>My profile</h2>
        <Form onSubmit={handleSubmit} className='firstDetails' >
          <h5>{defaultInput.first_names} {defaultInput.last_name} {defaultInput.student_number} </h5>
          <Form.Group>

            <Form.Label>Phone: </Form.Label>
            <Form.Control
              type="text"
              name='phone'
              value={phone}
              onChange={(e) => updatePhone(e.target.value)}
            />

            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              name='email'
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />

            <Form.Label>Assistance/teaching experience: </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              type="text"
              name='experience'
              value={experience}
              onChange={(e) => updateExperience(e.target.value)}
            />

            <Form.Check
              type="checkbox"
              name='no_english'
              checked={no_english}
              value={no_english}
              label="I don't want to teach in English"
              onChange={(e) => updateLanguage(e.target.checked)}

            />

          </Form.Group>
          <Button variant="dark" className="updateButton" type="submit">update</Button>
        </Form>
      </div>
      <StudentCourseList id={id} />

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'Contact koko store')
  return {
    defaultInput: state.students.contactInformation,
    phone: state.students.phone,
    email: state.students.email,
    experience: state.students.experience,
    no_english: state.students.no_english
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation, updatePhone, updateEmail, updateLanguage, updateExperience }
)(ContactDetailsUpdateForm)
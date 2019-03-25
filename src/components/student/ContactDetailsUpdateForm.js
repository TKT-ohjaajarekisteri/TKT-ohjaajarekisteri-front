import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation, updatePhone, updateEmail, updateLanguage, updateExperience } from '../../reducers/actionCreators/studentActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import StudentCourseList from './StudentCourseList'
import { Form, Button } from 'react-bootstrap'


export const ContactDetailsUpdateForm = ({ phone, email, experience, teachesInEnglish, updatePhone, updateEmail, updateLanguage, updateExperience, updateLoggedUser, notify, id, getContactInformation, defaultInput }) => {

  useEffect(() => {
    getContactInformation(id)
    //updateEmail(defaultInput.email)
    // console.log('def', defaultInput)
  }, [])

  // const handleChange = (event) => {
  //   const input = {
  //     phone: event.target.phone.value,
  //     email: event.target.email.value,
  //     experience: event.target.experience.value,
  //     teachesInEnglish: event.target.teachesInEnglish.valu
  //   }
  //   updateLoggedUser(input, id)

  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    const input = {
      phone: event.target.phone.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      teachesInEnglish: event.target.teachesInEnglish.value
    }

    //if (event.target.email.value === '') {
    //   console.log('handlesubmitin emailinput', event.target.email.value)
    //   notify('Email field must be filled', 5)
    // } else {

    updateLoggedUser(input, id)
    notify('Information updated', 5)
  }

  return (
    <div>
      <div className='contactDetailsUpdateForm'>

        <h2>My profile</h2>
        <Form onSubmit={handleSubmit}>
          <h5>{defaultInput.first_names} {defaultInput.last_name} {defaultInput.student_number} </h5>
          <Form.Group>

            <Form.Label>Phone: </Form.Label>
            <Form.Control
              type="text"
              phone={defaultInput.phone}
              name='phone'
              value={phone}
              //onChange={handleChange}
              onChange={(e) => updatePhone(e.target.value)}
            />

            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              name='email'
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            //onChange={handleChange}
            />

            <Form.Label>Assistance/teaching experience: </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              type="text"
              name='experience'
              value={experience}
              onChange={(e) => updateExperience(e.target.value)}
            //onChange={handleChange}
            //placeholder={defaultInput.experience}
            />

            <Form.Check
              type="checkbox"
              name='teachesInEnglish'
              value={!teachesInEnglish}
              label="I don't want to teach in English"
              onChange={(e) => updateLanguage(e.target.value)}
            // onChange={handleChange}
            />

          </Form.Group>
          <Button variant="dark" className="button" type="submit">update</Button>
        </Form>
      </div>
      <StudentCourseList id={id} />

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    defaultInput: state.students.contactInformation,
    phone: state.students.phone,
    email: state.students.email,
    experience: state.students.experience,
    teachesInEnglish: state.students.teachesInEnglish
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation, updatePhone, updateEmail, updateLanguage, updateExperience }
)(ContactDetailsUpdateForm)
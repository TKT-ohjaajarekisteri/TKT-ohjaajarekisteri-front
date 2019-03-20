import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation } from '../../reducers/actionCreators/studentActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import StudentCourseList from './StudentCourseList'
import { Form, Button } from 'react-bootstrap'

export const ContactDetailsUpdateForm = ({ updateLoggedUser, notify, id, getContactInformation, defaultInput }) => {

  var kakka = defaultInput.phone
  var phone = JSON.stringify(kakka)

  console.log('contactupdateformin jsonkakka', phone)
  //console.log('contactupdateformin defaultinputphone', defaultInput.phone)
  const [input, setInput] = useState({ phone: phone, email: '', experience: '' })


  // TODO: GET OLD VALUES FROM BACKEND

  useEffect(() => {
    getContactInformation(id)
    // console.log('def', defaultInput)
  }, [])

  const handleChange = (event) => {
    const newInput = {
      ...input,
      [event.target.name]: event.target.value
    }
    setInput(newInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('contactupdate handlesubmit input', input)

    if (input.email === '') {
      console.log('handlesubmitin emailinput', input.email)
      notify(`Email field must be filled`, 5)
    } else {
      updateLoggedUser(input, id)
      notify(`Information updated`, 5)
      //setInput({ phone: '', email: '', experience: '' })
    }
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
              value={input.phone}
              name='phone'
              onChange={handleChange}
            //placeholder={defaultInput.phone}
            />

            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              name='email'
              value={input.email}
              onChange={handleChange}
              placeholder={defaultInput.email}
            />

            <Form.Label>Assistance/teaching experience: </Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              type="text"
              name='experience'
              value={input.experience}
              onChange={handleChange}
              placeholder={defaultInput.experience}
            />

            {/* <Form.Check
              type="checkbox"
              name='teachInEnglish'
              label="I only want to assist in Finnish"
              onChange={handleChange}
            /> */}

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
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation }
)(ContactDetailsUpdateForm)
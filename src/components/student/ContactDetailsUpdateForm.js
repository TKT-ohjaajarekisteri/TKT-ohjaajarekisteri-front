import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation } from '../../reducers/actionCreators/studentActions'
import { notify } from '../../reducers/actionCreators/notificationActions'
import StudentCourseList from './StudentCourseList'
import { Form, Button } from 'react-bootstrap'

export const ContactDetailsUpdateForm = ({ updateLoggedUser, notify, id, getContactInformation, defaultInput }) => {

  const [input, setInput] = useState({ nickname: '', phone: '', email: '' })

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
    updateLoggedUser(input, id)

    // TODO: Update the notification functionality in the action
    notify(`Information updated for ${input.nickname}`, 5)
    setInput({ nickname: '', phone: '', email: '' })
  }

  return (
    <div>
      <div className='contactDetailsUpdateForm'>

        <h2>Contact details </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>

            <Form.Label>Preferred firstname: </Form.Label>
            <Form.Control
              type="text"
              value={input.nickname}
              name='nickname'
              onChange={handleChange}
              placeholder={defaultInput.nickname}
            />


            <Form.Label>Phone: </Form.Label>
            <Form.Control
              type="text"
              value={input.phone}
              name='phone'
              onChange={handleChange}
              placeholder={defaultInput.phone}
            />

            <label>Email: </label>
            <Form.Control
              type="text"
              name='email'
              value={input.email}
              onChange={handleChange}
              placeholder={defaultInput.email}
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
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation }
)(ContactDetailsUpdateForm)
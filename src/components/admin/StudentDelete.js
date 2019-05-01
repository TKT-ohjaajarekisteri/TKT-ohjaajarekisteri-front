import React, { useState } from 'react'
import { notify, setError } from '../../reducers/actionCreators/notificationActions'
import studentService from '../../services/students'
import { Form, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'


export const StudentDelete = ({ notify, setError }) => {

  const [input, setInput] = useState({ studentNumber: '' })

  const handleStudentNumberChange = async (event) => {
    event.preventDefault()
    const studentNumber = input.studentNumber
    if (window.confirm('Are you sure you want to delete student with student number: ' + studentNumber + '?')) {
      const response = await studentService.deleteStudent(studentNumber)
      if (response.error) {
        setError(response.error, 5)
      } else {
        notify('Student with student number ' + studentNumber.toString() + ' deleted succesfully!', 5)
        setInput({ studentNumber: '' })
      }
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
    <div className='deleteStudentForm'>
      <h2>Delete Student</h2>
      <Form onSubmit={handleStudentNumberChange}>
        <Form.Group as={Col} md="4">
          <Form.Label>Student number:</Form.Label>
          <Form.Control
            type="student_number"
            name="studentNumber"
            value={input.studentNumber}
            onChange={handleChange}
            autoFocus />
        </Form.Group>

        <Button className="button btnLogin" type="submit" >
          Delete student
        </Button>
      </Form>
    </div>
  )
}

export default connect(
  null,
  { notify, setError }
)(StudentDelete)

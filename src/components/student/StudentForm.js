import React from 'react'
import { connect } from 'react-redux'
import { createContent } from '../../reducers/courseReducer'
import { notify } from '../../reducers/notificationReducer'


const StudentForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      student_number: event.target.student_number.value,
      first_name: event.target.student_firstnames.value,
      last_name: event.target.student_lastname.value,
      nickname: event.target.student_nickname.value,
      phone: event.target.student_phonenumber.value,
      email: event.target.student_email.value,
      learningopportunity_id: event.target.course_id.value,
      course_name: event.target.course_name.value,
      period: event.target.course_period.value,
      year: event.target.course_year.value
    }

    props.createContent(formContent)
    props.notify(`The application for ${formContent.first_name} has been sent`, 5)

    event.target.student_number.value = ''
    event.target.student_firstnames.value = ''
    event.target.student_lastname.value = ''
    event.target.student_nickname.value = ''
    event.target.student_phonenumber.value = ''
    event.target.student_email.value = ''

    event.target.course_id.value = ''
    event.target.course_name.value = ''
    event.target.course_period.value = ''
    event.target.course_year.value = ''
  }

  return (
    <div>
      <h2>Create a new application</h2>
      <form onSubmit={handleSubmit}>
        <h3>Student information:</h3>
        <table>
          <tbody>
            <tr>
              <td><label>Student number: </label></td>
              <td><input name='student_number' /></td>
            </tr>

            <tr>
              <td><label>Last name: </label></td>
              <td><input name='student_lastname' /></td>
            </tr>

            <tr>
              <td><label>First names: </label></td>
              <td><input name='student_firstnames' /></td>
            </tr>

            <tr>
              <td><label>Nickname: </label></td>
              <td><input name='student_nickname' /></td>
            </tr>

            <tr>
              <td><label>Phone: </label></td>
              <td><input name='student_phonenumber' /></td>
            </tr>

            <tr>
              <td><label>Email: </label></td>
              <td><input name='student_email' /></td>
            </tr>
          </tbody>
        </table>

        <h3>Course Information:</h3>
        <table>
          <tbody>
            <tr>
              <td><label>Course id: </label></td>
              <td><input name='course_id' /></td>
            </tr>

            <tr>
              <td><label>Course name: </label></td>
              <td><input name='course_name' /></td>
            </tr>

            <tr>
              <td><label>Course year: </label></td>
              <td><input name='course_year' /></td>
            </tr>

            <tr>
              <td><label>Course period: </label></td>
              <td><input name='course_period' /></td>
            </tr>
          </tbody>
        </table>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createContent, notify }
)(StudentForm)

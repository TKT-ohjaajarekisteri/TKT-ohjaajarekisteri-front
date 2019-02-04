import React from 'react'
import { connect } from 'react-redux'
import { createContent } from '../../reducers/courseReducer'
import { notify } from '../../reducers/notificationReducer'


const StudentForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      phone: event.target.student_phonenumber.value,
      email: event.target.student_email.value,
      learningopportunity_id: event.target.course_id.value,
      course_name: event.target.course_name.value,
      period: event.target.course_period.value,
      year: event.target.course_year.value
    }

    props.createContent(formContent)
    props.notify(`The application for ${formContent.first_name} has been sent`, 5)

    event.target.student_phonenumber.value = ''
    event.target.student_email.value = ''

    event.target.course_id.value = ''
    event.target.course_name.value = ''
    event.target.course_period.value = ''
    event.target.course_year.value = ''
  }

  return (
    <div className='studentForm'>

      <h2>Create a new application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Student information:</h3>
        </div>
        <div>
          <label>Phone: </label>
          <input type="text"name='student_phonenumber' />
        </div>

        <div>
          <label>Email: </label>
          <input type="text" name='student_email'/>
        </div>

        <h3>Course Information:</h3>

        <div>
          <label>Course id: </label>
          <input type="text" name='course_id' />
        </div>

        <div>
          <label>Course name: </label>
          <input type="text" name='course_name' />
        </div>

        <div>
          <label>Course year: </label>
          <input type="text" name='course_year' />
        </div>

        <div>
          <label>Course period: </label>
          <input type="text" name='course_period' />
        </div>
        <button className="button" type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createContent, notify }
)(StudentForm)
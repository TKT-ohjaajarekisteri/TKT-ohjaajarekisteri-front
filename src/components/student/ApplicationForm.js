import React from 'react'
import { connect } from 'react-redux'
import { getStudent } from '../../reducers/studentReducer'
import { createContent } from '../../reducers/courseReducer'
import { notify } from '../../reducers/notificationReducer'


const ApplicationForm = ({ getStudent, notify, id, createContent }) => {


  console.log(id, 'applyform loggedUsers id')


  const handleSubmit = async (event) => {
    event.preventDefault()
    const student = getStudent(id)
    console.log(student)
    const formContent = {
      student_id: student.student_id,
      student_number: student.student_number,
      first_names: student.first_names,
      last_name: student.last_name,
      nickname: student.nickname,
      phone: student.phone,
      email: student.email,
      learningopportunity_id: event.target.course_id.value,
      course_name: event.target.course_name.value,
      period: event.target.period.value,
      year: event.target.year.value
    }

    //console.log(logged_id, 'contactFormuseri id')
    createContent(formContent)
    notify(`The application for ${formContent.nickname} has been sent`, 5)

    event.target.course_id.value = ''
    event.target.course_name.value = ''
    event.target.period.value = ''
    event.target.year.value = ''
  }

  return (
    <div className='applicationForm'>

      <form onSubmit={handleSubmit}>

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
          <input type="text" name='year' />
        </div>

        <div>
          <label>Course period: </label>
          <input type="text" name='period' />
        </div>

        <button className="button" type="submit">apply</button>
      </form>
    </div>
  )
}


export default connect(
  null,
  { getStudent, notify, createContent }
)(ApplicationForm)
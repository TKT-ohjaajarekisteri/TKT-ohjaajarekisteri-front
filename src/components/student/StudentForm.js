import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/studentReducer'
import { createCourse } from '../../reducers/courseReducer'
import { createContent } from '../../reducers/infoReducer'


const StudentForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      student_id: event.target.student_id.value,
      first_name: event.target.student_firstnames.value,
      last_name: event.target.student_lastname.value,
      nickname: event.target.student_nickname.value,
      phone: event.target.student_phonenumber.value,
      email: event.target.student_email.value,
    // } const course = {
      learningopportunity_id: event.target.course_id.value,
      course_name: event.target.course_name.value,
      period: event.target.course_period.value,
      year: event.target.course_year.value
    }
 
    props.createContent(formContent)
    // props.createStudent(applicant)
    // props.createCourse(course)

    event.target.student_id.value = ''
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
        Student number:
        <div><input name='student_id'/></div>
        Last name:
        <div><input name='student_lastname'/></div>
        First names:
        <div><input name='student_firstnames'/></div>
        Nickname:
        <div><input name='student_nickname'/></div>
        Phone:
        <div><input name='student_phonenumber'/></div>
        Email:
        <div><input name='student_email'/></div>
        <h3>Course Information:</h3>
        Course id:
        <div><input name='course_id'/></div>
        Course name:
        <div><input name='course_name'/></div>
        Course year:
        <div><input name='course_year'/></div>
        Course period:
        <div><input name='course_period'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createStudent, createCourse, createContent }
)(StudentForm)

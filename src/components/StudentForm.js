import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from './../reducers/studentReducer'
import { createCourse } from './../reducers/courseReducer'

const StudentForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const applicant = {
      id: event.target.student_id.value,
      last_name: event.target.student_lastname.value,
      first_names: event.target.student_firstnames.value,
      nickname: event.target.student_nickname.value,
      phone_number: event.target.student_phonenumber.value,
      email: event.target.student_email.value
    }
    const course = {
      id: event.target.course_id.value,
      name: event.target.course_name.value,
      year: event.target.course_year.value,
      period: event.target.course_period.value
    }

    props.createStudent(applicant)
    props.createCourse(course)
    //props.notify(`anecdote ${content} created`, 5)

    event.target.student_id.value = ''
    event.target.student_lastname.value = ''
    event.target.student_firstnames.value = ''
    event.target.student_nickname.value = ''
    event.target.student_phonenumber.value = ''
    event.target.student_email.value = ''

    event.target.course_id.value = ''
    event.target.course_name.value = ''
    event.target.course_year.value = ''
    event.target.course_period.value = ''
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
  { createStudent, createCourse }
)(StudentForm)

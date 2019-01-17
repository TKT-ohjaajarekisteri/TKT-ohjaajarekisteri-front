import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from './../reducers/studentReducer'

const StudentForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const applicant = event.target.student.value
    const course = event.target.course.value
    props.createStudent(applicant, course)
    //props.notify(`anecdote ${content} created`, 5)
    event.target.student.value = ''
    event.target.course.value = ''
  }

  return (
    <div>
      <h2>Create a new application</h2>
      <form onSubmit={handleSubmit}>
        Name:
        <div><input name='student'/></div>
        Course:
        <div><input name='course'/></div>
        <button>create</button>
      </form>
    </div>
  )
}


export default connect(
  null,
  { createStudent }
)(StudentForm)

import React from 'react'
import { connect } from 'react-redux'
import { createStudent} from './../reducers/studentReducer'

class StudentForm extends React.Component {

  handleSubmit = async (event) => {
    event.preventDefault()
    const applicant = event.target.student.value
    const course = event.target.course.value
    this.props.createStudent(applicant, course) 
    //this.props.notify(`anecdote ${content} created`, 5)
    event.target.student.value = ''
    event.target.course.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='student'/></div>
          <div><input name='course'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}


export default connect(
  null,
  { createStudent }
)(StudentForm)

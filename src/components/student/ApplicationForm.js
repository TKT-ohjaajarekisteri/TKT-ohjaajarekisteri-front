import React from 'react'
import { connect } from 'react-redux'
import { applyForCourse } from '../../reducers/studentReducer'
import { notify } from '../../reducers/notificationReducer'


const ApplicationForm = ({ notify, id, applyForCourse }) => {


  console.log(id, 'applyform loggedUsers id')


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {
      learningopportunity_id: event.target.course_id.value,
      course_name: event.target.course_name.value,
      period: event.target.period.value,
      year: event.target.year.value
    }

    //console.log(logged_id, 'contactFormuseri id')
    applyForCourse(formContent, id)
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
  { notify, applyForCourse }
)(ApplicationForm)
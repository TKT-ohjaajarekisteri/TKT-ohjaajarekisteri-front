import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/studentReducer'
import { notify } from '../../reducers/notificationReducer'


const ContactDetailsForm = ({ createStudent, notify, id }) => {


  console.log(id, 'contactForms loggedUsers id')


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {

      nickname: event.target.nickname.value,
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
      // learningopportunity_id: event.target.course_id.value,
      // course_name: event.target.course_name.value,
      // period: event.target.period.value,
      // year: event.target.year.value
    }

    //console.log(logged_id, 'contactFormuseri id')
    createStudent(formContent, id)
    notify(`The application for ${formContent.nickname} has been sent`, 5)

    event.target.nickname.value = ''
    event.target.phonenumber.value = ''
    event.target.email.value = ''

    // event.target.course_id.value = ''
    // event.target.course_name.value = ''
    // event.target.period.value = ''
    // event.target.year.value = ''
  }

  return (
    <div className='studentForm'>

      <h2>Contact details </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Student information:</h3>
        </div>
        <div>
          <label>Preferred firstname: </label>
          <input type="text" name='nickname' />
        </div>

        <div>
          <label>Phone: </label>
          <input type="text" name='phonenumber' />
        </div>

        <div>
          <label>Email: </label>
          <input type="text" name='email' />
        </div>

        {/* <h3>Course Information:</h3>

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
        </div> */}
        <button className="button" type="submit">send</button>
      </form>
    </div>
  )
}


export default connect(
  null,
  { createStudent, notify }
)(ContactDetailsForm)
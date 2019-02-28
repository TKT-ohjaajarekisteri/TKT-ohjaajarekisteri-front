import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../reducers/actionCreators/studentActions'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { notify } from '../../reducers/actionCreators/notificationActions'


export const ContactDetailsForm = ({ updateLoggedUser, id }) => { //for future: notify

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formContent = {

      nickname: event.target.nickname.value,
      phone: event.target.phonenumber.value,
      email: event.target.email.value,
    }

    // Update the notification functionality in the action
    updateLoggedUser(formContent, id)
    // notify(`The application for ${formContent.nickname} has been sent`, 5)

    event.target.nickname.value = ''
    event.target.phonenumber.value = ''
    event.target.email.value = ''
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
        <button className="button" type="submit">send</button>
      </form>
    </div>
  )
}


export default connect(
  null,
  { createStudent, notify, updateLoggedUser }
)(ContactDetailsForm)
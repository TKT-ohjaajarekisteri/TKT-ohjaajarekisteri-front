import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation } from '../../reducers/actionCreators/studentActions'
import { notify } from '../../reducers/actionCreators/notificationActions'


export const ContactDetailsUpdateForm = ({ updateLoggedUser, notify, id, }) => {

  const [input, setInput] = useState({ nickname: '', phone: '', email: '' })

  // TODO: GET OLD VALUES FROM BACKEND

  // useEffect(() => {
  //   getContactInformation(id)
  //   console.log('def', defaultInput)
  //   setInput(defaultInput)
  // }, [])

  // const getInfo = async () => {
  //   await getContactInformation(id)
  //   setInput(defaultInput)
  // }

  const handleChange = (event) => {
    const newInput = {
      ...input,
      [event.target.name]: event.target.value
    }
    setInput(newInput)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateLoggedUser(input, id)

    // TODO: Update the notification functionality in the action
    notify(`Information updated for ${input.nickname}`, 5)
    setInput({ nickname: '', phone: '', email: ''  })
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
          <input
            type="text"
            value={input.nickname}
            name='nickname'
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={input.phone}
            name='phone'
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name='email'
            value={input.email}
            onChange={handleChange} 
          />
        </div>
        <button className="button" type="submit">send</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    defaultInput: state.students.contactInformation
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation }
)(ContactDetailsUpdateForm)
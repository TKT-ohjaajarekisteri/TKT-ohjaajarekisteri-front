import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLoggedUser } from '../../reducers/actionCreators/loginActions'
import { getContactInformation, getStudentCourses,  deleteAppliedCourse } from '../../reducers/actionCreators/studentActions'
import CourseWithDel from './CourseWithDel'
import { notify } from '../../reducers/actionCreators/notificationActions'


export const ContactDetailsUpdateForm = ({ loggedUser, courses, updateLoggedUser, notify, id, getContactInformation, getStudentCourses, defaultInput }) => {

  const [input, setInput] = useState({ nickname: '', phone: '', email: '' })

  // TODO: GET OLD VALUES FROM BACKEND

  useEffect(() => {
    getContactInformation(id)
    console.log(getStudentCourses(id), 'geeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeettttttttttt')
    getStudentCourses(id)
    console.log(id, 'mistääääääääää tämä id ooooooooooooooooooooooooooooooonnnnnnn')
    console.log('def', defaultInput)
  }, [])

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


  //event handler for deleting specific course application
  const onClick = (id) => (event) => {
    deleteAppliedCourse(id, loggedUser.user_id)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateLoggedUser(input, id)

    // TODO: Update the notification functionality in the action
    notify(`Information updated for ${input.nickname}`, 5)
    setInput({ nickname: '', phone: '', email: '' })
  }

  return (
    <div>
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
              placeholder={defaultInput.nickname}
            />
          </div>

          <div>
            <label>Phone: </label>
            <input
              type="text"
              value={input.phone}
              name='phone'
              onChange={handleChange}
              placeholder={defaultInput.phone}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="text"
              name='email'
              value={input.email}
              onChange={handleChange}
              placeholder={defaultInput.email}
            />
          </div>
          <button className="button" type="submit">send</button>
        </form>
      </div>

      <div className="courseList">
        <h2>Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Year</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {console.log(courses,'byäääääääääääääääääääääääääääääääääääääääää') }
            {courses.map(course =>
              <CourseWithDel course={course} key={course.course_id} onClick = {onClick} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    defaultInput: state.students.contactInformation,
    courses: state.students.studentCourses,
    loggedUser:state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { notify, updateLoggedUser, getContactInformation, getStudentCourses }
)(ContactDetailsUpdateForm)
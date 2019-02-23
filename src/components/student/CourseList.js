import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { initializeCourseApplication, setChecked, sendApplication } from '../../reducers/actionCreators/courseApplicationActions'

export const CourseList = (props) => {

  useEffect(() => {
    props.initializeCourseApplication()
  },
  []
  )

  const handleSubmit = () => {
    const coursesToApplyTo = props.courses.filter(c => c.checked).map(c => c.course_id)

    if (coursesToApplyTo.length !== 0) {
      props.sendApplication(coursesToApplyTo)
    }
  }

  const handleChange = (id) => (e) => {
    const isChecked = e.target.checked
    const name = e.target.name
    console.log(id)
    console.log(name)
    console.log(isChecked)

    props.setChecked(id, isChecked)
  }

  const style = {
    overflowY: 'auto',
    maxHeight: '75vh',
    margin: '10px'
  }

  return (
    <div className="courseApplicationList">
      <h2>Courses</h2>
      {<input className="button" type="submit" value="apply" onClick={handleSubmit} />}
      <div className="tableScroll" style={style} >
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Year</th>
              <th>Period</th>
              <th>To apply</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map(course =>
              <Course
                course={course}
                key={course.course_id}
                onChange={handleChange}
              />
            )}
          </tbody>
        </table>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseApplication.courses,
    loading: state.courseApplication.coursesLoading,
    loggedUser: state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { initializeCourseApplication, setChecked, sendApplication }
)(CourseList)
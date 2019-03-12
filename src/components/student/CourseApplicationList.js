import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { initializeCourseApplication, setChecked, sendApplication } from '../../reducers/actionCreators/courseApplicationActions'
import { Table, Button } from 'react-bootstrap'
export const CourseApplicationList = (props) => {

  useEffect(() => {
    props.initializeCourseApplication()
  },
  []
  )

  const handleSubmit = () => {
    const coursesToApplyTo = props.courses.filter(c => c.checked).map(c => c.course_id)
    if (coursesToApplyTo.length !== 0) {
      props.sendApplication(props.loggedUser.user.user_id, coursesToApplyTo)
    }
  }

  const handleChange = (id) => (e) => {
    const isChecked = e.target.checked
    props.setChecked(id, isChecked)
  }



  return (
    <div className="courseApplicationList">
      <h2>Courses</h2>
      {/* {<input className="button" type="submit" value="apply" onClick={handleSubmit} />} */}
      <div className="buttonApply">
        <Button onClick={handleSubmit} variant="dark" type="submit" >
        apply
        </Button></div>


      <Table bordered hover>
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
          {props.courses && props.courses.map(course =>
            <Course
              course={course}
              key={course.course_id}
              onChange={handleChange}
            />
          )}
        </tbody>
      </Table>
    </div>
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
)(CourseApplicationList)
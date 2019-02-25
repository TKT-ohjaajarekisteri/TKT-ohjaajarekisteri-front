import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { getStudentCourses } from '../../reducers/actionCreators/studentActions'


export const CourseList = (props) => {

  useEffect(() => {
    props.getStudentCourses(props.loggedUser.user.user_id)
  },
  []
  )

  return (
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
          {props.courses.map(course =>
            <Course course={course} key={course.course_id} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.students.studentCourses,
    loggedUser: state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { getStudentCourses }
)(CourseList)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { getStudentCourses } from '../../reducers/actionCreators/studentActions'
import { Table } from 'react-bootstrap'

export const CourseList = (props) => {

  useEffect(() => {
    props.getStudentCourses(props.loggedUser.user.user_id)
  },
  []
  )

  return (
    <div className="courseList">
      <h2>Courses</h2>
      <div className="container">
        <table className = "table table-fixed">
          <thead>
            <tr>
              <th className="col-xs-4">Cooooooooooooooooooooode</th>
              <th className="col-xs-8">Name</th>
              <th className="col-xs-2">Year</th>
              <th className="col-xs-2">Period</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map(course =>
              <Course course={course} key={course.course_id} />
            )}
          </tbody>
        </table>
      </div>
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
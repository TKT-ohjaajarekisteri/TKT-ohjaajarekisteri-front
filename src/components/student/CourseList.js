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
      {/* //<div className="container"> */}  {/* <table className = "table table-fixed"> */}
      <Table striped bordered hover>
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
      </Table>
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
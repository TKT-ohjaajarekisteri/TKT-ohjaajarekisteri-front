import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStudentCourses, deleteAppliedCourse } from '../../reducers/actionCreators/studentActions'
import CourseWithDel from './CourseWithDel'
import { Table } from 'react-bootstrap'

export const StudentCourseList = ({ loggedUser, courses, id, getStudentCourses, deleteAppliedCourse }) => {

  useEffect(() => {
    getStudentCourses(id)
  }, [])

  //event handler for deleting specific course application, tells studentactions to deleteApliedCourse
  const removeApply = (id) => {
    return () => {
      if (window.confirm('Do you want to delete this course from your application?')) {
        deleteAppliedCourse(id, loggedUser.user.user_id)
      }
    }
  }

  return (
    <div className="courseList">
      <h2>My Applications</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Year</th>
            <th>Period</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course =>
            <CourseWithDel
              course={course}
              key={course.course_id}
              onClick={removeApply}
            />
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
  { getStudentCourses, deleteAppliedCourse }
)(StudentCourseList)

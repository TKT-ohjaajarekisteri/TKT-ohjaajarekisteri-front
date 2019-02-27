import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStudentCourses, deleteAppliedCourse } from '../../reducers/actionCreators/studentActions'
import CourseWithDel from './CourseWithDel'
import { notify } from '../../reducers/actionCreators/notificationActions'

export const StudentCourseList = ({ notify, loggedUser, courses, id, getStudentCourses, deleteAppliedCourse }) => {

  useEffect(() => {
    getStudentCourses(id)
  }, [])


  //event handler for deleting specific course application, tells studentactions to deleteApliedCourse
  const removeApply = (id) => {
    return () => {
      deleteAppliedCourse(id, loggedUser.user.user_id)
      notify('Course is removed', 5)
    }
  }

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
          {courses.map(course =>
            <CourseWithDel course={course} key={course.course_id} onClick={removeApply} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    courses: state.students.studentCourses,
    loggedUser: state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { getStudentCourses, deleteAppliedCourse, notify }
)(StudentCourseList)
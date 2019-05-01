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

  //Returns a date object from date format DD.MM.YYYY String
  const parseDate = (date) => {
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6, date.length)
    return new Date(year + '-' + month + '-' + day)
  }

  return (
    <div className="courseList">
      <h2>My Applications</h2>
      <div className="grayInfoText">
        <p>Students who are chosen as teaching assistants are notified by email before the course begins. You may also view your application status on this page.</p>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{ verticalAlign: 'middle' }}>Code</th>
            <th style={{ verticalAlign: 'middle' }}>Name</th>
            <th className='centerColumn' style={{ verticalAlign: 'middle' }}>Period</th>
            <th className='centerColumn' style={{ verticalAlign: 'middle' }}>From</th>
            <th className='centerColumn' style={{ verticalAlign: 'middle' }}>To</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses
            .sort((a, b) => { return parseDate(b.startingDate) - parseDate(a.startingDate) })
            .sort((a, b) => { return a.Application.accepted - b.Application.accepted })
            .map(course =>
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

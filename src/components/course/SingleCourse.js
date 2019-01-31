import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeCourses } from '../../reducers/courseReducer'
import { initializeApplicants } from '../../reducers/singleCourseReducer'
import Student from '../student/Student'

export const SingleCourse = (props) => {

  useEffect(() => {
    initializeCourses()
    initializeApplicants(courseId)
  },
  []
  )

  let { courseId, course, applicants, initializeApplicants, initializeCourses } = props

  return (
    <div>
      <div className="courseHeader">
        {!course ? null :
          <h2>{course.course_id}  {course.learningopportunity_id} {course.course_name}  {course.year} {course.period}</h2>
        }
      </div>

      <h3>Applicants for course:</h3>
      <table>
        <thead>
          <tr>
            <th>Student number</th>
            <th>Frist name</th>
            <th>Nickname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(student =>
            <Student key={student.student_id} student={student} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    applicants: state.singleCourse
  }
}

export default connect(
  mapStateToProps,
  { initializeApplicants, initializeCourses }
)(SingleCourse)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeCourses } from '../../reducers/courseReducer'
import { initializeApplicants } from '../../reducers/singleCourseReducer'

export const SingleCourse = (props) => {

  useEffect(() => {
    initializeCourses()
    initializeApplicants(courseId)
    console.log('has init applicants')
  },
  []
  )

  let { courseId, course, studs, initializeApplicants, initializeCourses } = props

  return (
    <div>
      {console.log('render singleCourse')}
      <div className="courseHeader">
        {console.log(course, 'course name')}
        {!course ? null :
          <h2>{course.course_id} {course.learningopportunity_id}  {course.course_name}  {course.year}  {course.period} </h2>
        }
      </div>

      <div> <h2>Applicants for course:</h2> </div>
      {console.log(studs, 'applicants')}

      {studs.map(student =>
        <div key={student.student_id} className="studentDiv">
          {student.student_id}
          {student.first_name}
          {student.nickname}
          {student.email}
        </div>
      )}

    </div>
  )
}

//get stuff from store //students:state.applicants,
const mapStateToProps = (state) => {
  return {
    studs: state.singleCourse
  }
}

export default connect(
  mapStateToProps,
  { initializeApplicants, initializeCourses }
)(SingleCourse)
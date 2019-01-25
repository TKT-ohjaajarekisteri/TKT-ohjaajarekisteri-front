import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSingleCourse } from '../../reducers/courseReducer'
import { initializeApplicants } from '../../reducers/studentReducer'

const SingleCourse=({ course, toinen, stu }) => {
  useEffect(() => {
    initializeSingleCourse(course.id)
    //initializeApplicants (course.id)
    initializeApplicants ()
    //console.log(course,'initsingleCourseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' )
  },
  []
  )
  return(
    <div>
      <div className="content">
        {console.log(toinen, 'coursesinglepage')}
        <h2>{course.id} {course.learningopportunity_id}  {course.course_name}  {course.year}  {course.period} </h2>
      </div>

      <div> <h2>Applicants for course:</h2> </div>
      {console.log(stu)}
      {stu.map(student =>
        <div key={student.id}>
          {student.id}
          {student.first_name}
          {student.nickname}
          {student.email}
        </div>
      )}
      {stu.map(s =>
        <div key={s.id}>
          {s.id}
          {s.first_name}
          {s.nickname}
          {s.email}
        </div>
      )}
    </div>
  )
}
//get stuff from store //students:state.applicants,
const mapStateToProps = (state) => {
  return {
    toinen:state.single,
    stu:state.applicants
  }
}

export default connect(
  mapStateToProps,
  { initializeSingleCourse, initializeApplicants }
)(SingleCourse)
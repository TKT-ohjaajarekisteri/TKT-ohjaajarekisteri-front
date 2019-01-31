import React from 'react'
import { connect } from 'react-redux'
import Course from './Course'

export const CourseList = (props) => {
  return (
    <div className="courseList">
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Code</th>
            <th>Name</th>
            <th>Year</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course =>
            <Course course={course} key={course.course_id}/>
          )}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  // const coursesToShow = state.courses
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CourseList)
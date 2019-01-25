import React from 'react'
import { connect } from 'react-redux'
import Course from './Course'

const CourseList = (props) => {

  return(
    <div>
      <table>
        <h2>Courses</h2>
        <tr>
          <th>Number</th>
          <th>Course code/id</th>
          <th>Course name</th>
          <th>Course year</th>
          <th>Course period</th>
        </tr>
      </table>

      {props.coursesToShow.map(course =>
        <Course key={course.id}
          course={course}/>
      )}
    </div>
  )}

const mapStateToProps = (state) => {
  const coursesToShow = state.courses
  return {
    coursesToShow
  }
}

export default connect(mapStateToProps)(CourseList)
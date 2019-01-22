import React from 'react'
import { connect } from 'react-redux'
import Course from './Course'

const CourseList = (props) => (
  <table>
    <div>
      <h2>Courses</h2>

      <tr>
        <th>Number</th>
        <th>Course code/id</th>
        <th>Course name</th>
        <th>Course year</th>
        <th>Course period</th>
      </tr>

      {props.coursesToShow.map(c =>
        <Course key={c.course.id}
          number = {c.id}
          id= {c.course.id}
          name= {c.course.name}
          year ={c.course.year}
          period={c.course.period}
        />
      )}

    </div>
  </table>
)

const mapStateToProps = (state) => {
  const coursesToShow = state.courses
  return {
    coursesToShow
  }
}

export default connect(mapStateToProps)(CourseList)
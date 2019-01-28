import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Course = ({ course }) => {
  const courseStyle = {
    paddingTop: 10,
    paddingLeft: 20,
    border:  'solid',
    borderWidth: 1,
    marginBottom: 5,

  }
  return(
    <div style={courseStyle}>
      <div>
        <tr>
          <Link to={`/courses/${course.course_id}`}>
            <td> {course.course_id}</td>
            <td> {course.learningopportunity_id}</td>
            <td> {course.course_name}</td>
            <td>{course.year}</td>
            <td>{course.period}</td></Link>
        </tr>
      </div>
    </div>
  )}

export default Course
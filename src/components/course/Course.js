import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
  const courseStyle = {
    paddingTop: 10,
    paddingLeft: 20,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,

  }
  return (
    <tr style={courseStyle}>
        <td> {course.course_id}</td>
        <td><Link to={`/courses/${course.course_id}`}>{course.learningopportunity_id}</Link></td>
        <td> {course.course_name}</td>
        <td>{course.year}</td>
        <td>{course.period}</td>
    </tr>
  )
}

export default Course
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
      <div className = "course_id"><td> {course.course_id}</td></div>
      <td><Link to={`/courses/${course.course_id}`}>{course.learningopportunity_id}</Link></td>
      <div className = "name"> <td> {course.course_name}</td></div>
      <div className = "year"><td>{course.year}</td></div>
      <div className = "period"><td>{course.period}</td></div>
    </tr>
  )
}

export default Course
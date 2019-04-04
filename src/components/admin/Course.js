import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {

  return (

    <tr>
      <td><Link to={`courses/${course.course_id}`}>{course.learningopportunity_id}</Link></td>
      <td className = "name"> {course.course_name}</td>
      <td className = "year" >{course.year}</td>
      <td className = "period" >{course.period}</td>
    </tr>
  )
}

export default Course
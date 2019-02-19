import React from 'react'

const Course = ({ course }) => {

  return (

    <tr>
      <td className = "learningopportunity_id">{course.learningopportunity_id}</td>
      <td className = "name"> {course.course_name}</td>
      <td className = "year">{course.year}</td>
      <td className = "period">{course.period}</td>
    </tr>
  )
}

export default Course
import React from 'react'

const Summary = ({ course }) => {

  return (

    <tr>
      <td className = "courses">{course.course_id}</td>
      <td className = "name"> {course.course_name}</td>
      <td className = "year">{course.year}</td>
      <td className = "period">{course.period}</td>
    </tr>
  )
}

export default Summary
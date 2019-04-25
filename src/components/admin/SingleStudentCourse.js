import React from 'react'
import { Badge } from 'react-bootstrap'

const SingleStudentCourse = ({ course }) => {

  return (
    <tr className = "singleStudentCourse">
      <td className="learningopportunity_id">{course.learningopportunity_id}</td>
      <td className="name"> {course.course_name}</td>
      <td className="year centerColumn">{course.year}</td>
      <td className="period centerColumn">{course.periods[0]}</td>
      <td className= "accepted centerColumn">{
        course.Application.accepted ?
          <Badge variant="success">Accepted</Badge>
          :
          <Badge variant="secondary">Applied</Badge>
      }
      </td>
    </tr>
  )

}

export default SingleStudentCourse
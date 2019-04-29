import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleStudentCourse = ({ course }) => {

  return (
    <tr className="singleStudentCourse">
      <td><Link to={`/courses/${course.course_id}`}>{course.learningopportunity_id}</Link></td>
      <td className="name"> {course.course_name}</td>
      <td className="year centerColumn">{course.year}</td>
      <td className="period centerColumn">{course.periods[0]}</td>
      <td className="accepted centerColumn">{
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
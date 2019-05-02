import React from 'react'
import DeleteButton from '../common/DeleteButton'
import { Badge } from 'react-bootstrap'

const CourseWithDel = ({ course, onClick }) => {

  return (
    <tr>
      <td className="learningopportunity_id">
        <a
          target='_blank'
          rel="noopener noreferrer"
          href={`https://courses.helsinki.fi/fi/${course.learningopportunity_id}`}
        >
          {course.learningopportunity_id}
        </a>
      </td>
      <td className="name"> {course.course_name}</td>
      <td className="period centerColumn">{course.periods[0]}</td>
      <td className="startDate centerColumn">{course.startingDate}</td>
      <td className="endDate centerColumn">{course.endingDate}</td>
      <td className="delete centerColumn">
        {course.Application.accepted ?
          <Badge variant="success">Accepted</Badge>
          :
          <DeleteButton id={course.course_id} onClick={onClick} />
        }
      </td>
    </tr>
  )
}

export default CourseWithDel
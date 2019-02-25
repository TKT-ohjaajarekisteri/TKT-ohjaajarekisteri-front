import React from 'react'
import DeleteButton from '../common/DeleteButton'

const CourseWithDel = ({ course, onClick }) => {

  return (

    <tr>
      <td className = "learningopportunity_id">{course.learningopportunity_id}</td>
      <td className = "name"> {course.course_name}</td>
      <td className = "year">{course.year}</td>
      <td className = "period">{course.period}</td>
      <td className = "delete">
        <DeleteButton
          id={course.course_id}
          onClick={ onClick }
        />
      </td>

    </tr>
  )
}

export default CourseWithDel
import React from 'react'
import CheckBox from '../common/Checkbox'

const Course = ({ course, onChange }) => {

  return (
    <tr>
      <td className="learningopportunity_id">{course.learningopportunity_id}</td>
      <td className="name"> {course.course_name}</td>
      <td className="year">{course.year}</td>
      <td className="period">{course.period}</td>
<<<<<<< Updated upstream
      <td className="checkbox">
=======
      <td className="checkbox"> */}
      <td>{course.learningopportunity_id}</td>
      <td> {course.course_name}</td>
      <td>{course.year}</td>
      <td>{course.period}</td>
      <td>
>>>>>>> Stashed changes
        <CheckBox
          id={course.course_id}
          name={course.learningopportunity_id}
          checked={course.checked}
          onChange={onChange}
        />
      </td>
    </tr>
  )
}

export default Course
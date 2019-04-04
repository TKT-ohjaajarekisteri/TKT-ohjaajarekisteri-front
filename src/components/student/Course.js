import React from 'react'
import CheckBox from '../common/Checkbox'

const Course = ({ course, onChange }) => {

  return (
    <tr>
      <td className="learningopportunity_id">{course.learningopportunity_id}</td>
      <td className="name"> {course.course_name}</td>
      <td className="year">{course.year}</td>
      <td className="period">{course.period}</td>
      <td className="checkbox listCheckbox">
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
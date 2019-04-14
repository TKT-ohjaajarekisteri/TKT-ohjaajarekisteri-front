import React from 'react'
import CheckBox from '../common/Checkbox'

const Course = ({ course, onChange, grey }) => {

  if (grey) {
    return (
      <tr className = "grey">
        <td className="learningopportunity_id">{course.learningopportunity_id}</td>
        <td className="name"> {course.course_name}</td>
        <td className="year centerColumn">{course.year}</td>
        <td className="period centerColumn">{course.period}</td>
        <td className="checkbox listCheckbox">
        </td>
      </tr>
    )
  }

  return (
    <tr className= "notGrey">
      <td className="learningopportunity_id">{course.learningopportunity_id}</td>
      <td className="name"> {course.course_name}</td>
      <td className="year centerColumn">{course.year}</td>
      <td className="period centerColumn">{course.period}</td>
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
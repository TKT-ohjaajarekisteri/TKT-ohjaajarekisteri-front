import React from 'react'
import CheckBox from '../common/Checkbox'

const Course = ({ course, checked, onChange }) => {

  return (

    <tr>
      <td className = "learningopportunity_id">{course.learningopportunity_id}</td>
      <td className = "name"> {course.course_name}</td>
      <td className = "year">{course.year}</td>
      <td className = "period">{course.period}</td>
      <td className = "checkbox"><CheckBox
        name ={course.learningopportunity_id}
        id={course.course_id}
        checked= {checked}
        onChange= {onChange}
      /></td>
    </tr>
  )
}

export default Course
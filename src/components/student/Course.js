import React from 'react'
import CheckBox from '../common/Checkbox'
import { Badge } from 'react-bootstrap'

const Course = ({ course, onChange, grey }) => {
  // the course version is chosen accordingly to if loggedUser has applied to the course
  if (grey) {
    return (
      <tr className = "grey">
        <td className="learningopportunity_id">{course.learningopportunity_id}</td>
        <td className="name"> {course.course_name}</td>
        <td className="period centerColumn"> {course.periods[0]}</td>
        <td className="startDate centerColumn">{course.startingDate}</td>
        <td className="endDate centerColumn">{course.endingDate}</td>
        <td className= "checkbox centerColumn"><Badge variant="secondary">Applied</Badge>
        </td>
      </tr>
    )
  }

  return (
    <tr className= "notGrey">
      <td className="learningopportunity_id">{course.learningopportunity_id}</td>
      <td className="name"> {course.course_name}</td>
      <td className="period centerColumn"> {course.periods[0]}</td>
      <td className="startDate centerColumn">{course.startingDate}</td>
      <td className="endDate centerColumn">{course.endingDate}</td>
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

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Course = ({ course, setHidden }) => {

  let acceptedStudentsAmount = 0
  course.students.forEach(student => {
    if(student.Application.accepted) acceptedStudentsAmount++
  })

  return (

    <tr>
      <td><Link to={`courses/${course.course_id}`}>{course.learningopportunity_id}</Link></td>
      <td className = 'name'> {course.course_name}</td>
      <td className = 'year centerColumn' >{course.year}</td>
      <td className = 'period centerColumn' >{course.period}</td>
      <td className = 'applicants centerColumn' >{acceptedStudentsAmount}/{course.students.length}</td>
      <td>
        {
          course.hidden
            ? <Button className="buttonUnhide" onClick={setHidden(course.course_id)} variant="outline-secondary" type="submit" >
              Unhide
            </Button>

            : <Button className="buttonHide" onClick={setHidden(course.course_id)} variant="outline-secondary" type="submit" >
              Hide
            </Button>
        }
      </td>
    </tr>
  )
}

export default Course
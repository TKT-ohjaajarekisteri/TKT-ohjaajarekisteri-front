import React from 'react'
import Student from './Student'
import { Link } from 'react-router-dom'

const Summary = ({ course }) => {
  // style={ { border:'2px solid #6c757d' } }
  return (
    <tr className="SummaryTableList" >
      <td className="courses">{course.course_id}</td>
      <td className="name"><div className="summaryCourse">{course.course_name}</div> </td>
      <td className="year">{course.year}</td>
      <td className="period">{course.period}</td>

      {/* <tbody>
        {course.students.map(student =>
          <Student key={student.student_id} student={student} />
        )}
      </tbody>  */}


      {/* <td className="student">*/}
      <tbody>
        {course.students.map(s =>
          <tr key={s.student_id}>
            <td><Link to={`students/${s.student_id}`}>{s.student_number}</Link></td>
            <td> {s.first_names}{s.last_name}</td>
            <td> {s.Application.accepted ? "x" : "-"}</td>
            <td>{s.no_english ? " " : "English"}</td>
          </tr>
        )}

      </tbody>
    </tr>
  )
}

export default Summary
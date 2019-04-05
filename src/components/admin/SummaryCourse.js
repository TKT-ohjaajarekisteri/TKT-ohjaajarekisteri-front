import React from 'react'
import Student from './Student'

const Summary = ({ course }) => {

  return (

    <tr>
      <td className="courses">{course.course_id}</td>
      <td className="name"> {course.course_name}</td>
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
            <td>{s.student_number}</td>
            <td> {s.first_names}{s.last_name}</td>
            <td>{s.email}</td>
            <td>{s.phone}</td>
          </tr>
        )}
      </tbody>
    </tr>
  )
}

export default Summary
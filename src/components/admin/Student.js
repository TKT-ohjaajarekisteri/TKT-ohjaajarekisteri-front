import React from 'react'

const Student = ({ student }) => {
  return (
    <tr>
      <td>{student.student_number}</td>
      <td>{student.first_names}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
    </tr>
  )
}

export default Student
import React from 'react'

const Student = ({ student }) => {

  return (
    <tr>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
    </tr>
  )
}

export default Student
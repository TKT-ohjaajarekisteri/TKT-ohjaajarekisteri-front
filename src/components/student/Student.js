import React from 'react'

const Student = ({ student }) => {
  const studentStyle = {
    paddingTop: 10,
    paddingLeft: 20,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,

  }
  return (
    <tr style={studentStyle}>
      <td className="studentNumber">{student.student_number}</td>
      <td>{student.first_name}</td>
      <td>{student.nickname}</td>
      <td>{student.email}</td>
    </tr>
  )
}

export default Student
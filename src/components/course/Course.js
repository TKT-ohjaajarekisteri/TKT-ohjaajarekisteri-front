import React from 'react'


const Course = ({ id, name, year, period, number }) => {
  const courseStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border:  'solid',
    borderWidth: 1,
    marginBottom: 5,

  }

  return(
    <div style={courseStyle}>

      <tr>
        <td> {number}</td>
        <td> {id}</td>
        <td> {name}</td>
        <td>{year}</td>
        <td>{period}</td>
      </tr>

    </div>
  )
}
export default Course
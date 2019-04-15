import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { getSingleStudent } from '../../reducers/actionCreators/singleStudentActions'
import { Table } from 'react-bootstrap'

export const SingleStudent = ({ studentId, getSingleStudent, student }) => {
  useEffect(() => {
    //gets a single student data from db for admin by student_id
    getSingleStudent(studentId)
  }, [])

  return(
    <div className="singleStudent" >
      <h2>Student information</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Student number</th>
            <th>First names</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          <tr className='Student' key={student.student_id}>
            <td>{student.student_number}</td>
            <td>{student.first_names}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.no_english ? '' : 'English'}</td>
          </tr>
        </tbody>
      </Table>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr className='Experience' key={student.student_id}>
            <td>{student.experience}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    student: state.singleStudent.singleStudent
  }
}

export default connect(
  mapStateToProps,
  { getSingleStudent }
)(SingleStudent)

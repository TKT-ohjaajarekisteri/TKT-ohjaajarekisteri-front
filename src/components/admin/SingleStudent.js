import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { getSingleStudent } from '../../reducers/actionCreators/singleStudentActions'
import { Table } from 'react-bootstrap'

export const SingleStudent = ({ studentId, getSingleStudent } ) => { //student
  // console.log('singlestudentin saama id', studentId)
  //console.log(loggedUser, 'loggedUser from singleStudent')

  useEffect(() => {
    // console.log('singlestudentin useeffectin id', studentId)
    getSingleStudent(studentId)
  }, [])

  return(
    <div>

      <h1>Student information</h1>
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
          {/* <tr className='Student' key={student.student_id}>
            <td>{student.student_number}</td>
            <td>{student.first_names}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.no_english}</td>
          </tr> */}
        </tbody>
      </Table>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className='Experience' key={student.student_id}>
            <td>{student.experience}</td>
          </tr> */}
        </tbody>
      </Table>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // student: state.SingleStudent.student
  }
}

export default connect(
  mapStateToProps,
  { getSingleStudent }
)(SingleStudent)

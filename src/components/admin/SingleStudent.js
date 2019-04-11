import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { getSingleStudent } from '../../reducers/actionCreators/singleStudentActions'
import { Table } from 'react-bootstrap'

export const SingleStudent = ({ courseId, studentId, getSingleStudent, singleStudent } ) => {
  console.log('singlestudentin student', singleStudent)
  //console.log(loggedUser, 'loggedUser from singleStudent')

  useEffect(() => {
    console.log('singlestudentin useeffectin idt', studentId, courseId)
    getSingleStudent(courseId, studentId)
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
          <tr className='Student' key={singleStudent.student_id}>
            <td>{singleStudent.student_number}</td>
            <td>{singleStudent.first_names}</td>
            <td>{singleStudent.last_name}</td>
            <td>{singleStudent.email}</td>
            <td>{singleStudent.phone}</td>
            <td>{singleStudent.no_english}</td>
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
          <tr className='Experience' key={singleStudent.student_id}>
            <td>{singleStudent.experience}</td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('SingleStudentin state.singleStudent', state.singleStudent)
  return {
    singleStudent: state.singleStudent
  }
}

export default connect(
  mapStateToProps,
  { getSingleStudent }
)(SingleStudent)

import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { getSingleStudent } from '../../reducers/actionCreators/singleStudentActions'
import { Table } from 'react-bootstrap'

export const SingleStudent = ({ courseId, studentId, getSingleStudent, student }) => {
  console.log('singlestudentin student', student)

  //console.log('singlestudentin student email', singleStudent.email)
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
          {/* <tr className='Experience' key={singleStudent.student_id}>
            <td>{singleStudent.experience}</td>
          </tr> */}
        </tbody>
      </Table>

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('SingleStudentin state', state)
  return {
    student: state.singleStudent.singleStudent
  }

}

export default connect(
  mapStateToProps,
  { getSingleStudent }
)(SingleStudent)

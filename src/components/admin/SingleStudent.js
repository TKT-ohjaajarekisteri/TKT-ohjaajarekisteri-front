import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSingleStudent, getSingleStudentCourses } from '../../reducers/actionCreators/singleStudentActions'
import { Table } from 'react-bootstrap'
import { SingleStudentCourseList } from './SingleStudentCourseList'

export const SingleStudent = ({ studentId, getSingleStudent, getSingleStudentCourses, student, courses }) => {
  useEffect(() => {
    //gets a single student data from db for admin by student_id
    getSingleStudent(studentId)
  }, [])

  useEffect(() => {
    //gets courses for single student data from db for admin by student_id
    getSingleStudentCourses(studentId)
  }, [])

  return (
    <div>
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
              <td width='50'>
                {student.no_english ?
                  <img
                    src={require('../../Images/finnishFlag.png')}
                    width='30'
                    height='20'
                    alt="Finnish Flag"
                  />
                  :
                  <img
                    src={require('../../Images/englishFlag.svg')}
                    width='30'
                    height='20'
                    alt="English Flag"
                  />
                }
              </td>
            </tr>
          </tbody>
        </Table>
        {student.experience === ''
          ? null
          : <Table bordered hover>
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
        }
      </div>
      <SingleStudentCourseList courses={courses} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    student: state.singleStudent.singleStudent,
    courses: state.singleStudent.studentCourses
  }
}

export default connect(
  mapStateToProps,
  { getSingleStudent, getSingleStudentCourses }
)(SingleStudent)

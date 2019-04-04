import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from '../common/Checkbox'
import { initializeSingleCourse, setEmail, setStudentAccepted, sendAcceptedModified, setStudentGroups } from '../../reducers/actionCreators/singleCourseActions'
import { Table, Button } from 'react-bootstrap'


export const SingleCourse = ({
  course,
  applicants,
  initializeSingleCourse,
  courseId,
  email,
  setStudentAccepted,
  setEmail,
  setStudentGroups,
  sendAcceptedModified }) => {

  useEffect(() => {
    initializeSingleCourse(courseId)
  },
  []
  )

  const handleAcceptedSubmit = (e) => {
    e.preventDefault()
    const acceptedModified = applicants
      .filter(a => a.accepted !== a.accepted_checked || a.groups !== a.groups_textbox)
      .map(a => {
        return {
          student_id: a.student_id,
          accepted: a.accepted !== a.accepted_checked ? a.accepted_checked : a.accepted,
          groups: a.groups !== a.groups_textbox ? a.groups_textbox : a.groups
        }
      })

    if (acceptedModified.length !== 0) {
      sendAcceptedModified(courseId, acceptedModified)
    }
  }

  const handleEmailToChange = (id) => (e) => {
    const email_to_checked = e.target.checked
    setEmail(id, email_to_checked)
  }

  const handleAcceptedChange = (id) => (e) => {
    const accepted = e.target.checked
    setStudentAccepted(id, accepted)
  }

  const handleGroupsChange = (id) => (e) => {
    const groups = Number(e.target.value)
    setStudentGroups(id, groups)
  }

  const href = `https://outlook.office.com/?path=/mail/action/compose&to=${email.to}&subject=${email.subject}&body=${email.body}`
  return (
    <div>
      <div className="courseHeader">
        {!course ? null :
          <h2>{course.learningopportunity_id} {course.course_name}  {course.year} period:{course.period}</h2>
        }
      </div>
      <div className='row' style={{ paddingBottom: 15 }}>
        <div className='col'>
          <h3>Applicants for course:</h3>
        </div>
        <div className='col'>
          <Button className='float-right' target="_blank" rel="noopener noreferrer" href={href} variant='dark'>Send email</Button>
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Student number</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Groups</th>
            <th>Email to</th>
            <th>Accepted</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(student =>
            <tr className='Student' key={student.student_id}>
              <td>{student.student_number}</td>
              <td>{student.first_names}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>
                <input type='number' id={student.student_number} onChange={handleGroupsChange(student.student_id)} defaultValue={student.groups_textbox} style={{ width: 50 }} min='0'></input>
              </td>
              <td>
                <Checkbox
                  className='align-items-center emailTo'
                  name={student.student_number}
                  checked={student.email_to_checked}
                  id={student.student_id}
                  onChange={handleEmailToChange}
                />
              </td>
              <td>
                <Checkbox
                  className='align-items-center accepted'
                  name={student.student_number}
                  checked={student.accepted_checked}
                  id={student.student_id}
                  onChange={handleAcceptedChange}
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button className='float-right' id='saveApplied' variant='dark' onClick={handleAcceptedSubmit}>Save</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    course: state.singleCourse.course,
    applicants: state.singleCourse.applicants,
    email: state.singleCourse.email
  }
}

export default connect(
  mapStateToProps,
  { initializeSingleCourse, setEmail, setStudentAccepted, sendAcceptedModified, setStudentGroups }
)(SingleCourse)
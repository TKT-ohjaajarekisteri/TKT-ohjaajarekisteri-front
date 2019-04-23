import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from '../common/Checkbox'
import { initializeSingleCourse, setEmail, setStudentAccepted, sendAcceptedModified, setStudentGroups } from '../../reducers/actionCreators/singleCourseActions'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

  const getModified = (applicants) => {
    return applicants
      .filter(a => a.accepted !== a.accepted_checked || a.groups !== a.groups_textbox)
      .map(a => {
        return {
          student_id: a.student_id,
          accepted: a.accepted !== a.accepted_checked ? a.accepted_checked : a.accepted,
          groups: a.groups !== a.groups_textbox ? a.groups_textbox : a.groups
        }
      })
  }

  const handleAcceptedSubmit = (e) => {
    e.preventDefault()
    const acceptedModified = getModified(applicants)
    if (acceptedModified.length !== 0) {
      sendAcceptedModified(courseId, acceptedModified)
    }
  }

  const handleEmailToChange = (id) => (e) => {
    const email_to_checked = e.target.checked
    setEmail(id, email_to_checked) // Updates email message fields
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
          <div>
            <h2>{course.learningopportunity_id} {course.course_name}</h2>
            <table className="courseHeaderData">
              <colgroup>
                <col width="100" />
                <col width="80" />
              </colgroup>
              <tbody>
                <tr>
                  <td>Year</td>
                  <td>{course.year}</td>
                </tr>
                <tr>
                  <td>Periods</td>
                  <td>{course.periods.toString()}</td>
                </tr>
                <tr>
                  <td>Groups</td>
                  <td>{course.groups ? course.groups : 0}</td>
                </tr>
                <tr>
                  <td>Start date</td>
                  <td>{course.startingDate}</td>
                </tr>
                <tr>
                  <td>End date</td>
                  <td>{course.endingDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
      <div className='row' style={{ paddingBottom: 15 }}>
        <div className='col'>
          <h3>Applicants for course:</h3>
        </div>
        <div className='col'>
          {
            getModified(applicants).length === 0 ?
              <Button className='float-right' target="_blank" rel="noopener noreferrer" href={href} variant='dark'>Send email</Button>
              :
              <div className='emailHidden'>Save changes to Send email</div>
          }

        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Student number</th>
            <th>First names</th>
            <th>Last name</th>
            <th>Language</th>
            <th>Email</th>
            <th>Groups</th>
            <th>Email to</th>
            <th>Accepted</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(student =>
            <tr className='Student' key={student.student_id}>
              <td><Link to={`/admin/students/${student.student_id}/info`}>{student.student_number}</Link></td>
              <td>{student.first_names}</td>
              <td>{student.last_name}</td>
              <td>{student.no_english ? '' : 'English'}</td>
              <td>{student.email}</td>
              <td>
                <input type='number' id={student.student_number} onChange={handleGroupsChange(student.student_id)} defaultValue={student.groups_textbox} style={{ width: 50 }} min='0'></input>
              </td>
              <td>
                <Checkbox
                  className='align-items-center emailTo listCheckbox'
                  name={student.student_number}
                  checked={student.email_to_checked}
                  id={student.student_id}
                  onChange={handleEmailToChange}
                />
              </td>
              <td>
                <Checkbox
                  className='align-items-center accepted listCheckbox'
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
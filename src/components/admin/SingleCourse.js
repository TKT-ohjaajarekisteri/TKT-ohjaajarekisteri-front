import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from '../common/Checkbox'
import singleCourseActions from '../../reducers/actionCreators/singleCourseActions'
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
  sendAcceptedModified
}) => {

  useEffect(() => {
    initializeSingleCourse(courseId)
  }, [])

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

  const handleAcceptedSubmit = (event) => {
    event.preventDefault()
    const acceptedModified = getModified(applicants)
    if (acceptedModified.length !== 0) {
      sendAcceptedModified(courseId, acceptedModified)
    }
  }

  const handleEmailToChange = (id) => (event) => {
    const email_to_checked = event.target.checked
    setEmail(id, email_to_checked) // Updates email message fields
  }

  const handleAcceptedChange = (id) => (event) => {
    const accepted = event.target.checked
    setStudentAccepted(id, accepted)
  }

  const handleGroupsChange = (id) => (event) => {
    const groups = Number(event.target.value)
    setStudentGroups(id, groups)
  }

  const checkAllEmailBoxes = (e) => {
    e.preventDefault()
    applicants.forEach(applicant => {
      setEmail(applicant.student_id, applicant.accepted_checked)
    })
  }

  const checkAllAcceptedBoxes = (e) => {
    e.preventDefault()
    applicants.forEach(applicant => {
      setStudentAccepted(applicant.student_id, true)
    })
  }

  const checkNotAcceptedEmailBoxes = (e) => {
    e.preventDefault()
    applicants.forEach(applicant => {
      setEmail(applicant.student_id, !applicant.accepted_checked)
    })
  }

  const hrefAccept = `https://outlook.office.com/?path=/mail/action/compose&to=${email.to}&subject=${email.subject}&body=${email.bodyAccepted}`
  const hrefNotAccept = `https://outlook.office.com/?path=/mail/action/compose&to=${email.to}&subject=${email.subject}&body=${email.bodyNotAccepted}`

  return (
    <div>
      <div className="courseHeader">
        {!course ?
          null
          :
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


        {getModified(applicants).length === 0 ?
          <div>
            <Button
              className='button float-right'
              target="_blank"
              rel="noopener noreferrer"
              href={hrefAccept}
              variant='dark'
              style={{ float: 'right', margin: 5 }}
            >
              Send acceptance email
            </Button>
            <Button
              className='float-right'
              target="_blank"
              rel="noopener noreferrer"
              href={hrefNotAccept}
              variant='outline-secondary'
              style={{ float: 'right', margin: 5 }}
            >
              Send refusal email
            </Button>
          </div>
          :
          <div className='emailHidden'>Save changes to send email</div>
        }
        <Button className='button float-right' style={{ float: 'right', margin: 5 }} id='saveApplied' onClick={handleAcceptedSubmit}>Save</Button>

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
            <th className='acceptedCol' >Accepted</th>
            <th className='emailToCol' >Email to</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(student =>
            <tr className='Student' key={student.student_id}>
              <td>
                <Link to={`/admin/students/${student.student_id}/info`}>
                  {student.student_number}
                </Link>
              </td>
              <td>{student.first_names}</td>
              <td>{student.last_name}</td>
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
              <td>{student.email}</td>
              <td>
                <input
                  type='number'
                  id={student.student_number}
                  onChange={handleGroupsChange(student.student_id)}
                  defaultValue={student.groups_textbox}
                  style={{ width: 50 }}
                  min='0'
                />
              </td>
              <td className='centerColumn'>
                <Checkbox
                  className='accepted listCheckbox'
                  name={student.student_number}
                  checked={student.accepted_checked}
                  id={student.student_id}
                  onChange={handleAcceptedChange}
                />
              </td>
              <td className='centerColumn'>
                <Checkbox
                  className='emailTo listCheckbox'
                  name={student.student_number}
                  checked={student.email_to_checked}
                  id={student.student_id}
                  onChange={handleEmailToChange}
                />
              </td>
            </tr>
          )}
          <tr>
            <td style={{ visibility: 'hidden', borderLeftStyle: 'hidden', borderBottomStyle: 'hidden' }} colSpan='6'></td>
            <td className='centerColumn' ><Button className='button' id='selectAccepted' variant="outline-secondary" onClick={checkAllAcceptedBoxes}>Check all</Button></td>
            <td className='centerColumn' ><Button className='button' id='selectEmails' style={{ width: '110px' }} variant="outline-secondary" onClick={checkAllEmailBoxes}>Check accepted</Button></td>
          </tr>
          <tr>
            <td style={{ visibility: 'hidden', borderLeftStyle: 'hidden', borderBottomStyle: 'hidden' }} colSpan='7'></td>
            <td className='centerColumn' ><Button id='selectEmailsUnaccepted' style={{ width: '110px' }} variant="outline-secondary" onClick={checkNotAcceptedEmailBoxes}>Check not accepted</Button></td>
          </tr>
        </tbody>
      </Table>
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
  { ...singleCourseActions }
)(SingleCourse)
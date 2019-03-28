import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSingleCourse } from '../../reducers/singleCourseReducer'
import Checkbox from '../common/Checkbox'
import { Table, Button } from 'react-bootstrap'


export const SingleCourse = ({ course, applicants, initializeSingleCourse, courseId }) => {

  useEffect(() => {
    initializeSingleCourse(courseId)
  },
  []
  )

  const handleEmailToChange = (id) => {
  }

  const handleAcceptedChange = (id) => {
  }

  const email = {
    to: applicants.map(student => student.email.concat(';')).join(''),
    subject: 'Subject template',
    body: 'Body template'
  }

  const href = `https://outlook.office.com/?path=/mail/action/compose&to=${email.to}&subject=${email.subject}&body=${email.body}`


  return (
    <div>
      <div className="courseHeader">
        {!course ? null :
          <h2>{course.learningopportunity_id} {course.course_name}  {course.year} period:{course.period}</h2>
        }
      </div>
      <div className='row'>
        <div className='col'>
          <h3>Applicants for course:</h3>
        </div>
        <div className='col' style={{paddingBottom: 5}}>
          <Button className='float-right' target="_blank" rel="noopener noreferrer" href={href} variant='dark'>Email applicants</Button>
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
            <tr key={student.student_id}>
              <td>{student.student_number}</td>
              <td>{student.first_names}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td> 
                <input type='number' defaultValue='0' style={{width: 50}} min='0'></input>
              </td>
              <td>
                <Checkbox className='align-items-center emailTo' id={student.student_id} onChange={handleEmailToChange}></Checkbox>
              </td>
              <td>
                <Checkbox className='align-items-center accepted' id={student.student_id} onChange={handleAcceptedChange} ></Checkbox>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button className='float-right' variant='dark'>Save</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    course: state.singleCourse.course,
    applicants: state.singleCourse.applicants
  }
}

export default connect(
  mapStateToProps,
  { initializeSingleCourse }
)(SingleCourse)
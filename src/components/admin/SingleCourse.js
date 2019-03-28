import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSingleCourse } from '../../reducers/singleCourseReducer'
import Student from './Student'
import { Table, Button } from 'react-bootstrap'


export const SingleCourse = ({ course, applicants, initializeSingleCourse, courseId }) => {

  useEffect(() => {
    initializeSingleCourse(courseId)
  },
  []
  )

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
        <div className='col' style={{paddingBottom: 2}}>
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
          </tr>
        </thead>
        <tbody>
          {applicants.map(student =>
              <Student key={student.student_id} student={student} />
          )}
        </tbody>
      </Table>
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
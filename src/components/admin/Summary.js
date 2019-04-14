import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSummary } from '../../reducers/actionCreators/summaryActions'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Summary = ({ initializeSummary, summaryList }) => {

  useEffect(() => {
    initializeSummary()
  },
  []
  )
  return (
    <div>
      <h2>All courses and applicants</h2>
      <Table className='summaryCourseList' bordered hover size="sm" >
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Year</th>
            <th>Period</th>
            <th>Applicants</th>
          </tr>
        </thead>
        <tbody>
          {summaryList.filter(course => course.students.length !== 0)
            .map(course =>
              <tr key={course.course_id}>
                <td >{course.course_id}</td>
                <td className="courseName">{course.course_name}</td>
                <td>{course.year}</td>
                <td>{course.period}</td>
                <td>
                  <Table className='summaryStudentList' style={{ padding: '0', margin: '0' }} hover size="sm">
                    <tbody>
                      {course.students.map(s =>
                        <tr key={s.student_id} >
                          <td><Link to={`students/${s.student_id}`}>{s.student_number}</Link></td>
                          <td className="studentName"> {s.first_names} {s.last_name}</td>
                          <td width='20px'> {s.Application.accepted ? 'x' : ''}</td>
                          <td width='70px'> {s.no_english ? '' : 'English'}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </td>
              </tr>
            )}
        </tbody>
      </Table>

    </div >
  )
}


const mapStateToProps = (state) => {
  //const summaryList=state.summary
  console.log(state, 'koko store summarysta')
  return {
    summaryList: state.summary.summary
  }
}

export default connect(
  mapStateToProps,
  { initializeSummary }
)(Summary)

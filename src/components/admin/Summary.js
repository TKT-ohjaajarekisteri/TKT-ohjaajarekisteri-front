import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSummary } from '../../reducers/actionCreators/summaryActions'
import SummaryCourse from './SummaryCourse'
import { Table } from 'react-bootstrap'



export const Summary = ({ initializeSummary, summaryToShow }) => {
  useEffect(() => {
    initializeSummary()

  },
    []
  )
  return (
    <div>
      <h2>Hello World</h2>
      <Table className='courseList' bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Year</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          {console.log(summaryToShow, 'kaikki')}
          {summaryToShow.summary
            .map(course =>
              <SummaryCourse
                course={course}
                key={course.course_id}
              />
            )}
        </tbody>
      </Table>

    </div>
  )
}




const mapStateToProps = (state) => {
  //const summaryToShow=state.summary
  console.log(state, 'koko store summarysta')
  return {
    summaryToShow: state.summary
  }
}

export default connect(
  mapStateToProps,
  { initializeSummary }
)(Summary)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeSummary } from '../../reducers/actionCreators/summaryActions'


const Summary = (props) => {
  useEffect(() => {
    props.initializeSummary()
  },
  []
  )
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  const summaryToShow = state.summary
  console.log('studentsToShow',summaryToShow)
  return {
    summaryToShow
  }
}

export default connect(
  mapStateToProps,
  { initializeSummary }
)(Summary)

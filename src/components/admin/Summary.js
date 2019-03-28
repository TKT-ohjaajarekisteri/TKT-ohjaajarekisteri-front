import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeStudents } from '../../reducers/actionCreators/studentActions'

const Summary = (props) => {
  useEffect(() => {
    props.initializeStudents()
  },
  []
  )
  return (
    <div id="students">
      <h2>Students</h2>
      {props.studentsToShow.map(s =>
        <div key={s.student_id}>
          {s.student_number}
          {s.first_names}
          {s.last_name}
          {s.email}
          {s.phonenumber}

        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const studentsToShow = state.students
  return {
    studentsToShow
  }
}

export default connect(
  mapStateToProps,
  { initializeStudents }
)(Summary)

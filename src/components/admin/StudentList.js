import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeStudents } from '../../reducers/studentReducer'

const StudentList = (props) => {
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
          {s.first_name}
          {s.last_name}
          {s.nickname}
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
)(StudentList)
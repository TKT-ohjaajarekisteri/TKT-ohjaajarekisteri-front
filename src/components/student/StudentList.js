import React from 'react'
import { connect } from 'react-redux'


const StudentList = (props) => (

  <div id="students">
    <h2>Students</h2>
    {props.studentsToShow.map(s =>
      <div key={s.student_id}>
        {s.student_id}
        <div>{s.first_name}</div>
        {s.nickname}
        {s.email}
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => {
  const studentsToShow = state.students
  return {
    studentsToShow
  }
}

export default connect(mapStateToProps)(StudentList)

import React from 'react'
import { connect } from 'react-redux'


const StudentList = (props) => (

  <div>
    <h3>Student</h3>
    {props.studentsToShow.map(s =>
      <div key={s.id}>
        {s.student.nickname}
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

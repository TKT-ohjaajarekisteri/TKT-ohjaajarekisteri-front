import React from 'react'
import { connect } from 'react-redux'


const StudentList = (props) => (

  <div>
    <h2>Students</h2>
    {props.studentsToShow.map(s =>
      <div key={s.student.id}>
        {s.id}
        {s.student.first_names}
        {s.student.nickname}
        {s.student.email}
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

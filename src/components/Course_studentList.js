import React from 'react'
import { connect } from 'react-redux'


const Course_studentList = (props) => (


  <div>
    <h1>Course:</h1>
    <h3>Students:</h3>
    {props.applicantsToShow.map(student =>
      <div key={student.id}>
        {student.id}
        {student.first_names}
        {student.nickname}
        {student.email}
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => {
  const applicantsToShow = state.applicants
  return {
    applicantsToShow
  }
}

export default connect(mapStateToProps)(Course_studentList)

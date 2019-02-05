import React from 'react'
import { connect } from 'react-redux'

const SingleStudent = ({ user }) => {

  const studentsInfo=this.props.students.find(s => s.username===user.username)
  return(

    <div>
      <h1>Student</h1>
      <h2>{user.username}</h2>

      {console.log(user.username, 'username')}

      <ul>
        {studentsInfo.this.props.students.map(student =>
          <li key={student.id}>{student.email}</li>
        )}
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}
//kutsutaan  reducereista actioncreator metodeja
export default connect(
  mapStateToProps,
  {  }
)(SingleStudent)

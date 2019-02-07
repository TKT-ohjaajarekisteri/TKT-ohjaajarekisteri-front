import React from 'react'
import { connect } from 'react-redux'


export const SingleStudent = ({ loggedUser }) => {

  console.log(loggedUser, 'usersingelstidenkkkkkkkkkkkkkkkkkkkkt')
  //tietokantahaku studentin tiedoille
  //   const studentsInfo=this.props.students.find(s => s.id===user.username)
  return(

    <div>
      <h1>Single Student</h1>

      {!loggedUser ? null :
        <div>
          <h2>rooli:{loggedUser.user.role}, id:{loggedUser.user.user_id}</h2>
        </div>
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { }
)(SingleStudent)

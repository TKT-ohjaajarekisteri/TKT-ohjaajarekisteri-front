import React from 'react'
import { connect } from 'react-redux'


export const SingleStudent = ({ loggedUser }) => {

  //console.log(loggedUser, 'loggedUser from singleStudent')
  //tähän tieto kantahaku yksittäisen studentin tiedoille

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

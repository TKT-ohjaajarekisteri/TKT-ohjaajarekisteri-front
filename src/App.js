import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import ContactDetailForm from './components/student/ContactDetailsForm'
import ApplicationForm from './components/student/ApplicationForm'
import Notification from './components/Notification'
import SingleCourse from './components/course/SingleCourse'
import SingleStudent from './components/student/SingleStudent'
import CourseList from './components/course/CourseList'
import Home from './components/Home'

import { getStudent } from './reducers/studentReducer'
import { saveUser } from './reducers/loginReducer'
import { logout } from './reducers/loginReducer'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
//import tokenCheckService from './services/tokenCheck'

const App = (props) => {


  useEffect(() => {

    if (window.localStorage.getItem('loggedInUser')) {
      userCheck()
    }
  },
  []
  )
  const userCheck = async () => {
    let token
    try {
      token = JSON.parse(window.localStorage.getItem('loggedInUser')).token
      // await tokenCheckService.userCheck(token)
      props.saveUser(JSON.parse(window.localStorage.getItem('loggedInUser')))
      return true
    } catch (e) {
      console.log(e.response)
      props.saveUser(null)
      return false
    }
  }

  const courseById = (id) => {
    return props.courses.find(c => Number(c.course_id) === Number(id))
  }


  return (
    <div>
      <Router >
        <div>
          <div>

            <Link to="/">Home</Link> &nbsp;

            {props.loggedUser && props.loggedUser.user.role === 'student'
              ? <Link to="/register">Contact details</Link>
              : <em></em>} &nbsp;

            {props.loggedUser && props.loggedUser.user.role === 'student'
              ? <Link to="/apply">Apply</Link>
              : <em></em>} &nbsp;


            {props.loggedUser && props.loggedUser.user.role === 'admin'
              ? <Link to="/courses">Courses</Link>
              : <em></em>} &nbsp;

            {/* tulee vasta myöhemmässä sprintissa
            {props.loggedUser && props.loggedUser.user.role === 'admin'
              ? <Link to="/students">Students</Link>
              : <> </>}  &nbsp; */}

            {props.loggedUser
              ? <em> You are logged in <input onClick={props.logout} type="button" value="logout" />&nbsp;</em>
              : <Link to="/login">login</Link>} &nbsp;


          </div>
          <h1>TKK-Assistant Register</h1>

          <Notification />

          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/register" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'student'
              ? (<ContactDetailForm id = { props.loggedUser.user.user_id } />)
              : (<Redirect to="/login" />)} />

          <Route exact path="/apply" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'student'
              ? (<ApplicationForm id = { props.loggedUser.user.user_id } />)
              : (<Redirect to="/login" />)} />

          {/*not used in 2 sprint
           <Route exact path="/students" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'admin'
              ? (<StudentList />)
              : (<Redirect to="/login" />)} /> */}


          <Route exact path="/courses" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'admin'
              ? (<CourseList />)
              : (<Redirect to="/login" />)} />


          <Route exact path='/courses/:id' render={({ match }) =>
            <SingleCourse courseId={match.params.id} course={courseById(match.params.id)} />} />

          <Route path="/login" render={({ history }) =>
            <LoginForm history={history} />} />


          <Route path="/students/:id" render={() => <SingleStudent />} />
        </div>
      </Router>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state, 'koko storeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  return {
    loggedUser: state.loggedUser

  }
}

export default connect(
  mapStateToProps,
  { logout, saveUser, getStudent }
)(App)

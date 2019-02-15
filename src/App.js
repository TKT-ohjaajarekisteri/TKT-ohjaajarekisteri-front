import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Switch, Redirect } from 'react-router-dom'

// Components
import LoginForm from './components/LoginForm'
import ContactDetailsForm from './components/student/ContactDetailsForm'
import ApplicationForm from './components/student/ApplicationForm'
import CourseList from './components/course/CourseList'
import SingleCourse from './components/course/SingleCourse'
import PrivateRoute from './components/PrivateRoute'
import Notification from './components/Notification'
import Home from './components/Home'

// Actions
import { logout, initLoggedUser } from './reducers/loginReducer'

const App = (props) => {

  useEffect(() => {
    props.initLoggedUser()
  },[])

  const { loggedUser } = props
  const hasContactDetails = (
    loggedUser &&
    loggedUser.user.role === 'student' &&
    loggedUser.user.email)
  const isAdmin = loggedUser && loggedUser.user.role === 'admin'


  return (
    <div>
      <h1>TKT-Assistant Register</h1>
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <div className="NavBar">
            {loggedUser && loggedUser.user.role === 'student'
              ?<Link to="/">Courses</Link>
              : <em></em>} &nbsp;

            {/* {props.loggedUser && props.loggedUser.user.role === 'student'
              ? <Link to="/register">Contact details</Link>
              : <em></em>} &nbsp; */}

            {loggedUser && loggedUser.user.role === 'admin'
              ? <Link to="/admin/courses">Courses</Link>
              : <em></em>} &nbsp;


            {/* {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/contact-info">Contact details</Link>
              : <em></em>} &nbsp; */}

            {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/apply">Apply</Link>
              : <em></em>} &nbsp;


            {/* tulee vasta myöhemmässä sprintissa
            {props.loggedUser && props.loggedUser.user.role === 'admin'
              ? <Link to="/students">Students</Link>
              : <> </>}  &nbsp; */}

            {loggedUser
              ? <em> You are logged in <input onClick={props.logout} type="button" value="logout" />&nbsp;</em>
              : <Link to="/login">Login</Link>} &nbsp;

          </div>


          <Notification />
          <Switch>


            <PrivateRoute
              exact path="/"
              redirectPath="/login"
              condition={(loggedUser !== null )}
              render={() => <Redirect to="/courses"/>}
            />


            <PrivateRoute
              exact path="/login"
              redirectPath="/contact-info"
              condition={loggedUser === null}
              render={() => <LoginForm />}
            />

            <PrivateRoute
              exact path="/contact-info"
              redirectPath="/apply" //login?
              condition={!hasContactDetails && loggedUser}
              render={() => <ContactDetailsForm id={loggedUser.user.user_id} />}
            />


            <PrivateRoute
              exact path="/apply"
              redirectPath="/login"
              condition={hasContactDetails && loggedUser}
              render={() => <ApplicationForm  id={loggedUser.user.user_id}/>}
            />


            <PrivateRoute
              exact path="/courses"
              redirectPath="/login"
              condition={hasContactDetails && loggedUser}
              render={() => <CourseList />}
            />

            <PrivateRoute
              exact path="/courses/:id"
              redirectPath="/contact-info"
              condition={(hasContactDetails || isAdmin) && loggedUser}
              render={({ match }) => <SingleCourse courseId={match.params.id} />}
            />

          </Switch>

          {/*not used in 2 sprint
           <Route exact path="/students" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'admin'
              ? (<StudentList />)
              : (<Redirect to="/login" />)} /> */}


          {/* <Route path="/students/:id" render={() => <SingleStudent />} /> */}
        </React.Fragment>
      </Router>
    </div >
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    loggedUser: state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { logout, initLoggedUser }
)(App)

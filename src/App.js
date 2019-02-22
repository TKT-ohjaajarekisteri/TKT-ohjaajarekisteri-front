import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Switch, Redirect, Route } from 'react-router-dom'

// Components
import LoginForm from './components/LoginForm'
import ContactDetailsForm from './components/student/ContactDetailsForm'
import ContactDetailsUpdateForm from './components/student/ContactDetailsUpdateForm'
import ApplicationForm from './components/student/ApplicationForm'
import AdminCourseList from './components/admin/CourseList'
import StudentCourseList from './components/student/CourseList'
import SingleCourse from './components/admin/SingleCourse'
import PrivateRoute from './components/common/PrivateRoute'
import Notification from './components/common/Notification'

// Actions
import { logout, initLoggedUser } from './reducers/actionCreators/loginActions'

const App = (props) => {

  useEffect(() => {
    props.initLoggedUser()
  }, [])

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

            {/* {props.loggedUser && props.loggedUser.user.role === 'student'
              ? <Link to="/register">Contact details</Link>
              : <em></em>} &nbsp; */}

            {loggedUser && loggedUser.user.role === 'admin'
              ? <Link to="/admin/courses">Courses</Link>
              : <em></em>} &nbsp;

            {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/courses">Courses</Link>
              : <em></em>} &nbsp;


            {/* {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/contact-info">Contact details</Link>
              : <em></em>} &nbsp; */}

            {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/apply">Apply</Link>
              : <em></em>} &nbsp;

            {loggedUser && loggedUser.user.role === 'student'
              ? <Link to="/update-info">Update info</Link>
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

          {/*
            Works like a typical switch statement; it checks for matches and
            runs the first thing matching the requested path
          */}
          <Switch>

            {/* THIS ROUTE PROTECTS ALL ROUTES UNDER "/admin" */}
            <PrivateRoute
              path="/admin"
              redirectPath="/"
              condition={loggedUser && isAdmin}
            >
              <Route exact path="/admin/courses" render={() => <AdminCourseList />} />
              <Route
                exact path="/admin/courses/:id"
                redirectPath="/contact-info"
                condition={(hasContactDetails || isAdmin) && loggedUser}
                render={({ match }) => <SingleCourse courseId={match.params.id} />}
              />
            </PrivateRoute>

            <PrivateRoute
              exact path="/login"
              redirectPath="/"
              condition={loggedUser === null}
              render={() => <LoginForm />}
            />

            {/* USER IS REDIRECTED HERE IF THEY DON'T HAVE AN EMAIL ADDED */}
            <PrivateRoute
              exact path="/contact-info"
              redirectPath="/login"
              condition={!hasContactDetails && loggedUser}
              render={() => <ContactDetailsForm id={loggedUser.user.user_id} />}
            />

            {/* USERS CAN UPDATE THEIR INFORMATION */}
            {/* <PrivateRoute
              exact path="/update-info"
              redirectPath="/login"
              condition={loggedUser}
              render={() => <ContactDetailsUpdateForm id={loggedUser.user.user_id} />}
            /> */}

            {/* THIS ROUTE PROTECTS ALL ROUTES UNDER "/" */}
            <PrivateRoute path="/" redirectPath="/contact-info" condition={loggedUser && hasContactDetails}>
              <Route
                exact path='/'
                render={() => <Redirect to='/apply' />}
              />
              <Route exact path="/courses" render={() => <StudentCourseList />} />
              <Route
                exact path="/apply"
                render={() => <ApplicationForm id={loggedUser.user.user_id} />}
              />
              <Route
                exact path="/update-info"
                render={() => <ContactDetailsUpdateForm id={loggedUser.user.user_id} />}
              />
            </PrivateRoute>
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

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { NavBar } from './components/common/NavBar'

// Components
import LoginForm from './components/LoginForm'
import ContactDetailsForm from './components/student/ContactDetailsForm'
import ContactDetailsUpdateForm from './components/student/ContactDetailsUpdateForm'
import AdminCourseList from './components/admin/CourseList'
import Summary from './components/admin/Summary'
import StudentDelete from './components/admin/StudentDelete'
import UpdatePasswordForm from './components/admin/UpdatePasswordForm'
import CourseApplicationList from './components/student/CourseApplicationList'
import SingleCourse from './components/admin/SingleCourse'
import SingleStudent from './components/admin/SingleStudent'
import PrivateRoute from './components/common/PrivateRoute'
import Notification from './components/common/Notification'
import StudentCourseList from './components/student/StudentCourseList'

// Actions
import { logout, initLoggedUser } from './reducers/actionCreators/loginActions'

const App = (props) => {

  useEffect(() => {
    props.initLoggedUser()
  }, [])

  const { loggedUser } = props
  const hasContactDetails =
    (
      loggedUser
      &&
      loggedUser.user.role === 'student'
      &&
      loggedUser.user.email
    )
  const isAdmin = loggedUser && loggedUser.user.role === 'admin'

  return (
    <div>
      { /* eslint-disable */}
      <Router basename={process.env.PUBLIC_URL}>
        { /* eslint-enable */}
        <React.Fragment>

          <NavBar
            loggedUser={loggedUser}
            logout={props.logout}
          />

          <Notification />
          <div className="container">
            {/*
            Works like a typical switch statement; it checks for matches and
            runs the first thing matching the requested path
          */}
            <Switch>

              {/* THIS ROUTE PROTECTS ALL ROUTES UNDER "/admin" */}
              <PrivateRoute
                path="/admin"
                redirectPath="/login"
                condition={loggedUser && isAdmin}
              >
                <Route exact path="/admin/courses" render={() => <AdminCourseList />} />
                <Route exact path="/admin/summary" render={() => <Summary />} />
                <Route exact path="/admin/studentDelete" render={() => <StudentDelete />} />
                <Route
                  exact path="/admin/courses/:id"
                  render={({ match }) => <SingleCourse courseId={match.params.id} />}
                />
                <Route
                  exact path="/admin/students/:id/info"
                  render={({ match }) => <SingleStudent studentId={match.params.id} />}
                />
                <Route
                  exact path="/admin"
                  render={() => <UpdatePasswordForm />}
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


              {/* THIS ROUTE PROTECTS ALL ROUTES UNDER "/" */}
              <PrivateRoute path="/" redirectPath="/login" condition={loggedUser}>
                <PrivateRoute path="/" redirectPath="/admin/courses" condition={!isAdmin}>
                  <PrivateRoute path="/" redirectPath="/contact-info" condition={hasContactDetails}>
                    <Route
                      exact path='/'
                      render={() => <Redirect to='/apply' />}
                    />
                    <Route
                      exact path="/apply"
                      render={() => <CourseApplicationList id={loggedUser.user.user_id} />}
                    />

                    {/* USERS CAN UPDATE THEIR INFORMATION */}
                    <Route
                      exact path="/update-info"
                      render={() => <ContactDetailsUpdateForm id={loggedUser.user.user_id} />}
                    />
                    {/* USERS CAN SEE THEIR APPLICATIONS */}
                    <Route
                      exact path="/applications"
                      render={() => <StudentCourseList id={loggedUser.user.user_id} />}
                    />
                  </PrivateRoute>
                </PrivateRoute>
              </PrivateRoute>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </div >

  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { logout, initLoggedUser }
)(App)

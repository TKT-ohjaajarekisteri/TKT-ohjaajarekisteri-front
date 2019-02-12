import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Switch, Redirect } from 'react-router-dom'

// Components
import LoginForm from './components/LoginForm'
import ContactDetailForm from './components/student/ContacDetailstForm'
import PrivateRoute from './components/PrivateRoute'
import Notification from './components/Notification'
// import SingleCourse from './components/course/SingleCourse'
// import SingleStudent from './components/student/SingleStudent'
// import CourseList from './components/course/CourseList'
import Home from './components/Home'

// Actions
import { logout, saveUser } from './reducers/loginReducer'

//import tokenCheckService from './services/tokenCheck'

const App = (props) => {
  useEffect(() => {
    if (window.localStorage.getItem('loggedInUser')) {
            userCheck()
          }
  }, [])

    const userCheck = async () => {
    let token
    try {
      token = JSON.parse(window.localStorage.getItem('loggedInUser')).token
      // await tokenCheckService.userCheck(token)
      props.saveUser(JSON.parse(window.localStorage.getItem('loggedInUser'))
      )
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

  const { loggedUser } = props
  const hasContactDetails = (
    loggedUser && 
    loggedUser.user.role === 'student' && 
    loggedUser.user.email)
  const isAdmin = loggedUser && loggedUser.user.role === 'admin'


  return (
    <div>
      <h1>TKT-Assistant Register</h1>
      <Router >
        <React.Fragment>
        <div className="NavBar">
          <Link to="/">Home</Link> &nbsp;
  
            {/* {props.loggedUser && props.loggedUser.user.role === 'student'
              ? <Link to="/register">Contact details</Link>
              : <em></em>} &nbsp; */}

          {loggedUser && loggedUser.user.role === 'admin'
            ? <Link to="/admin/courses">Courses</Link>
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
          condition={(loggedUser !== null)}
          render={() => <Redirect to="/courses"/>}
          />
          
          <PrivateRoute
            exact path="/admin/courses"
            redirectPath="/"
            condition={isAdmin}
            render={() => <Home />}
          />

          <PrivateRoute
            exact path="/login"
            redirectPath="/"
            condition={loggedUser === null}
            render={() => <LoginForm />}
          />

          <PrivateRoute
            path="/contact-info"
            redirectPath="/login"
            condition={!hasContactDetails && loggedUser}
            render={() => <ContactDetailForm id={loggedUser.user.user_id} />}
          />

          <PrivateRoute
            path="/courses"
            redirectPath="/contact-info"
            condition={(hasContactDetails || isAdmin) && loggedUser}
            render={() => <Home />}
          />
        </Switch>


        {/* <Route exact path="/register" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'student'
              ? (<ContactDetailForm id={props.loggedUser.user.user_id} />)
              : (<Redirect to="/login" />)} /> */}


        {/*not used in 2 sprint
           <Route exact path="/students" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'admin'
              ? (<StudentList />)
              : (<Redirect to="/login" />)} /> */}


        {/* <Route exact path="/courses" render={() =>
            props.loggedUser && props.loggedUser.user.role === 'admin'
              ? (<CourseList />)
              : (<Redirect to="/login" />)} /> */}


        {/* <Route exact path='/courses/:id' render={({ match }) =>
            <SingleCourse courseId={match.params.id} course={courseById(match.params.id)} />} /> */}

        {/* <Route path="/students/:id" render={() => <SingleStudent />} /> */}
        </React.Fragment>
      </Router>
    </div >
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'koko store')
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { logout, saveUser }
)(App)

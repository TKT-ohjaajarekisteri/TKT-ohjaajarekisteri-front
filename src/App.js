import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import StudentForm from './components/student/StudentForm'
import StudentList from './components/student/StudentList'
import Notification from './components/Notification'
import SingleCourse from './components/course/SingleCourse'
import CourseList from './components/course/CourseList'

import { logout } from './reducers/loginReducer'
import { initializeCourses } from './reducers/courseReducer'
import { initializeStudents } from './reducers/studentReducer'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import tokenCheckService from './services/tokenCheck'

const App = (props) => {
  useEffect(() => {
    //props.initializeStudents()
   // props.initializeCourses()
 
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
      await tokenCheckService.userCheck(token)
      this.props.loginUser(
        JSON.parse(window.localStorage.getItem('loggedInUser'))
      )
      return true
    } catch (e) {
      console.log(e.response)
      //this.props.loginuser(null)
      return false
    }
  }

  const courseById = (id) => {
    return props.courses.find(c => Number(c.course_id) === Number(id))
  }


  return (
    <div>
      <h1>TKT Assistant Register</h1>
      <Router>
        <div>
          <div>
       
            <Link to="/">RegisterForm</Link> &nbsp;
            {/* <Link to="/students">Students</Link> &nbsp; */}
            <Link to="/courses">Courses</Link> &nbsp;    
            {props.user
                ? <em> You are logged in <Link to="/logout">logout</Link> &nbsp;</em>//{props.user.username} 
                : <input onClick={props.logout} type="button" value="logout" />} 
          </div>

          <Notification />
          <Route exact path="/login" render={() => <LoginForm />} />
          {/* <Route exact path="/logout" render={() => <LoginForm />} /> */}
          <Route exact path="/" render={() => <StudentForm />} />
          <Route path="/students" render={() => <StudentList />} />
          <Route exact path="/courses" render={() => <CourseList />} />
          <Route exact path='/courses/:id' render={({ match }) =>
            <SingleCourse courseId={match.params.id} course={courseById(match.params.id)} />} />
              <Route path="/logout" render={() => <Redirect to="/login" />}/>
        </div>
      </Router>
    </div>
  )
}




const mapStateToProps = (state) => {   
   console.log(state,'koko storeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  return {
    courses: state.courses,
    user: state.loggedUser

  }
}

export default connect(
  mapStateToProps,
  { initializeStudents, initializeCourses, logout}
)(App)

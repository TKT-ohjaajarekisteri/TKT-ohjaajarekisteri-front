import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import StudentForm from './components/student/StudentForm'
import StudentList from './components/student/StudentList'
import Notification from './components/Notification'
import SingleCourse from './components/course/SingleCourse'
import SingleStudent from './components/student/SingleStudent'
import CourseList from './components/course/CourseList'
import Home from './components/Home'

import { saveUser } from './reducers/loginReducer'
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


  return (
    <div>
      <Router>
        <div>
          <div>

          <Link to="/">Home</Link> &nbsp;

          {props.loggedUser && props.loggedUser.user.role === "student"
            ? <Link to="/register">RegisterForm</Link>
            : <em></em> } &nbsp;


            {props.loggedUser && props.loggedUser.user.role === "student" //vaihda admin kun valmis
              ? <Link to="/courses">Courses</Link>
              : <em></em>} &nbsp;
           
           {props.loggedUser && props.loggedUser.user.role === "student" //vaihda admin kun valmis
              ?<Link to="/students">Students</Link>
              : <em></em> }  &nbsp;

            {props.loggedUser
            ? <em> You are logged in <input onClick={props.logout} type="button" value="logout"/>&nbsp;</em>
            : <Link to="/login">login</Link> } &nbsp;


          {/* just for test purpose going to be deleted when no needed */}
            {/* <Link to="/register">RegisterFormtest</Link> &nbsp;  
            <Link to="/courses">Coursestest</Link>&nbsp;
            <Link to="/students">Studentstest</Link> &nbsp; 
            <Link to="/login">logintest</Link>&nbsp; */}

          </div>
          <h1>TKT Assistant Register</h1>
 
          <Notification />
  
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/register" render={() => <StudentForm />} />     
         
          <Route exact path="/students" render={() =>
          props.loggedUser //  {props.loggedUser && props.loggedUser.user.role === "admin"
            ? ( <StudentList/>) 
            : ( <Redirect to="/login" />)} />

          <Route exact path="/courses" render={() =>
          props.loggedUser //  {props.loggedUser && props.loggedUser.user.role === "admin"
            ? ( <CourseList/>) 
            : ( <Redirect to="/login" />)} />
       

          <Route exact path='/courses/:id' render={({ match }) =>
            <SingleCourse courseId={match.params.id} course={courseById(match.params.id)} />} />

          <Route exact path="/login" render={({ history}) => <LoginForm history={history}/>} />
             
       
          <Route path="/students/:id" render={() => <SingleStudent />} /> 
        </div>
      </Router>
    

    </div>
  )
}




const mapStateToProps = (state) => {   
   console.log(state,'koko storeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  return {
    loggedUser: state.loggedUser

  }
}

export default connect(
  mapStateToProps,
  { initializeStudents, initializeCourses, logout, saveUser}
)(App)

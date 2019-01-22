import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StudentForm from './components/student/StudentForm'
import StudentList from './components/student/StudentList'
import Course_studentList from './components/Course_studentList'
import CourseList from './components/course/CourseList'
import { initializeCourses } from './reducers/courseReducer'
import { initializeStudents } from './reducers/studentReducer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const App=(props) => {
  useEffect(() => {
    props.initializeStudents()
    props.initializeCourses()
  }
  )

  return (
    <div>  
      <h1>TKT Assistant Register</h1>
      <Router>
        <div>
          <div>
            <Link to="/">form</Link> &nbsp;
            <Link to="/courses">blogs</Link> &nbsp;
            <Link to="/students">users</Link> &nbsp;
            <Link to="/course_students">StudentsByCourse</Link> &nbsp;
          </div>


          <Route exact path="/" render={() => <StudentForm />} />
          <Route path="/courses" render={() => <StudentList />} />
          <Route path="/students" render={() => <CourseList />} />
          <Route path="course_students" render={() => <Course_studentList />} />
        </div>
      </Router>


      <div>
        {/*  <h1>TKT Assistant Register</h1>
       <CourseList />
        <StudentList />
        <Course_studentList />
        <StudentForm /> */}
      </div>
    </div>
  )
}

export default connect(
  null,
  { initializeStudents, initializeCourses }
)(App)

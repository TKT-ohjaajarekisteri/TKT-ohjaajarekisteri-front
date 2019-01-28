import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StudentForm from './components/student/StudentForm'
import StudentList from './components/student/StudentList'
import SingleCourse from './components/course/SingleCourse'

import CourseList from './components/course/CourseList'
import { initializeCourses } from './reducers/courseReducer'
import { initializeStudents } from './reducers/studentReducer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const App=(props) => {
  useEffect(() => {
    props.initializeStudents()
    props.initializeCourses()
  },
  []
  )
  console.log(props.showCourses, 'propscourses_APPP')
  const courseById = (id) => {
    console.log(id, 'iiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddddddddddddddddddddddd')
    console.log(props.showCourses, 'propscourses_APPP')
    
    let found = props.showCourses.find(c => Number(c.course_id) === Number(id))
    console.log('found single course', found)
    
    return found
  }

  return (
    <div>
      <h1>TKT Assistant Register</h1>
      <Router>
        <div>
          <div>
            <Link to="/">RegisterForm</Link> &nbsp;
            <Link to="/students">Students</Link> &nbsp;
            <Link to="/courses">Courses</Link> &nbsp;
          </div>


          <Route exact path="/" render={() => <StudentForm />} />
          <Route path="/students" render={() => <StudentList />} />
          <Route exact path="/courses" render={() => <CourseList/>}/>
          <Route exact path='/courses/:id' render={({ match }) =>
            <SingleCourse course={courseById(match.params.id)} />}/>
        </div>
      </Router>
    </div>
  )
}

//get stuff from store
const mapStateToProps = (state) => {
  const showCourses= state.courses
  return {
    showCourses
  }
}

export default connect(
  mapStateToProps,
  { initializeStudents, initializeCourses }
)(App)

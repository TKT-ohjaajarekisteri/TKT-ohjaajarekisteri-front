import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StudentForm from './components/student/StudentForm'
import { initializeCourses } from './reducers/courseReducer'
import CourseList from './components/course/CourseList'


const App=(props) => {
  useEffect(() => {
    props.initializeCourses()
  }
  )

  return (
    <div>
      <h1>TKT Assistant Register</h1>
      <CourseList />
      <StudentForm />
    </div>
  )
}

export default connect(
  null,
  { initializeCourses }
)(App)


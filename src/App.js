import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import { initializeStudents } from './reducers/studentReducer'


const App=(props) => {
  useEffect(() => {
    props.initializeStudents()
  }
  )

  return (
    <div>
      <h1>TKT Assistant Register</h1>
      <StudentList />
      <StudentForm />
    </div>
  )
}

export default connect(
  null,
  { initializeStudents }
)(App)


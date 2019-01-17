import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import { initializeStudents } from './reducers/studentReducer'




class App extends Component {
  componentDidMount() {
    this.props.initializeStudents()
  }

  render() {
    return (
      <div>
        <h1>TKT-ohjaajarekisteri</h1>
        <StudentList /> 
        <StudentForm />
      </div>
    )
  }
}

export default connect(
  null,
  { initializeStudents }
)(App)


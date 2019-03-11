import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { initializeCourseApplication, setChecked, sendApplication } from '../../reducers/actionCreators/courseApplicationActions'
import { initializeFilter, setProgramme } from '../../reducers/actionCreators/filterActions'

export const CourseApplicationList = (props) => {

  useEffect(() => {
    props.initializeCourseApplication()
  },
    []
  )

  const handleSubmit = () => {
    const coursesToApplyTo = props.courses.filter(c => c.checked).map(c => c.course_id)
    if (coursesToApplyTo.length !== 0) {
      props.sendApplication(props.loggedUser.user.user_id, coursesToApplyTo)
    }
  }

  const handleProgrammeChange = (event) => {
    event.preventDefault()
    props.setProgramme(event.target.name)
  }

  const handleChange = (id) => (e) => {
    const isChecked = e.target.checked
    props.setChecked(id, isChecked)
  }

  const style = {
    overflowY: 'auto',
    maxHeight: '75vh',
    margin: '10px'
  }

  return (
    <div className="courseApplicationList">
      <h2>Courses</h2>
      <div>
        <button type='submit' name='TKT' onClick={handleProgrammeChange}>CS-Bachelor</button>
        <button type='submit' name='CSM' onClick={handleProgrammeChange}>CS-Master</button>
        <button type='submit' name='DATA' onClick={handleProgrammeChange}>Data Science</button>
      </div>
      {<input className="button" type="submit" value="apply" onClick={handleSubmit} />}
      <div className="tableScroll" style={style} >
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Year</th>
              <th>Period</th>
              <th>To apply</th>
            </tr>
          </thead>
          <tbody>
            {props.courses && props.courses
              .filter(course => course.learningopportunity_id.includes(props.filter.studyProgramme))
              .map(course =>
                <Course
                  course={course}
                  key={course.course_id}
                  onChange={handleChange}
                />
              )}
          </tbody>
        </table>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseApplication.courses,
    loading: state.courseApplication.coursesLoading,
    loggedUser: state.loggedUser.loggedUser,
    filter: {
      studyProgramme: state.filter.studyProgramme
    }
  }
}

export default connect(
  mapStateToProps,
  {
    initializeCourseApplication,
    setChecked,
    sendApplication,
    initializeFilter,
    setProgramme
  }
)(CourseApplicationList)
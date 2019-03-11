import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import { initializeCourses } from '../../reducers/actionCreators/courseActions'
import { initializeFilter, setProgramme } from '../../reducers/actionCreators/filterActions'

export const CourseList = ({
  initializeCourses,
  initializeFilter,
  setProgramme,
  filter, courses
}) => {

  useEffect(() => {
    initializeCourses()
    initializeFilter()
  },
    []
  )

  const handleProgrammeChange = (event) => {
    event.preventDefault()
    setProgramme(event.target.name)
  }

  return (
    <div>
      <h2>Courses</h2>
      <div>
        <button type='submit' name='TKT' onClick={handleProgrammeChange}>CS-Bachelor</button>
        <button type='submit' name='CSM' onClick={handleProgrammeChange}>CS-Master</button>
        <button type='submit' name='DATA' onClick={handleProgrammeChange}>Data Science</button>
      </div>

      <div className="courseList">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Year</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {courses
              .filter(course => course.learningopportunity_id.includes(filter.studyProgramme))
              .map(course =>
                <Course course={course} key={course.course_id} />
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    filter: {
      studyProgramme: state.filter.studyProgramme
    }
  }
}

export default connect(
  mapStateToProps,
  { initializeCourses, initializeFilter, setProgramme }
)(CourseList)
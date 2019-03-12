import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import TogglableButton from '../common/TogglableButton'
import { initializeCourses } from '../../reducers/actionCreators/courseActions'
import { Table } from 'react-bootstrap'
import { initializeFilter, setProgramme } from '../../reducers/actionCreators/filterActions'

export const CourseList = ({
  initializeCourses,
  initializeFilter,
  setProgramme,
  filter,
  courses
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
        <TogglableButton
          type='submit'
          name='TKT'
          onClick={handleProgrammeChange}
          filterValue={filter.studyProgramme}>
          CS-Bachelor
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='CSM'
          onClick={handleProgrammeChange}
          filterValue={filter.studyProgramme}>
          CS-Master
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='DATA'
          onClick={handleProgrammeChange}
          filterValue={filter.studyProgramme}>
          Data Science
        </TogglableButton>
      </div>

      <Table bordered hover>
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
      </Table>
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
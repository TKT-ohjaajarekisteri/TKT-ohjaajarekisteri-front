import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import TogglableButton from '../common/TogglableButton'
import { initializeCourses } from '../../reducers/actionCreators/courseActions'
import { Table } from 'react-bootstrap'
import { initializeFilter, setProgramme, setPeriod } from '../../reducers/actionCreators/filterActions'

export const CourseList = ({
  initializeCourses,
  initializeFilter,
  setProgramme,
  setPeriod,
  filter,
  courses
}) => {

  useEffect(() => {
    if (courses.length === 0) {
      initializeCourses()
    }
    initializeFilter()
  },
    []
  )

  const handleProgrammeChange = (event) => {
    event.preventDefault()
    setProgramme(event.target.name)
  }

  const handlePeriodChange = (event) => {
    event.preventDefault()
    setPeriod(event.target.name)
  }

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  return (
    <div>
      <h2>Courses</h2>
      <div style={{ float: 'left' }}>
        <div style={{ color: '#6c757d' }}>Study programme:</div>
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
      <div style={{ float: 'left' }}>
        <div style={{ color: '#6c757d' }}>Period:</div>
        {courses
          .map(c => c.period)
          .filter(onlyUnique)
          .sort()
          .map(period => {
            return (
              <TogglableButton
                key={period}
                type='submit'
                name={period}
                onClick={handlePeriodChange}
                filterValue={filter.period}>
                {period}
              </TogglableButton>
            )
          })}
      </div>

      <Table className='courseList' bordered hover>
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
            .filter(course => {
              let period = course.period.toString(10)
              return (
                course.learningopportunity_id.includes(filter.studyProgramme)
                &&
                period.includes(filter.period)
              )
            })
            .map(course =>
              <Course
                course={course}
                key={course.course_id}
              />
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
      studyProgramme: state.filter.studyProgramme,
      period: state.filter.period
    }
  }
}

export default connect(
  mapStateToProps,
  { initializeCourses, initializeFilter, setProgramme, setPeriod }
)(CourseList)
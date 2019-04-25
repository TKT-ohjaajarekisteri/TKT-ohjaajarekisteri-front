import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import filterActions from '../../reducers/actionCreators/filterActions'
import courseActions from '../../reducers/actionCreators/courseActions'
import Course from './Course'
import TogglableButton from '../common/TogglableButton'
import { Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export const CourseList = ({
  initializeCourses,
  initializeFilter,
  setProgramme,
  setPeriod,
  setCourseName,
  filter,
  courses,
  setHidden
}) => {

  useEffect(() => {
    initializeCourses()
    initializeFilter()
  }, [])

  const handleProgrammeChange = (event) => {
    event.preventDefault()
    setProgramme(event.target.name)
  }

  const handlePeriodChange = (event) => {
    event.preventDefault()
    setPeriod(event.target.name)
  }

  const handleCourseNameChange = (event) => {
    event.preventDefault()
    setCourseName(event.target.value)
  }

  const handleHiddenSubmit = (id) => (event) => {
    event.preventDefault()
    if (window.confirm('Are you sure you want to hide this course?')) {
      setHidden(id)
    }
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
        {courses && courses
          .map(c => c.periods[0])
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
      <div style={{ float: 'right' }}>
        <div style={{ color: '#6c757d' }}> Filter:</div>
        <Form.Control
          className='filterInput'
          value={filter.course_name}
          onChange={handleCourseNameChange} />
      </div>

      <Table className='courseList' size='sm' bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th className='centerColumn'>Year</th>
            <th className='centerColumn wrapSmallCell'>Starting Period</th>
            <th className='centerColumn wrapSmallCell' >Accepted/ Applicants</th>
            <th className='centerColumn'>Hidden</th>
          </tr>
        </thead>
        <tbody>
          {courses
            .filter(course => {
              let period = course.periods[0].toString(10)
              return (
                (
                  course.course_name.toLowerCase().includes(filter.courseName.toLowerCase())
                  ||
                  course.learningopportunity_id.toLowerCase().includes(filter.courseName.toLowerCase())
                )
                &&
                course.learningopportunity_id.includes(filter.studyProgramme)
                &&
                period.includes(filter.period)
              )
            })
            .sort((a, b) => { return a.hidden - b.hidden })
            .map(course =>
              <Course
                course={course}
                key={course.course_id}
                setHidden={handleHiddenSubmit}
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
      courseName: state.filter.courseName,
      studyProgramme: state.filter.studyProgramme,
      period: state.filter.period
    }
  }
}

export default connect(
  mapStateToProps,
  { ...courseActions, ...filterActions }
)(CourseList)
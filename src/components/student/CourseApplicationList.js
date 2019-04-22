import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import TogglableButton from '../common/TogglableButton'
// import { initializeCourseApplication, setChecked, sendApplication } from '../../reducers/actionCreators/courseApplicationActions'
import courseApplicationActions from '../../reducers/actionCreators/courseApplicationActions'
import { Table, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import filterActions from '../../reducers/actionCreators/filterActions'
import { Form } from 'react-bootstrap'
import { getStudentCourseIds } from '../../reducers/actionCreators/studentActions'

export const CourseApplicationList = (props) => {

  useEffect(() => {
    if (props.courses.length === 0) {
      props.initializeCourseApplication()
    }
    props.initializeFilter()
    props.getStudentCourseIds(props.id)
  }, [])

  const handleSubmit = () => {
    const coursesToApplyTo = props.courses.filter(c => c.checked).map(c => c.course_id)
    if (coursesToApplyTo.length !== 0) {
      props.sendApplication(props.loggedUser.user.user_id, coursesToApplyTo)
      props.history.push('/update-info')
    }
  }

  const handleProgrammeChange = (event) => {
    event.preventDefault()
    props.setProgramme(event.target.name)
  }

  const handlePeriodChange = (event) => {
    event.preventDefault()
    props.setPeriod(event.target.name)
  }

  const handleChange = (id) => (e) => {
    const isChecked = e.target.checked
    props.setChecked(id, isChecked)
  }

  const handleCourseNameChange = (event) => {
    event.preventDefault()
    props.setCourseName(event.target.value)
  }

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  // checks if the loggedUser has already applied on a course
  const alreadyApplied = (id) => {
    return props.studentCourseIds.includes(id)
  }

  return (
    <div className="courseApplicationList">
      <h2>Courses</h2>
      <div style={{ float: 'left' }}>
        <div style={{ color: '#6c757d' }}>Study programme:</div>
        <TogglableButton
          type='submit'
          name='TKT'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}
        >
          CS-Bachelor
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='CSM'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}
        >
          CS-Master
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='DATA'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}
        >
          Data Science
        </TogglableButton>
      </div>
      <div style={{ float: 'left' }}>
        <div style={{ color: '#6c757d' }}>Period:</div>
        {props.courses
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
                filterValue={props.filter.period}
              >
                {period}
              </TogglableButton>
            )
          })}
      </div>

      <div style={{ float: 'right' }}>
        <div>&nbsp;</div>
        <Button className="buttonApply" onClick={handleSubmit} variant="dark" type="submit">
          Apply
        </Button>
      </div>

      <div style={{ float: 'right', paddingRight: 15 }}>
        <div style={{ color: '#6c757d' }}> Filter:</div>
        <Form.Control
          className='filterInput'
          value={props.filter.courseName}
          onChange={handleCourseNameChange}
        />
      </div>

      <Table bordered hover size='sm'>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th className='centerColumn'>Year</th>
            <th className='centerColumn'>Period</th>
            <th className='centerColumn'>Apply</th>
          </tr>
        </thead>
        <tbody>
          {props.courses && props.courses
            .filter(course => {
              let period = course.period.toString()
              return (
                (
                  course.course_name.toLowerCase().includes(props.filter.courseName.toLowerCase())
                  ||
                  course.learningopportunity_id.toLowerCase().includes(props.filter.courseName.toLowerCase())
                )
                &&
                course.learningopportunity_id.includes(props.filter.studyProgramme)
                &&
                period.includes(props.filter.period)
              )
            })
            //applied courses at the bottom of the list
            .sort((a, b) => { return alreadyApplied(a.course_id) - alreadyApplied(b.course_id) })
            .map(course =>
              <Course
                course={course}
                key={course.course_id}
                onChange={handleChange}
                grey={alreadyApplied(course.course_id)}
              />
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseApplication.courses,
    loading: state.courseApplication.coursesLoading,
    loggedUser: state.loggedUser.loggedUser,
    studentCourseIds: state.students.studentCourseIds,
    filter: {
      courseName: state.filter.courseName,
      studyProgramme: state.filter.studyProgramme,
      period: state.filter.period
    }
  }

}

// withRouter provides history from Router component in App
export default withRouter(connect(
  mapStateToProps,
  { ...filterActions, ...courseApplicationActions, getStudentCourseIds }
)(CourseApplicationList))

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Course from './Course'
import TogglableButton from '../common/TogglableButton'
import { initializeCourseApplication, setChecked, sendApplication } from '../../reducers/actionCreators/courseApplicationActions'
import { Table, Button } from 'react-bootstrap'
import { initializeFilter, setProgramme } from '../../reducers/actionCreators/filterActions'

export const CourseApplicationList = (props) => {

  useEffect(() => {
    if (props.courses.length === 0) {
      props.initializeCourseApplication()
    }
    props.initializeFilter()
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



  return (
    <div className="courseApplicationList">
      <h2>Courses</h2>

      <Button className="buttonApply" onClick={handleSubmit} variant="dark" type="submit" >
        apply
      </Button>

      <div>
        <TogglableButton
          type='submit'
          name='TKT'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}>
          CS-Bachelor
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='CSM'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}>
          CS-Master
        </TogglableButton>
        <TogglableButton
          type='submit'
          name='DATA'
          onClick={handleProgrammeChange}
          filterValue={props.filter.studyProgramme}>
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
      </Table>
    </div>
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
import courseService from '../../services/courses'
import { notify, setError } from './notificationActions'

// tells courseService to get allcourses from database and dispatch them to store
const initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    dispatch({
      type: 'INIT_COURSES',
      data: content
    })
  }
}

// sets the course as hidden
const setHidden = (course_id) => {
  return async (dispatch) => {
    const response = await courseService.hideCourse(course_id)
    if (response.error) {
      setError(response.error, 5)
    } else {
      dispatch({
        type: 'SET_HIDDEN',
        data: {
          course_id,
          course: response
        }
      })
      notify('Course ' + response.learningopportunity_id + ' hidden', 5)
    }
  }
}


// tells courseService to create studentcontactinfo(+course) and dispatch them to store
const createContent = (content) => {
  return async (dispatch) => {

    const response = await courseService.create(content)

    dispatch({
      type: 'CREATE_COURSE',
      data: response.course

    })

    dispatch({
      type: 'CREATE_STUDENT',
      data: response.student
    })
  }

}

export { createContent, initializeCourses, setHidden }
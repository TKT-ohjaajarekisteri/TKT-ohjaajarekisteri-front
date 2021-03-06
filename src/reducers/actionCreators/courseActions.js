import courseService from '../../services/courses'
import { notify, setError } from './notificationActions'

// tells courseService to get allcourses from database and dispatch them to store
export const initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    dispatch({
      type: 'INIT_COURSES',
      data: content
    })
  }
}

// sets the course as hidden
export const setHidden = (course_id) => {
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

export default { initializeCourses, setHidden }
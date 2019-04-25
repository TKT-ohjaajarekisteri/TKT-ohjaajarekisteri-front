import courseService from '../../services/courses'
import studentService from '../../services/students'

// get all courses from database, add selected state to courses and dispatch the array to store
export const initializeCourseApplication = () => {
  return async (dispatch) => {
    dispatch({
      type: 'APPLICATION_COURSES_FETCH',
    })
    // Fetch courses
    const courses = await courseService.getAll()
    // Add field for controlling checkbox
    const content = courses.map(c => {
      return {
        ...c,
        checked: false
      }
    })
    dispatch({
      type: 'INIT_APPLICATION_COURSES',
      data: content
    })
  }
}

export const setChecked = (id, isChecked) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_COURSE_STATUS',
      data: {
        course_id: id,
        checked: isChecked
      }
    })
  }
}

export const sendApplication = (student_id, course_ids) => {
  return async (dispatch) => {
    await studentService.apply(student_id, { course_ids: course_ids })
    const courses = await studentService.getCourses(student_id)
    dispatch({
      type: 'INIT_STUDENT_COURSES',
      data: courses

    })
    dispatch({
      type: 'RESET_COURSE_APPLICATIONS'
    })
    dispatch({
      type: 'NOTIFY',
      data: 'Your applicaton has been saved'
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, 2000)
  }
}

export default { initializeCourseApplication, setChecked, sendApplication }

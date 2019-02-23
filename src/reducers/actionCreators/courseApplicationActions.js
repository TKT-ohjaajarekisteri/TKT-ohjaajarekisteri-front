import courseService from '../../services/courses'
import studentService from '../../services/students'

// get all courses from database, add selected state to courses and dispatch the array to store
const initializeCourseApplication = () => {
  return async (dispatch) => {
    dispatch({
      type: 'APPLICATION_COURSES_FETCH',
    })
    // Fetch courses
    const courses = await courseService.getAll()
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

const setChecked = (id, isChecked) => {
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

const sendApplication = (applications) => {
  return async (dispatch) => {
    console.log(applications)
    // await studentService.apply({ applications: applications })
    dispatch({
      type: 'RESET_COURSE_APPLICATIONS'
    })
  }
}

export { initializeCourseApplication, setChecked, sendApplication }
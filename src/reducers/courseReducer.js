//import courses from '../services/courses'
import courseService from '../services/courses'


const courseReducer = (store = [], action) => {

  switch (action.type) {
  case 'CREATE':
    return [...store, action.data]

  case 'INIT':
    return action.data.s

  default:
    return store
  }
}

//ACTIONCREATORIT
export const createCourse=(course) => {
  return async (dispatch)  => {
    const course_data = await courseService.create(course)
    dispatch({
      type:'CREATE',
      data:course_data

    })
  }
}
export const initializeStudents = () => {
  return async (dispatch) => {
    const s = await courseService.getAll()
    console.log(s)
    dispatch({
      type: 'INIT',
      data:s
    })
  }
}
export default courseReducer
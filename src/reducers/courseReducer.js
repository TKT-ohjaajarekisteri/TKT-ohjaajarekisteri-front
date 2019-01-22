//import courses from '../services/courses'
import courseService from '../services/courses'


const courseReducer = (store = [], action) => {

  switch (action.type) {
  case 'CREATE_COURSE':
    return [...store, action.data]

  case 'INIT_COURSE':
    return action.data

  default:
    return store
  }
}

//ACTIONCREATORIT
export const createCourse=(course) => {
  return async (dispatch)  => {
    console.log(course, 'create course')
    const course_data = await courseService.create(course)
    dispatch({
      type:'CREATE_COURSE',
      data:course_data

    })
  }
}
export const initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    console.log(content)
    dispatch({
      type: 'INIT_COURSE',
      data:content
    })
  }
}
export default courseReducer
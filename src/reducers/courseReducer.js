import courseService from '../services/courses'

const courseReducer = (store = [], action) => {
  switch (action.type) {
  case 'CREATE_COURSE':
    if (store.find(course => course.course_id === action.data.course_id)) {
      return store
    }
    return [...store, action.data]

  case 'INIT_COURSES':
    return action.data

  default:
    return store
  }
}

// Action creators

export const initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    dispatch({
      type: 'INIT_COURSES',
      data: content
    })
  }
}

export const createContent = (content) => {
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

export default courseReducer
import courseService from '../services/courses'

const singleCourseReducer = (store = [], action) => {
  switch (action.type) {
  case 'INIT_APPLICANTS':
    return action.data

  default:
    return store
  }
}

// Action creators

export const initializeApplicants = (id) => {
  return async (dispatch) => {
    const content = await courseService.getStudents(id)
    dispatch({
      type: 'INIT_APPLICANTS',
      data: content
    })
  }
}

export default singleCourseReducer
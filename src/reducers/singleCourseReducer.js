import courseService from '../services/courses'

const initialState = {
  course: null,
  applicants: []
}

const singleCourseReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_APPLICANTS':
    return {
      ...state,
      applicants: action.data
    }

  case 'INIT_COURSE': {
    return {
      ...state,
      course: action.data
    }
  }

  default:
    return state
  }
}

// Action creators

export const initializeSingleCourse = (id) => {
  return async (dispatch) => {
    const course = await courseService.getOne(id)
    dispatch({
      type: 'INIT_COURSE',
      data: course
    })

    const applicants = await courseService.getStudents(id)
    dispatch({
      type: 'INIT_APPLICANTS',
      data: applicants
    })
  }
}

export default singleCourseReducer
const initialState = {
  coursesLoading: false,
  courses: []
}

// updates the state of the "course application" course list
const courseApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_APPLICATION_COURSES': {
    return {
      ...state,
      courses: action.data,
      loadingCourses: false
    }
  }

  case 'APPLICATION_COURSES_FETCH': {
    return {
      ...state,
      courses: [],
      loadingCourses: true
    }
  }

  case 'RESET_COURSE_APPLICATIONS': {
    return {
      ...state,
      courses: state.courses.map(c => {
        return { ...c, checked: false }
      })
    }
  }

  case 'SET_COURSE_STATUS': {
    return {
      ...state,
      courses: state.courses.map(c => {
        if (c.course_id === action.data.course_id) {
          return { ...c, checked: action.data.checked }
        }
        return c
      })
    }
  }
  
  case 'DELETE_COURSE_APPLICATION': {
    return {
      ...state,
      courses: state.courses.filter(c => c.course_id !== action.data.id)
    }
  }

  default:
    return state
  }
}


export default courseApplicationReducer
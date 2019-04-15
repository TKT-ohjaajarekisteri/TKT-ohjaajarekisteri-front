
// returns courses from store
const courseReducer = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_COURSE':
    if (state.find(course => course.course_id === action.data.course_id)) {
      return state
    }
    return [...state, action.data]

  case 'INIT_COURSES':
    return action.data

  case 'SET_HIDDEN': {
    return state.map(course => {
      return course.course_id === action.data.course_id ? action.data.course : course
    })
  }

  default:
    return state
  }
}


export default courseReducer
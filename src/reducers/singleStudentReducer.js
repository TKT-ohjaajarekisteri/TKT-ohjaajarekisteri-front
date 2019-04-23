const initialState = {
  singleStudent: {},
  studentCourses: []
}

const singleStudentReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_SINGLE_STUDENT': {
    return {
      ...state,
      singleStudent: action.data
    }
  }
  // gets student courselist for student
  case 'INIT_SINGLE_STUDENT_COURSES': {
    return {
      ...state,
      studentCourses: action.data
    }
  }
  default:
    return state
  }
}

export default singleStudentReducer
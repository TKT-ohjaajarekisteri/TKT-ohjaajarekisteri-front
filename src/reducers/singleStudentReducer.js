const initialState = {
  singleStudent:{}
}

const singleStudentReducer = (state = initialState, action) => {
  //console.log(action.type, ' ', action.data)
  switch (action.type) {
  case 'INIT_SINGLE_STUDENT':
    return {
      ...state,
      singleStudent: action.data
    }
    // gets student courselist for student
  case 'INIT_SINGLE_STUDENT_COURSES':
    return {
      ...state,
      studentCourses: action.data
    }
  default:
    return state
  }
}

export default singleStudentReducer
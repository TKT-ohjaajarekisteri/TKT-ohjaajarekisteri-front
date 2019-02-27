const initialState = {
  studentCourses: [],
  students: []
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_STUDENTS':
    return {
      ...state,
      students: action.data
    }

  case 'CREATE_STUDENT_CONTACTINFO':
    if (state.find(student => student.student_id === action.data.student_id)) {
      return state
    }
    return {
      ...state,
      students: action.data
    }

  case 'INIT_STUDENT_COURSES':
    return {
      ...state,
      studentCourses: action.data
    }

  default:
    return state
  }
}

export default studentReducer
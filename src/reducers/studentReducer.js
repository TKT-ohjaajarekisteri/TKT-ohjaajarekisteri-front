const initialState = {
  studentCourses: [],
  students: [],
  contactInformation: {
    phone: '',
    email: '',
    experience: ''    
  }
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

  case 'STUDENT_APPLICATION_DELETE': {
    return {
      ...state,
      studentCourses: state.studentCourses.filter(c => c.course_id !== action.data.id)
    }
  }

  case 'INIT_CONTACT_INFORMATION':
    return {
      ...state,
      contactInformation: action.data
    }

  default:
    return state
  }

}

export default studentReducer
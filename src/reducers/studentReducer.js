const initialState = {
  studentCourses: [],
  students: [],
  phone: '',
  email: '',
  experience: '',
  teachesInEnglish: true,
  contactInformation: {
    first_names: '',
    last_name: '',
    student_number: ''
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

  case 'INIT_CONTACT_INFORMATION': {
    console.log('actionData REDUUUUUUUUUUUUUUUUUUUCEEEEEEEEEEEEEEEEEEEEEERRR', action.data)

    return {
      ...state,
      contactInformation: action.data,
      phone: action.data.phone,
      email: action.data.email,
      experience: action.data.experience,
      teachesInEnglish: action.data.teachesInEnglish

    }
  }

  case 'UPDATE_PHONE': {
    return {
      ...state,
      //contactInformation:action.data
      phone: action.data
    }
  }
  case 'UPDATE_EMAIL': {
    return {
      ...state,
      // contactInformation:action.data
      email: action.data
    }
  }
  case 'UPDATE_EXPERIENCE': {
    return {
      ...state,
      //contactInformation:action.data
      experience: action.data
    }
  }
  case 'UPDATE_LANGUAGE': {
    return {
      ...state,
      //contactInformation:action.data
      teachesInEnglish: action.data
    }
  }
  // case 'SET_LANGUAGE':
  //   return {
  //     ...state,
  //     teachesInEnglish: !state.contactInformation.teachesInEnglish
  //   }

  default:
    return state
  }



}

export default studentReducer
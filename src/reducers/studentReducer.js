const initialState = {
  studentCourses: [],
  studentCourseIds: [],
  students: [],
  phone: '',
  email: '',
  experience: '',
  no_english: false,
  apprentice: false,
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
    // creates contact info when student logs in for the first time
  case 'CREATE_STUDENT_CONTACTINFO':
    if (state.find(student => student.student_id === action.data.student_id)) {
      return state
    }
    return {
      ...state,
      students: action.data
    }
    // gets student courselist for student update info form page
  case 'INIT_STUDENT_COURSES':
    return {
      ...state,
      studentCourses: action.data
    }
    // gets student courselist for application page
  case 'INIT_STUDENT_COURSE_IDS':
    return {
      ...state,
      studentCourseIds: action.data
    }


    // for the delete button in the contact details update form
  case 'STUDENT_APPLICATION_DELETE': {
    return {
      ...state,
      studentCourses: state.studentCourses.filter(c => c.course_id !== action.data.id)
    }
  }
  // initilizes the contact information for contact info update form
  case 'INIT_CONTACT_INFORMATION': {

    return {
      ...state,
      contactInformation: action.data,
      phone: action.data.phone,
      email: action.data.email,
      experience: action.data.experience,
      no_english: action.data.no_english,
      apprentice: action.data.apprentice
    }
  }
  // these next four methods are changing the fields for contact details update form
  case 'UPDATE_PHONE': {
    return {
      ...state,
      phone: action.data
    }
  }
  case 'UPDATE_EMAIL': {
    return {
      ...state,
      email: action.data
    }
  }
  case 'UPDATE_EXPERIENCE': {
    return {
      ...state,
      experience: action.data
    }
  }
  case 'UPDATE_LANGUAGE': {
    return {
      ...state,
      no_english: action.data
    }
  }
  case 'UPDATE_APPRENTICE': {
    return {
      ...state,
      apprentice: action.data
    }
  }

  default:
    return state
  }

}

export default studentReducer
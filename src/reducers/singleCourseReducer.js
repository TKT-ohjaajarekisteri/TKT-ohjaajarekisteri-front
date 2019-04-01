const initialState = {
  course: null,
  applicants: [],
  email: {
    to: '',
    subject: 'Subject template',
    body: 'Body template'
  }
}

const singleCourseReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_APPLICANTS': {
    return {
      ...state,
      applicants: action.data
    }
  }

  case 'INIT_COURSE': {
    return {
      ...state,
      course: action.data
    }
  }

  case 'SET_STUDENT_ACCEPTED_STATE': {
    return {
      ...state,
      applicants: state.applicants.map(a =>
        a.student_id === action.data.student_id
          ? { ...a, accepted_checked: action.data.accepted_checked }
          : a
      )
    }
  }

  case 'SET_EMAIL_CHECKED': {
    const modifiedApplicants = state.applicants.map(a =>
      a.student_id === action.data.student_id
        ? { ...a, email_to_checked: action.data.email_to_checked }
        : a
    )
    const newEmailToField = modifiedApplicants.filter(a => a.email_to_checked).map(a => a.email.concat(';')).join('')
    return {
      ...state,
      applicants: modifiedApplicants,
      email: { ...state.email, to: newEmailToField }
    }
  }

  case 'SET_EMAIL': {
    return {
      ...state,
      email: action.data
    }
  }

  default:
    return state
  }
}

export default singleCourseReducer
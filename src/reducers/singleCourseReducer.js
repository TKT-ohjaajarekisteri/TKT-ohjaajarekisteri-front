const emailBody = (course, applicantsToEmail) => {
  const applicantRows = applicantsToEmail.map(a => a.first_names+' '+a.last_name+', ('+a.groups+')').join('%0D%0A')
  const bodyParts = [
    'Hei,%0D%0A%0D%0AOlet hakenut opetusavustajaksi kurssille:%0D%0A',
    course.learningopportunity_id+' '+course.course_name+' '+course.year+', ',
    'joka alkaa periodilla '+course.periods[0]+'.%0D%0A%0D%0A',
    'Kurssille valitut opetusavustajat (sekä ohjattavien ',
    'ryhmien määrä):%0D%0A',
    applicantRows,
    '%0D%0A%0D%0AKuittaa, otatko tehtävän vastaan.%0D%0A',
    'Ilmoita myös siinä tapauksessa, jos et ota tehtävää vastaan.%0D%0A%0D%0A',
    'Terveisin, Reijo',
    '%0D%0A%0D%0A',
    '---------------------',
    '%0D%0A%0D%0A',
    'Hello,%0D%0A%0D%0AYou have applied the role of teaching assistant for the course:%0D%0A',
    course.learningopportunity_id+' '+course.course_name+' '+course.year+' ',
    'beginning on period '+course.periods[0]+'.%0D%0A%0D%0A',
    'The chosen teaching assistants (and their allocated number of groups) are:%0D%0A',
    applicantRows,
    '%0D%0A%0D%0APlease respond, whether or not you accept this position.%0D%0A%0D%0A',
    'BR, Reijo',
  ]
  return bodyParts.join('')
}

const subject = (course) => {
  const subject = 'Your Application for: '+course.learningopportunity_id+' - '+course.course_name
  return subject
}

const initialState = {
  course: null,
  applicants: [],
  email: {
    cc: '',
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

  case 'SET_STUDENT_GROUPS_STATE': {
    return {
      ...state,
      applicants: state.applicants.map(a =>
        a.student_id === action.data.student_id
          ? { ...a, groups_textbox: action.data.groups_textbox }
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
    const newEmailToField = modifiedApplicants
      .filter(a => a.email_to_checked)
      .map(a => a.email.concat(';'))
      .join('')
      .concat('reijo.siven@helsinki.fi;')

    const applicantsToEmail = modifiedApplicants.filter(student => student.email_to_checked)
    return {
      ...state,
      applicants: modifiedApplicants,
      email: { ...state.email,
        to: newEmailToField,
        subject: subject(state.course),
        body: emailBody(state.course, applicantsToEmail)
      }
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
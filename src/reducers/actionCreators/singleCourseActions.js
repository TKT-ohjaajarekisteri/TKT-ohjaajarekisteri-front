import courseService from '../../services/courses'

export const initializeSingleCourse = (id) => {
  return async (dispatch) => {
    const course = await courseService.getOne(id)
    dispatch({
      type: 'INIT_COURSE',
      data: course
    })
    // Fetch applicants
    const applicants = await courseService.getStudents(id)
    // Add field for controlling checkbox
    const content = applicants.map(a => {
      return {
        ...a,
        email_to_checked: false,
        accepted_checked: a.accepted
      }
    })
    dispatch({
      type: 'INIT_APPLICANTS',
      data: content
    })
  }
}

export const setStudentAccepted = (student_id, accepted_checked) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_STUDENT_ACCEPTED_STATE',
      data: {
        student_id,
        accepted_checked
      }
    })
  }
}

export const sendAcceptedModified = (course_id, modifiedApplicants) => {
  return async (dispatch) => {
    const applicants = await courseService.sendAcceptedModified(course_id, modifiedApplicants)
    const content = applicants.map(a => {
      return {
        ...a,
        email_to_checked: false,
        accepted_checked: a.accepted
      }
    })
    dispatch({
      type: 'INIT_APPLICANTS',
      data: content
    })
  }
}

export const setEmail = (student_id, email_to_checked) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_EMAIL_CHECKED',
      data: {
        student_id,
        email_to_checked
      }
    })
  }
}
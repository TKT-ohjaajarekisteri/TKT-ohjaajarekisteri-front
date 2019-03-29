import courseService from '../../services/courses'
// const applicants = [
//   {
//     student_id: 1,
//     student_number: '012345678',
//     first_names: 'Timo *Teppo Tellervo',
//     last_name: 'Testaaja',
//     no_english: false,
//     experience: null,
//     phone: '1234',
//     email: 'jesperleonard@gmail.com',
//     accepted: true,
//     createdAt: '2019-03-28T11:20:42.830Z',
//     updatedAt: '2019-03-28T11:20:55.917Z'
//   },
//   {
//     student_id: 2,
//     student_number: '012345675',
//     first_names: 'Pimo *Peppo Pellervo',
//     last_name: 'Pestaaja',
//     no_english: false,
//     experience: null,
//     phone: '1234',
//     email: 'olli.bisi@helsinki.fi',
//     accepted: false,
//     createdAt: '2019-03-28T11:20:42.830Z',
//     updatedAt: '2019-03-28T11:20:55.917Z'
//   }]

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
    // const email = {
    //   to: applicants.map(student => student.email.concat(';')).join(''),
    //   subject: 'Subject template',
    //   body: 'Body template'
    // }

    // dispatch({
    //   type: 'SET_EMAIL',
    //   data: email
    // })
    dispatch({
      type: 'SET_EMAIL_CHECKED',
      data: {
        student_id,
        email_to_checked
      }
    })
  }
}
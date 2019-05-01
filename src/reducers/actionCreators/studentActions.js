import studentService from '../../services/students'

// tells studentservice to get all students from database
export const initializeStudents = () => {
  return async (dispatch) => {
    const content = await studentService.getAll()
    dispatch({
      type: 'INIT_STUDENTS',
      data: content
    })
  }
}

// tells studentservice to get specific student by id from database
export const getStudent = (id) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(id)
    dispatch({
      type: 'GET_STUDENT',
      data: content
    })
  }
}


// tells studentservice to get specific student's courses and dispatch them to store
export const getStudentCourses = (id) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(id)
    dispatch({
      type: 'INIT_STUDENT_COURSES',
      data: content
    })
  }
}

// tells studentservice to get specific student's courses, and dispatch their id:s to store
export const getStudentCourseIds = (id) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(id)
    const courseIds = content.map(course => course.course_id)
    dispatch({
      type: 'INIT_STUDENT_COURSE_IDS',
      data: courseIds
    })
  }
}

// tells studentservice to get specific student's courses
export const getContactInformation = (id) => {
  return async (dispatch) => {
    const student = await studentService.getStudent(id)
    if (student === undefined || student.error) {
      dispatch({
        type: 'NOTIFY',
        data: 'Could not get your course list!'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    } else {
      dispatch({
        type: 'INIT_CONTACT_INFORMATION',
        data: student
      })
    }
  }
}

// deletes course which student has applied
export const deleteAppliedCourse = (course_id, student_id) => {
  return async (dispatch) => {
    const response = await studentService.deleteApplication(student_id, course_id)
    if (response.error || response === undefined) {
      dispatch({
        type: 'NOTIFY',
        data: 'Delete failed!'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    } else {
      dispatch({
        type: 'STUDENT_APPLICATION_DELETE',
        data: { id: course_id }
      })
      dispatch({
        type: 'NOTIFY',
        data: 'Application deleted'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    }
  }
}

export const updatePhone = (phone) => {
  return {
    type: 'UPDATE_PHONE',
    data: phone
  }
}

export const updateEmail = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    data: email
  }
}

export const updateExperience = (experience) => {
  return {
    type: 'UPDATE_EXPERIENCE',
    data: experience
  }
}
export const updateLanguage = (teachesInEnglish) => {
  return {
    type: 'UPDATE_LANGUAGE',
    data: teachesInEnglish
  }
}

export const updateApprentice = (apprentice) => {
  return {
    type: 'UPDATE_APPRENTICE',
    data: apprentice
  }
}

export default {
  updatePhone,
  updateEmail,
  updateLanguage,
  updateExperience,
  updateApprentice,
  initializeStudents,
  getStudent,
  getStudentCourses,
  getContactInformation,
  deleteAppliedCourse,
  getStudentCourseIds
}
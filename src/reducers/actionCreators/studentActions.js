import studentService from '../../services/students'

// tells studentservice to get all students from database
const initializeStudents = () => {
  console.log('INIT_STUDENT_ACTION')
  return async (dispatch) => {
    const content = await studentService.getAll()
    dispatch({
      type: 'INIT_STUDENTS',
      data: content
    })
  }
}

// tells studentservice to get specific student by id from database
const getStudent = (id) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(id)
    dispatch({
      type: 'GET_STUDENT',
      data: content
    })
  }
}


// tells studentservice to get specific student's courses and dispatch them to store
const getStudentCourses = (id) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(id)
    console.log('studentactions getstudentcourses content', content)
    dispatch({
      type: 'INIT_STUDENT_COURSES',
      data: content
    })
  }
}

// tells studentservice to get specific student's courses
const getContactInformation = (id) => {
  console.log(id)
  return async (dispatch) => {
    const student = await studentService.getStudent(id)
    console.log('studentactionin getcontactinformationin student', student)
    if (student===undefined || student.error) {
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
const deleteAppliedCourse = (course_id, student_id) => {
  return async (dispatch) => {

    const response = await studentService.deleteApplication(student_id, course_id)
    console.log(response)
    if (response.error || response===undefined) {
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
        data: 'Course deleted'
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
        })
      }, 3000)
    }
  }
}

const updatePhone = (phone) => {
  return {
    type: 'UPDATE_PHONE',
    data: phone
  }
}

const updateEmail = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    data: email
  }
}

const updateExperience = (experience) => {
  return {
    type: 'UPDATE_EXPERIENCE',
    data:experience
  }
}
const updateLanguage = (teachesInEnglish) => {
  return {
    type: 'UPDATE_LANGUAGE',
    data:teachesInEnglish
  }
}
export { updatePhone, updateEmail, updateLanguage, updateExperience,
  initializeStudents, getStudent, getStudentCourses, getContactInformation, deleteAppliedCourse }
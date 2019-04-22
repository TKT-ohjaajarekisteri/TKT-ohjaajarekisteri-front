import studentService from '../../services/students'

// tells studentservice to get specific student by id from database
export const getSingleStudent = (studentId) => {
  return async (dispatch) => {
    const content = await studentService.getSingleStudent(studentId)
    dispatch({
      type: 'INIT_SINGLE_STUDENT',
      data: content
    })
  }
}

// tells studentservice to get specific student's courses and dispatch them to store
export const getSingleStudentCourses = (studentId) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(studentId)
    dispatch({
      type: 'INIT_SINGLE_STUDENT_COURSES',
      data: content
    })
  }
}
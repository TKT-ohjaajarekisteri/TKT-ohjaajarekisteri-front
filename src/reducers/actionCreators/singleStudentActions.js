import studentService from '../../services/students'

// tells studentservice to get specific student by id from database
export const getSingleStudent = (studentId) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(studentId)
    console.log('singleStudentActionsin singlestudent', content)
    dispatch({
      type: 'INIT_SINGLE_STUDENT',
      data: content
    })
  }
}
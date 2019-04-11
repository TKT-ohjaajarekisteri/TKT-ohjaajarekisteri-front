import courseService from '../../services/courses'

// tells studentservice to get specific student by id from database
export const getSingleStudent = (courseId, studentId) => {
  return async (dispatch) => {

    const students = await courseService.getStudents(courseId)
    console.log('singlestudentactionin students', students)
    const content = students.find(s => {
      console.log('studentactionin student.sudent_id ja studentIdfunktiossa', s.student_id, Number(studentId))
      return s.student_id === Number(studentId)
    })

    console.log('singleStudentActionsin singlestudent', content)
    dispatch({
      type: 'INIT_SINGLE_STUDENT',
      data: content
    })
  }
}
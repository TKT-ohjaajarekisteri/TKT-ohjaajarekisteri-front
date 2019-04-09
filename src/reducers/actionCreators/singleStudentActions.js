import courseService from '../../services/courses'

// tells studentservice to get specific student by id from database
export const getSingleStudent = (courseId, studentId) => {
  return async (dispatch) => {

    const students = await courseService.getStudents(courseId)
    console.log('singlestudentactionin students', students)
    
    // const content= applicants.find(function(student) {
    //   console.log('studentactionin student.sudent_id ja studentIdfunktiossa', student.student_id, studentId)
    //   return student.student_id === studentId
    // })
    const content = students.find(student => {
      return student.student_id === studentId
    })

    console.log('singleStudentActionsin singlestudent', content)
    dispatch({
      type: 'INIT_SINGLE_STUDENT',
      data: content
    })
  }
}
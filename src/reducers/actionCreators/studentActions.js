import studentService from '../../services/students'

const initializeStudents = () => {
  return async (dispatch) => {
    const content = await studentService.getAll()
    dispatch({
      type: 'INIT_STUDENTS',
      data: content
    })
  }
}

const getStudent = (id) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(id)
    dispatch({
      type: 'GET_STUDENT',
      data: content
    })
  }
}

const getStudentCourses = (id) => {
  return async (dispatch) => {
    const content = await studentService.getCourses(id)
    dispatch({
      type: 'INIT_STUDENT_COURSES',
      data: content
    })
  }
}

const getContactInformation = (id) => {
  return async (dispatch) => {
    // TODO GET CONTACT INFORMATION FROM BACKEND
    const content = {
      nickname: '',
      phone: '',
      email: ''
    }
    dispatch({
      type: 'INIT_CONTACT_INFORMATION',
      data: content
    })
  }
}

const createStudent = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.update(content, id)

    // Upcoming fix for updating email without logging in again
    // if (response.error) {
    //   return
    // }
    // let loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))
    // loggedUser.user.email = true
    // window.localStorage.setItem('loggedInUser', JSON.stringify(loggedUser))
    // dispatch({
    //   type: 'UPDATE_LOGGED_USER',
    //   data: loggedUser
    // })

    dispatch({
      type: 'CREATE_STUDENT_CONTACTINFO',
      data: response.course

    })
  }
}


const applyForCourse = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.apply(content, id)

    dispatch({
      type: 'STUDENT_COURSE_APPLICATION',
      data: response.course

    })
  }
}


export { applyForCourse, createStudent, initializeStudents, getStudent, getStudentCourses, getContactInformation }
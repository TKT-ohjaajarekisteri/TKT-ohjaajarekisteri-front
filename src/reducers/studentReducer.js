import studentService from '../services/students'

const studentReducer = (store = [], action) => {
  switch (action.type) {
  case 'INIT_STUDENTS':
    return action.data

  case 'CREATE_STUDENT_CONTACTINFO':
    if (store.find(student => student.student_id === action.data.student_id)) {
      return store
    }
    return [...store, action.data]

  default:
    return store
  }
}

// Action creators

export const initializeStudents = () => {
  return async (dispatch) => {
    const content = await studentService.getAll()
    dispatch({
      type: 'INIT_STUDENTS',
      data: content
    })
  }
}

export const getStudent = (id) => {
  return async (dispatch) => {
    const content = await studentService.getStudent(id)
    dispatch({
      type: 'GET_STUDENT',
      data: content
    })
  }
}

export const createStudent = (content, id) => {
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


export const applyForCourse = (content, id) => {
  return async (dispatch) => {
    const response = await studentService.apply(content, id)

    dispatch({
      type: 'STUDENT_COURSE_APPLICATION',
      data: response.course

    })
  }
}
export default studentReducer
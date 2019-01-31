import studentService from '../services/students'

const studentReducer = (store = [], action) => {
  switch (action.type) {
  case 'INIT_STUDENTS':
    return action.data

  case 'CREATE_STUDENT':
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


export default studentReducer
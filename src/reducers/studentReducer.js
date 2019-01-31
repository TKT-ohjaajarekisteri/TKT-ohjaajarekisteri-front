import studentService from '../services/students'


const studentReducer = (store = [], action) => {
  switch (action.type) {
    case 'INIT':
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

//ACTIONCREATORIT

export const initializeStudents = () => {
  return async (dispatch) => {
    const content = await studentService.getAll()
    console.log(content)
    dispatch({
      type: 'INIT',
      data: content
    })
  }
}


export default studentReducer
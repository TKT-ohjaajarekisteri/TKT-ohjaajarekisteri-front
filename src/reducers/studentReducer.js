//import students from '../services/students'
import studentService from '../services/students'


const studentReducer = (store = [], action) => {

  switch (action.type) {
  case 'CREATE':
    return [...store, action.data]

  case 'INIT':
    return action.data

  default:
    return store
  }
}

//ACTIONCREATORIT
export const createStudent=(applicant,course) => {
  return async (dispatch)  => {
    const student = await studentService.create(applicant,course)
    dispatch({
      type:'CREATE',
      data:student

    })
  }
}
export const initializeStudents = () => {
  return async (dispatch) => {
    const s = await studentService.getAll()
    console.log(s)
    dispatch({
      type: 'INIT',
      data:s
    })
  }
}
export default studentReducer
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
export const createStudent=(applicant)=> {
  return async (dispatch)  => {
    const student = await studentService.create(applicant)
    dispatch({
      type:'CREATE',
      data:student

    })
  }
}
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
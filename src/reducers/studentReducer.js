import studentService from '../services/students'


const studentReducer = (store = [], action) => {

  switch (action.type) {
  case 'CREATE':
    return [...store, action.data]

  case 'INIT':
    return action.data

  case 'INIT_APPLICANTS':
    return action.data


  default:
    return store
  }
}

//ACTIONCREATORIT
export const createStudent=(applicant) => {
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
      data:content
    })
  }
}

export const initializeApplicants = () => {
  return async (dispatch) => {
    const content = await studentService.getStudents()
    ///const content = await courseService.getStudents(id)
    // console.log(content,'getappplivçan ACTION')
    dispatch({
      type: 'INIT_APPLICANTS',
      data:content
    })
  }
}

export default studentReducer
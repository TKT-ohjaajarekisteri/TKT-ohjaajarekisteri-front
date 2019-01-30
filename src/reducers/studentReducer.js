import studentService from '../services/students'


const studentReducer = (store = [], action) => {
  switch (action.type) {

  case 'INIT':
    return action.data

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
      data:content
    })
  }
}


export default studentReducer
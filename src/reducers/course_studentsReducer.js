import course_studentsService from '../services/course_students'


const courseReducer = (store = [], action) => {

  switch (action.type) {
  case 'INIT_COURSE':
    return action.data

  default:
    return store
  }
}

//ACTIONCREATORI

export const initializeApplicants = () => {
  return async (dispatch) => {
    const content = await course_studentsService.getAll()
    console.log(content)
    dispatch({
      type: 'INIT_APPLICANTS',
      data:content
    })
  }
}
export default courseReducer
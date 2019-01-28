import courseService from '../services/courses'


const singleCourseReducer = (store = [], action) => {
  switch (action.type) {
    case 'INIT_APPLICANTS':
      return action.data
    default:
      return store
  }
}

//ACTIONCREATORIT

export const initializeApplicants = (id) => {
    return async (dispatch) => {
      const content = await courseService.getStudents(id)
      console.log(content,'initialize applicants ACTION')
      dispatch({
        type: 'INIT_APPLICANTS',
        data: content
      })
    }
}

export default singleCourseReducer
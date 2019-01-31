import courseService from '../services/courses'


const courseReducer = (store = [], action) => {

  switch (action.type) {
  case 'CREATE_COURSE':
    return [...store, action.data]

  case 'INIT_COURSES':
    return action.data

  case 'INIT_SINGLECOURSE':
    return action.data

    // case 'INIT_APPLICANTS':
    //   return action.data

  default:
    return store
  }
}

//ACTIONCREATORIT
export const createCourse=(course) => {
  return async (dispatch)  => {
    //console.log(course, 'create course')
    const course_data = await courseService.create(course)
    dispatch({
      type:'CREATE_COURSES',
      data:course_data

    })
  }
}
export const initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    // console.log(content,'courseinitcontent_ACTION')
    dispatch({
      type: 'INIT_COURSES',
      data:content
    })
  }
}

export const initializeSingleCourse = (id) => {
  return async (dispatch) => {
    const content = id
    // console.log(id,'initsingleääääääääääääääääääääääääääääääääääääääääääääääääää ACTION')
    dispatch({
      type: 'INIT_SINGLECOURSE',
      data:content
    })
  }
}

// export const initializeApplicants = () => {
//   return async (dispatch) => {
//     const content = await courseService.getStudents()
//     ///const content = await courseService.getStudents(id)
//     console.log(content,'getappplivçan ACTION')
//     dispatch({
//       type: 'INIT_APPLICANTS',
//       data:content
//     })
//   }
// }

export default courseReducer
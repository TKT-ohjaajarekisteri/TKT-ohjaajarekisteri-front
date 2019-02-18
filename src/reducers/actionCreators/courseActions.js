import courseService from '../services/courses'


// tells courseService to get allcourses from database and dispatch them to store
const  initializeCourses = () => {
  return async (dispatch) => {
    const content = await courseService.getAll()
    dispatch({
      type: 'INIT_COURSES',
      data: content
    })
  }
}


// tells courseService to create studentcontactinfo(+course) and dispatch them to store
const createContent = (content) => {
  return async (dispatch) => {

    const response = await courseService.create(content)

    dispatch({
      type: 'CREATE_COURSE',
      data: response.course

    })

    dispatch({
      type: 'CREATE_STUDENT',
      data: response.student
    })
  }

}
export default { createContent, initializeCourses }
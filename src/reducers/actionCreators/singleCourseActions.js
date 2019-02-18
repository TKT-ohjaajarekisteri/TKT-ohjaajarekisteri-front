import courseService from '../services/courses'

export const initializeSingleCourse = (id) => {
  return async (dispatch) => {
    const course = await courseService.getOne(id)
    dispatch({
      type: 'INIT_COURSE',
      data: course
    })

    const applicants = await courseService.getStudents(id)
    dispatch({
      type: 'INIT_APPLICANTS',
      data: applicants
    })
  }
}
export default { initializeSingleCourse }
import courseService from '../../services/courses'

// tells courseservice to get all courses and students from database
const initializeSummary = () => {
  return async (dispatch) => {
    const content = await courseService.getSummary()
    dispatch({
      type: 'INIT_SUMMARY',
      data: content
    })
  }
}

export { initializeSummary }


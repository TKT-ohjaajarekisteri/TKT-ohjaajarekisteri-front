import courseService from '../../services/courses'


// tells studentservice to get all students from database
const initializeSummary = () => {
  console.log('INIT_SUMAMRY_ACTION')
  return async (dispatch) => {
    const content = await courseService.getSummary()
    dispatch({
      type: 'INIT_SUMMARY',
      data: content
    })
  }
}

export { initializeSummary }
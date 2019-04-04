import courseService from '../../services/courses'

// tells courseservice to get all courses and students from database
const initializeSummary = () => {
  console.log('INIT_SUMMAMRY action')
  return async (dispatch) => {
    const content = await courseService.getSummary()
    console.log('INIT _SUMMARY action content', content)
    dispatch({
      type: 'INIT_SUMMARY',
      data: content
    })
  }
}

export { initializeSummary }


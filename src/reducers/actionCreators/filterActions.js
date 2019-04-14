const initializeFilter = () => {
  return async (dispatch) => {
    dispatch({
      type: 'INIT_FILTER'
    })
  }
}

// programmeId, as in 'TKT', 'CSM', 'DATA'
const setProgramme = (programmeId) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_PROGRAMME',
      data: programmeId
    })
  }
}

// period, as in: '1', '2', '3', ...
const setPeriod = (period) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_PERIOD',
      data: period
    })
  }
}

// course names
const setCourseName = (courseName) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_COURSE_NAME',
      data: courseName
    })
  }
}

// course ids
const setCourseId = (courseId) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_COURSE_ID',
      data: courseId
    })
  }
}

export { initializeFilter, setProgramme, setPeriod, setCourseName, setCourseId }
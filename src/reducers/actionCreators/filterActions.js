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

// course yearFrom
const setYearFrom = (yearFrom) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_COURSE_YEARFROM',
      data: yearFrom
    })
  }
}

// course yearTo
const setYearTo = (yearTo) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_COURSE_YEARTO',
      data: yearTo
    })
  }
}

export default { initializeFilter, setProgramme, setPeriod, setCourseName, setYearFrom, setYearTo }
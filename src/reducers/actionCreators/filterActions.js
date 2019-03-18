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

export { initializeFilter, setProgramme, setPeriod }
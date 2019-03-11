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

export { initializeFilter, setProgramme }
const notify = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFY',
      data: message
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, time * 1000)
  }
}


const setError = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFY',
      data: message
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, time * 1000)
  }
}
export { setError, notify }
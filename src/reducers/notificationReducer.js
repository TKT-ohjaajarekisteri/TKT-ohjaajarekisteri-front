const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'NOTIFY':
    return action.data

  case 'CLEAR':
    return ''

  default:
    return state
  }

}

// Action creators

export const notify = (message, time) => {
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
export default notificationReducer
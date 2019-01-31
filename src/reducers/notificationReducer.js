const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'NOTIFY':
    return action.message
  case 'CLEAR':
    return ''
  default:
    return state
  }

}

export const notify = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFY',
      message
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
        //message
      })
    }, time*1000)
  }
}
export default notificationReducer
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

export default notificationReducer
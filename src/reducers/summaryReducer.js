
const summaryReducer = (state=[], action) => {
  console.log(action.type, 'INIT SUMMARY ', action.data)
  switch (action.type) {
  case 'INIT_SUMAMRY':
    return action.data

  default:
    return state
  }
}
export default summaryReducer

// returns summary from store
const initialState = {
  summary: []
}

const summaryReducer = (state = initialState, action) => {
  //console.log(action.type, 'INIT SUMMARY data ', action.data)
  switch (action.type) {
  case 'INIT_SUMMARY':
    return {
      ...state,
      summary: action.data
    }
    // return action.data

  default:
    return state
  }
}
export default summaryReducer



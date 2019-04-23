const initialState = {
  summary: []
}

// returns summary from store
const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INIT_SUMMARY':
    return {
      ...state,
      summary: action.data
    }

  default:
    return state
  }
}
export default summaryReducer



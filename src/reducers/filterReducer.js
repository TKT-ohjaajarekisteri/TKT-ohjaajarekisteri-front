// defines the state of course list filter

const initialState = {
  studyProgramme: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PROGRAMME': {
    if (state.studyProgramme === action.data) {
      return { ...state, studyProgramme: '' }
    }
    return { ...state, studyProgramme: action.data }
  }
  case 'INIT_FILTER': {
    return initialState
  }
  default: {
    return state
  }
  }
}


export default filterReducer